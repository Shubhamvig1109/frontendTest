// components/LottieAnimation.js

import React from 'react';
import Lottie from 'react-lottie';
import animationData from './lottie.json'; // Import your Lottie animation JSON file

const LottieAnimation = ({ width, height }: any) => {


    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice',
        },
    };

    return (
        <Lottie options= { defaultOptions } height = { height } width = { width } />
  );
};

export default LottieAnimation;
