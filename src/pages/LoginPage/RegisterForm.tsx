import React, { FC, useState } from 'react';
import { IUser } from '../../types/user';
import KInput from '../../components/UI/KInput/KInput';

interface RegisterFormProps {
  onSubmit: (user: IUser) => void,
}

const RegisterForm: FC<RegisterFormProps> = ({ onSubmit }) => {
  const [user, setUser] = useState<IUser>({ email: '', password: '' });

  return (
    <form onSubmit={() => onSubmit(user)}>
      <KInput
        value={user.nickname}
        onChange={(e) => setUser({ ...user, nickname: e.target.value })}
        label='nickname'
      />
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

export default RegisterForm;
