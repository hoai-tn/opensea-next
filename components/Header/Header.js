import React from 'react'
import styles from './styles'
import Link from 'next/link'
import Image from 'next/image'
import openseaLogo from '../../assets/images/opensea.png'
import { AiOutlineSearch } from 'react-icons/ai'
import { CgProfile } from 'react-icons/cg'
import { MdOutlineAccountBalanceWallet } from 'react-icons/md'

const Header = () => {
  return (
    <div className={styles.wrapper}>
      <Link href="/">
        <div className={styles.logoContainer}>
          <Image src={openseaLogo} height={40} width={40} />
          <div className={styles.logoText}>Opensea</div>
        </div>
      </Link>
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <AiOutlineSearch />
        </div>
        <input
          className={styles.searchInput}
          placeholder="Search items, collections, and accounts"
        />
      </div>
      <div className={styles.headerItems}>
        <Link href="/collections/0x66a576A977b7Bccf510630E0aA5e450EC11361Fa">
          <div className={styles.headerItem}> Collections </div>
        </Link>
        <div className={styles.headerItem}> Stats </div>
        <div className={styles.headerItem}> Resources </div>
        <div className={styles.headerItem}> Create </div>
        <div className={styles.headerIcon}>
          <CgProfile />
        </div>
        <div className={styles.headerIcon}>
          <MdOutlineAccountBalanceWallet />
        </div>
      </div>
    </div>
  )
}

export default Header
