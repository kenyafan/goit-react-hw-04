import "modern-normalize";
import "./index.css";
import { useEffect, useState } from "react";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import Loader from "./components/Loader/Loader";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchImages } from "./api/getImage";

function App() {
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [tapImage, setTapImage] = useState(null);
  const [totalImages, setTotalImages] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const openModal = (imageUrl) => {
    setTapImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setTapImage(null);
    setIsOpen(false);
  };

  useEffect(() => {
    if (query) {
      setIsLoading(true);
      const getImages = async () => {
        try {
          const response = await fetchImages(query, page);
          if (response) {
            setTotalImages(response.total);
            if (response.results.length === 0) {
              setError("No results found");
            } else {
              setImages((prev) => [...prev, ...response.results]);
              setError("");
            }
          } else {
            setError(true);
          }
        } catch (error) {
          console.log(error);
          setError(true);
        } finally {
          setIsLoading(false);
        }
      };
      getImages();
    }
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    if (newQuery === query) {
      return;
    }
    setIsLoading(true);
    setImages([]);
    setQuery(newQuery);
    setPage(1);
    setIsSubmitted(true);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageGallery images={images} openModal={openModal} />
      {isSubmitted && error && !isLoading && <ErrorMessage message={error} />}
      <ImageModal isOpen={isOpen} closeModal={closeModal} imageUrl={tapImage} />
      {isLoading && !error && <Loader />}
      {!isLoading && !error && images.length < totalImages && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </div>
  );
}

export default App;
