

import React, { useEffect } from 'react'
import styles from '../../../../styles/components/header.module.css'
import Link from 'next/link';


const Header = () => {

  const headerList = [
    { value: "Home", path: '/' },
    { value: "Chat", path: '/' },
    { value: "Login", path: '/auth' },
    { value: "Contact", path: "/contact" }
  ]

  useEffect(() => {
  }, []);



  return (
    <div className={styles.header}>
      <Link href={'/'}>
        <video width="100" height="70" autoPlay loop muted>
          <source src="/images/myai.mp4" type="video/mp4" />
        </video>
      </Link>
      <ul className={styles.header_content}>
        {headerList.map((item: any, index: any) => {
          return (
            <Link href={`${item.path}`} key={index} style={{textDecoration:"none",color:"white"}}>
              <li>{item.value}</li>
            </Link>
          )
        })}
      </ul>
    </div>

  )
}

export default Header