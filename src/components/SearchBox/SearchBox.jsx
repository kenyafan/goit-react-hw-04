import s from "./SearchBox.module.css";

const SearchBox = ({ searchStr, onChangeSearch }) => {
  return (
    <label className={s.label}>
      Find contacts by name
      <input
        className={s.input}
        value={searchStr}
        onChange={(e) => onChangeSearch(e.target.value)}
        type="text"
        placeholder="Enter search name"
        name="search"
      />
    </label>
  );
};

export default SearchBox;
