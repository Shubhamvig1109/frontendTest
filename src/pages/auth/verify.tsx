import React, { useState } from "react";
import styles from "../../../styles/modules/verify.module.css";
import LottieAnimation from "@/lotties/lottiesAnimation";

const Verify = () => {
  const [OTP, setOTP] = useState<any>("");

  const handleOtp = (value: any) => {
    if (value.length < 7) {
      setOTP(value);
    }
  };

  return (
    <div className={styles.dashboardMainContainer}>
      <div className={styles.authenticationContainer}>
        <div className={styles.loginContaier}>
          <h3>Kindly Verify Your OTP Sent On Your Email Address</h3>
          <label htmlFor="otp">OTP required</label>
          <input
            type="number"
            placeholder="paste 6 digit otp here"
            max={6}
            id="otp"
            className={styles.noarrowsinput}
            onChange={(event) => {
              handleOtp(event?.target.value);
            }}
            value={OTP}
          />
        </div>
        <div className={styles.loginImageContainer}>
          <LottieAnimation height={500} width={500} />
        </div>
      </div>
    </div>
  );
};

export default Verify;
