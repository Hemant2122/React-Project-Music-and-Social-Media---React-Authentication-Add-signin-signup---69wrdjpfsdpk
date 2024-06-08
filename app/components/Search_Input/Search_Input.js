"use client";
import Image from "next/image";
import styles from "./Search_Input.module.css";
import search from "../../assets/icon/search.svg";
import { useState } from "react";


function Search_Input({ setFilteredMusicList, musicList }) {

  const [searchVal, setSearchVal] = useState("");
  const handleSearch = (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredMusic = musicList.filter((music) =>
      music.title.toLowerCase().includes(searchTerm)
    );
    setSearchVal(event.target.value);
    setFilteredMusicList(filteredMusic);
  };


  return (
    <div className={styles.searchContainer}>
      <input className={styles.Search_Input} type='text' placeholder='search here' value={searchVal} onChange={handleSearch} />
      <Image className={styles.search_icon} height={25} width={25} src={search} alt="search" priority={true} />
    </div>
  )
}

export default Search_Input;

