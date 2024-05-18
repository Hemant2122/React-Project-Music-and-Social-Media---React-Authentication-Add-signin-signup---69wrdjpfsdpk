import Image from "next/image";
import styles from "./Search_Input.module.css";
import search from "../../assets/icon/search.svg";

function Search_Input() {
  return (
    <div className={styles.searchContainer}>
      <input className={styles.Search_Input} type='text' placeholder='search here' />
      <Image className={styles.search_icon} height={25} width={25} src={search} alt="search" priority={true} />
    </div>
  )
}

export default Search_Input;

