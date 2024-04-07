import { useState } from "react";
import { toast } from "react-hot-toast";
import s from "./SearchBar.module.css";
import { Toaster } from "react-hot-toast";

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query");
    } else {
      onSubmit(query);
      setQuery("");
    }
  };

  return (
    <>
      <header className={s.header}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            className={s.input}
            type="text"
            name="query"
            placeholder="Search images..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className={s.searchButton} type="submit">
            Search
          </button>
        </form>
      </header>
      <Toaster position="top-right" />
    </>
  );
};

export default SearchBar;
