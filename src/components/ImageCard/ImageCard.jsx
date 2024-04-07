import s from "./ImageCard.module.css";

const ImageCard = ({ image, openModal }) => {
  const handleClick = () => {
    openModal(image.urls.regular);
  };
  return (
    <li className={s.imageCard} onClick={handleClick}>
      <img
        className={s.image}
        src={image.urls.small}
        alt={image.alt_description}
      />
    </li>
  );
};

export default ImageCard;
