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
  const [error, setError] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [tapImage, setTapImage] = useState(null);
  const [totalImages, setTotalImages] = useState(0);

  const openModal = (imageUrl) => {
    setTapImage(imageUrl);
    setIsOpen(true);
  };

  const closeModal = () => {
    setTapImage(null);
    setIsOpen(false);
  };

  useEffect(() => {
    const getImages = async () => {
      try {
        setIsLoading(true);
        const response = await fetchImages(query, page);
        setImages((prev) => [...prev, ...response.results]);
        setTotalImages(response.total);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
        setError(true);
      }
    };
    getImages();
  }, [query, page]);

  const handleSubmit = (newQuery) => {
    setImages([]);
    setQuery(newQuery);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div className="conrainer">
      <SearchBar onSubmit={handleSubmit} />

      <ImageGallery images={images} openModal={openModal} />
      {error && <ErrorMessage />}
      <ImageModal isOpen={isOpen} closeModal={closeModal} imageUrl={tapImage} />
      {isLoading && !error && <Loader />}
      {!isLoading && images.length < totalImages && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </div>
  );
}

export default App;
