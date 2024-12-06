import { SearchbarProps } from "@/types/commonComponent/Search.types";
import React, { useLayoutEffect, useState } from "react";
import styles from "../Header/Header.module.css";
import { IoMdSearch } from "react-icons/io";


const Searchbar:React.FC<SearchbarProps> = ({ placeholder, onSearch }) => {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  useLayoutEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 300); // Delay in ms

    return () => {
      clearTimeout(handler); // Cleanup timeout on every render
    };
  }, [query]);

  useLayoutEffect(() => {
    if (debouncedQuery.trim() !== "") {
      onSearch(debouncedQuery); // Trigger search only for debounced input
    }
  }, [debouncedQuery, onSearch]);
  return (
    <>
      <div className={styles.searchbarContainer}>
        <div className={styles.searchbarContainer__icon}>
          <IoMdSearch />
        </div>
        <input
          className={styles.searchbar}
          type="text"
          placeholder={placeholder ? placeholder : "Search..."}
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
      </div>
    </>
  );
};

export default Searchbar