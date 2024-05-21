"use client";
import Image from "next/image";
import styles from "./Search_Input.module.css";
import search from "../../assets/icon/search.svg";
import { useState } from "react";


function Search_Input() {

  const [searchVal, setSearchVal] = useState([]);
  console.log(searchVal, "Search value");


  return (
    <div className={styles.searchContainer}>
      <input className={styles.Search_Input} type='text' placeholder='search here' value={searchVal} onChange={(event) => {
        setSearchVal(event.target.value);
      }} />
      <Image className={styles.search_icon} height={25} width={25} src={search} alt="search" priority={true} />
    </div>
  )
}

export default Search_Input;

