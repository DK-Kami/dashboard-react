import React, { FC, useState } from 'react';
import KCard from '../../components/UI/KCard/KCard';
import './LoginPage.css';
import KInput from '../../components/UI/KInput/KInput';
import { IUser } from '../../types/user';
import AuthForm from './AuthForm';
import RegisterForm from './RegisterForm';
import RecoveryPasswordForm from './RecoveryPasswordForm';

const enum LoginFormType {
  repeatPassword = 'repeatPassword',
  register = 'register',
  login = 'login',
}

const LoginPage: FC = () => {
  const [currentFormType, setCurrentFormType] = useState<LoginFormType>(LoginFormType.register);

  const login = (user: IUser) => {
    console.log('login');
  }

  return (
    <div className='login-page'>
      <KCard>
        {currentFormType === LoginFormType.login
          && <AuthForm onSubmit={login}/>
        }
        {currentFormType === LoginFormType.register
          && <RegisterForm onSubmit={login}/>
        }
        {currentFormType === LoginFormType.repeatPassword
          && <RecoveryPasswordForm onSubmit={login}/>
        }
      </KCard>
    </div>
  );
};

export default LoginPage;
