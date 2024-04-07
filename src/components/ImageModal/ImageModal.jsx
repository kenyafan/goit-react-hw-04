import Modal from "react-modal";

import s from "./ImageModal.module.css";

const ImageModal = ({ isOpen, closeModal, imageUrl }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel=""
      ariaHideApp={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          border: "none",
          background: "none",
          overflow: "hidden",
          padding: 0,
          borderRadius: "10px",
        },
      }}
    >
      <img className={s.modalImage} src={imageUrl} alt="image" />
    </Modal>
  );
};

export default ImageModal;
