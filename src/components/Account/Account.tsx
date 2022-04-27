import React from 'react';
import { PrimaryButton } from '../Button/Button';
import { Link } from '../Dropdown/Dropdown';

interface props {
  className: string;
}

const Account = ({ className }: props) => {
  return (
    <div className={`overpass flexCenterAll py-1 borderTop ${className}`}>
      <Link href="#login">Login</Link>
      <PrimaryButton>Sign Up</PrimaryButton>
    </div>
  );
};

export default Account;
