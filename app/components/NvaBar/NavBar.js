
import Link from 'next/link'
import React, { useContext } from 'react'
import Logo from '../Logo/Logo'
import SearchInput from '../Search_Input/Search_Input'
import styles from "./NvaBar.module.css";
import Image from 'next/image';
import profile_icon from "../../assets/icon/profile.svg";

function NavBar() {

  return (
    <div>
      <nav className={styles.navBarConatiner}>
        <ul>
            <Link href={"/"} >{<Logo />}</Link>
        </ul>
        <ul className={styles.linkBar}>
            <li>
                <Link href={"/"} >Home</Link>
            </li>
            <li>
                <Link href={"/social"} >Social</Link>
            </li>
            <li>
                <Link href={"/library"} >Library</Link>
            </li>
        </ul>
        <ul>
            <SearchInput />
        </ul>
        <ul>
            <Link href={"/profile"} >
                <Image height={40} width={40} src={profile_icon} alt='profile_icon' priority={true} />
            </Link>
        </ul>
      </nav>
    </div>
  )
}

export default NavBar
