import React, { useRef } from 'react';

export type FourDigitPinInputProps = {
  onComplete: (pin: string) => void;
};

const FourDigitPinInput: React.FC<FourDigitPinInputProps> = ({ onComplete }) => {
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;

    if (!/^\d$/.test(value)) {
      e.target.value = '';
      return;
    }

    if (index < 3 && inputs.current[index + 1]) {
      inputs.current[index + 1]?.focus();
    }

    const allFilled = inputs.current.every((input) => input?.value.length === 1);
    if (allFilled) {
      const pin = inputs.current.map((input) => input!.value).join('');
      onComplete(pin);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !e.currentTarget.value && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '10px' }}>
      {Array.from({ length: 4 }, (_, i) => (
        <input
          key={i}
          type="text"
          inputMode="numeric"
          maxLength={1}
          ref={(el) => (inputs.current[i] = el)}
          onChange={(e) => handleChange(e, i)}
          onKeyDown={(e) => handleKeyDown(e, i)}
          style={{
            width: '50px',
            height: '50px',
            fontSize: '24px',
            textAlign: 'center',
            border: '1px solid #ccc',
            borderRadius: '8px',
          }}
        />
      ))}
    </div>
  );
};

export default FourDigitPinInput;
