import s from "./Contact.module.css";
import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ contact, handleDelete }) => {
  const { id, name, number } = contact;

  return (
    <>
      <div>
        <p className={s.name}>
          <FaUser className={s.icon} />
          {name}
        </p>
        <p className={s.number}>
          <BsFillTelephoneFill className={s.icon} />
          {number}
        </p>
      </div>
      <button
        className={s.button}
        type="button"
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

export default Contact;
