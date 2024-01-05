import { JSX } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import styles from './login-form.module.css';

import { LoginFormValues } from './login-form-types';
import { loginFormValidator } from './login-form-validator';

export const LoginForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginFormValues>();

  const onSubmit: SubmitHandler<LoginFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <div className={styles.card}>
      <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} autoComplete="off">
        <div className={styles.formControl}>
          <label>Email</label>
          <input {...register('email', { ...loginFormValidator.email })} autoComplete="email" />
          {errors?.email && <span>{errors.email.message}</span>}
        </div>

        <div className={styles.formControl}>
          <label>Password</label>
          <input
            {...register('password', { ...loginFormValidator.password })}
            type="password"
            autoComplete="new-password"
          />
          {errors?.password && <span>{errors.password.message}</span>}
        </div>

        <div className={styles.actions}>
          <button type="submit" className={styles.primary}>
            Login
          </button>
          <button type="button" onClick={() => reset()}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};
