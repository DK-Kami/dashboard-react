import React, { FC, useState } from 'react';
import './KInput.css';

interface KInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
  label: string,
}

const KInput: FC<KInputProps> = ({ label, ...props }) => {
  const [errorMessage, setErrorMessage] = useState('');

  return (
    <div className='KInput-wrapper'>
      <input className='KInput' placeholder=' ' {...props} />
      <label className='KInput-label'>{label}</label>
      <label className='KInput-error'>{errorMessage}</label>
    </div>
  );
};

export default KInput;
