import React, { useEffect, useState } from 'react'
import styles from '../../../../styles/components/header.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';


const Header = () => {
    const router = useRouter()
    const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)


    const handleLogout = () => {
        localStorage.removeItem('token')
        router.replace({
            pathname: '/auth'
        })
    }


    useEffect(() => {
        const token = localStorage.getItem('token')
        console.log("token", token);
        if (!token) {
            router.replace({
                pathname: '/auth'
            })
        } else {
            setIsLoggedIn(true)
        }


    }, [])

    return (
        <>
            {isLoggedIn && <div className={styles.header}>
                <Link href={'/'}>
                    <video width="100" height="70" autoPlay loop muted>
                        <source src="/images/myai.mp4" type="video/mp4" />
                    </video>
                </Link>
                <ul className={styles.header_Login}>
                    {/* <Link href={`${item.path}`} key={index} style={{ textDecoration: "none", color: "white" }}> */}
                    <button type='submit' onClick={() => { handleLogout() }}>Logout</button>
                    <img src="/images/login.png" alt='profile' />
                    {/* </Link> */}

                </ul>
            </div>}

        </>
    )
}

export default Header