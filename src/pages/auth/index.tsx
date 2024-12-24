import React, { Fragment, useState } from 'react'
import styles from '../../../styles/modules/dashboard.module.css'
import AdminOverview from '@/modules/dashboard/adminDashboard/adminOverview'
import UserOverview from '@/modules/dashboard/userDashboard/userOverview'
import CrmOverview from '@/modules/dashboard/crmDashboard/crmOverview'
import CounselorOverview from '@/modules/dashboard/counselorDashboard/counselorOverview'
import Image from 'next/image'
import LottieAnimation from '@/lotties/lottiesAnimation'
import { useDispatch } from 'react-redux'
import websiteReducer, { websiteSlice } from '@/redux/website/websiteReducer'
import AuthenticationApi from '@/utils/api/authentication'
import { toast } from 'react-toastify'
import { useRouter } from 'next/router'


const Authentication = () => {
    const router = useRouter()
    const [switchAuth, setSwitchAuth] = useState<any>(true)
    const [userEmail, setUserEmail] = useState<any>('')
    console.log("userEmail", userEmail);

    const [userPassword, setUserPassword] = useState<any>('')
    const dispatch = useDispatch()
    const handleLogin = async (e: any) => {
        e.preventDefault()
        try {
            dispatch(websiteSlice.actions.setLoading)
            const response = await AuthenticationApi.login({ email: userEmail, password: userPassword })
            console.log("response", response);
            if (response) {
                const token = response?.data?.data
                localStorage.setItem('token', token)
                router.replace({
                    pathname: "/dashboard"
                })
            }

            dispatch(websiteSlice.actions.disableloading)
        } catch (err: any) {
            dispatch(websiteSlice.actions.disableloading)
            toast.error(`${err?.response?.data ? err.response.data.error : 'Something went wrong!!'}`);
        }

    }

    const handleRegistration = async (e: any) => {
        e.preventDefault()
        try {
            dispatch(websiteSlice.actions.setLoading)
            const response: any = await AuthenticationApi.userRegistration({ email: userEmail, password: userPassword })
            if (response) {
                const token = response?.data?.data?.token
                localStorage.setItem('token', token)
                router.replace({
                    pathname: "/auth/verify"
                })
            }


            dispatch(websiteSlice.actions.disableloading)
        } catch (err: any) {
            dispatch(websiteSlice.actions.disableloading)
            toast.error(`${err?.response?.data ? err.response.data.error : 'Something went wrong!!'}`);
        }

    }



    return (
        <Fragment>
            <div className={styles.dashboardMainContainer}>
                <div className={styles.authenticationContainer}>
                    <div className={styles.loginContaier}>
                        <h1>{switchAuth ? 'Login Account' : 'Sign Up'}</h1>
                        <p>{switchAuth ? "Don't Have An Account?" : "Already have an account?"}  <span onClick={() => setSwitchAuth(!switchAuth)}>{switchAuth ? 'Sign Up' : 'Login'}</span> </p>
                        {switchAuth ? <form onSubmit={handleLogin} className={styles.formContainer}>
                            <label htmlFor="username">Email Address</label>
                            <input type="text" id='username' onChange={(event) => { setUserEmail(event?.target.value) }} />
                            <label htmlFor="password">Password</label>
                            <input type="password" id='password' onChange={(event) => { setUserPassword(event?.target.value) }} />
                            <button type="submit">Login</button>
                        </form> : <form onSubmit={handleRegistration} className={styles.formContainer}>
                            <label htmlFor="email">Email Address</label>
                            <input type="text" id='email' onChange={(event) => { setUserEmail(event?.target.value) }} />
                            <label htmlFor="passwordSignup">Password</label>
                            <input type="password" id='passwordSignup' onChange={(event) => { setUserPassword(event?.target.value) }} />
                            <button type="submit">Sign Up</button>
                        </form>}


                    </div>
                    <div className={styles.loginImageContainer}>
                        <LottieAnimation height={500} width={500} />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Authentication