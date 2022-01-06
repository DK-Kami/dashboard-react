import React, { FC } from 'react';
import './KCard.css';

const KCard: FC = ({ children }) => {
  return (
    <div className='KCard'>
      {children}
    </div>
  );
};

export default KCard;
