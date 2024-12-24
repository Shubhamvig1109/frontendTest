import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const router = useRouter()
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false)

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
      {isLoggedIn && <p>Dasoard</p>}
    </>
  )
}

export default Dashboard