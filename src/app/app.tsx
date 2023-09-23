import { ReactElement, useState } from 'react';

import styles from './app.module.css';

import { Button } from '@/shared/ui';
import { RegisterForm } from '@/components/register-form';
import { LoginForm } from '@/components/login-form';

const App = (): ReactElement => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className={styles.appContainer}>
      <h1 className={styles.h1}>React Hook Form</h1>
      <div className={styles.description}>
        <p>
          <strong>&lt;LoginForm /&gt;</strong> - реализована с использованием HTML-элементов
          &lt;input, /&gt;, &lt;button /&gt;, использует нативную HTML-валидацию.
        </p>
        <p>
          <strong>&lt;RegisterForm /&gt;</strong> - реализована на основе пользовательских
          компонентов (интеграция существующей формы) с использованием валидации на основе
          библиотеки <strong>Yup</strong>
        </p>
      </div>
      <div className="flex justify-center gap-3 mt-4">
        <Button onClick={() => setIsLoginForm(true)}>Login</Button>
        <Button onClick={() => setIsLoginForm(false)}>Register</Button>
      </div>
      <div className={styles.formWrapper}>{isLoginForm ? <LoginForm /> : <RegisterForm />}</div>
    </div>
  );
};

export default App;
