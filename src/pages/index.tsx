import LandingPage from '@/modules/home';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const HomePage: any = () => {

    const count = useSelector((state: any) => state.counter.value)
    console.log("count", count);

    return (
        <div>
            <LandingPage />
        </div>
    )
}

export default HomePage;
