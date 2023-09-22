import { ReactElement, useState } from 'react';

import { Button } from '@/shared/ui';
import { RegisterForm } from '@/components/register-form';
import { LoginForm } from '@/components/login-form';

const App = (): ReactElement => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-center text-2xl font-bold">React Hook Form</h1>
      <div className="flex justify-center gap-3 mt-4">
        <Button onClick={() => setIsLoginForm(true)}>Login Form with HTML validation</Button>
        <Button onClick={() => setIsLoginForm(false)}>Register Form with Yup</Button>
      </div>
      <div className="flex justify-center w-auto mt-4">
        {isLoginForm ? <LoginForm /> : <RegisterForm />}
      </div>
    </div>
  );
};

export default App;
