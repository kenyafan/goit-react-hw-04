import s from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <button className={s.btn} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};

export default LoadMoreBtn;
