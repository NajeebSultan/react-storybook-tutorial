import React, { useEffect, useRef, useState } from 'react';

export type OtpVerificationInputProps = {
  length?: number;
  duration?: number; // in seconds
  onComplete: (otp: string) => void;
  onResend: () => void;
};

const OtpVerificationInput: React.FC<OtpVerificationInputProps> = ({
  length = 6,
  duration = 30,
  onComplete,
  onResend,
}) => {
  const [timer, setTimer] = useState(duration);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);
  const [otp, setOtp] = useState(Array(length).fill(''));

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (value: string, index: number) => {
    if (!/^\d$/.test(value)) return;
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }

    if (updatedOtp.every((char) => char.length === 1)) {
      onComplete(updatedOtp.join(''));
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }
  };

  const handleResend = () => {
    setOtp(Array(length).fill(''));
    setTimer(duration);
    inputsRef.current[0]?.focus();
    onResend();
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: '10px', marginBottom: '1rem' }}>
        {otp.map((value, i) => (
          <input
            key={i}
            ref={(el) => (inputsRef.current[i] = el)}
            type="text"
            inputMode="numeric"
            maxLength={1}
            value={value}
            onChange={(e) => handleChange(e.target.value, i)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            style={{
              width: '40px',
              height: '40px',
              textAlign: 'center',
              fontSize: '20px',
              border: '1px solid #ccc',
              borderRadius: '6px',
            }}
          />
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span>
          {timer > 0 ? `Resend in ${timer}s` : 'Didn’t receive code?'}
        </span>
        <button onClick={handleResend} disabled={timer > 0}>
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default OtpVerificationInput;
