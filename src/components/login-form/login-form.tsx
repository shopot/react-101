import { ReactElement } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import styles from './login-form.module.css';

import { Button, Card, FormControl, Input } from '@/shared/ui';
import { LoginFormValues } from './login-form-types.ts';

export const LoginForm = (): ReactElement => {
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
    <Card>
      <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} autoComplete="off">
        <FormControl>
          <Input label="Email" {...register('email')} autoComplete="email" />
          <ErrorMessage errors={errors} name="email" as="span" />
        </FormControl>

        <FormControl>
          <Input
            label="Password"
            {...register('password')}
            type="password"
            autoComplete="new-password"
          />
          <ErrorMessage errors={errors} name="password" as="span" />
        </FormControl>

        <div className={styles.actions}>
          <Button type="submit" variant="primary">
            Send
          </Button>
          <Button onClick={() => reset()}>Reset</Button>
        </div>
      </form>
    </Card>
  );
};
