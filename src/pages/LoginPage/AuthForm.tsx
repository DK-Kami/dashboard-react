import React, { FC, useState } from 'react';
import { IUser } from '../../types/user';
import KInput from '../../components/UI/KInput/KInput';

interface AuthFormProps {
  onSubmit: (user: IUser) => void,
}

const AuthForm: FC<AuthFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState<IUser>({ email: '', password: '' });

  return (
    <form onSubmit={() => onSubmit(user)}>
      <KInput
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        label='login'
      />
      <KInput
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        label='password'
        type='password'
      />
      <button>Login</button>
    </form>
  );
};

export default AuthForm;
