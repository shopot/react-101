import { JSX } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ErrorMessage } from '@hookform/error-message';

import styles from './register-form.module.css';

import { Button, Input, Select, Checkbox, Card, FormControl } from '@/shared/ui';
import { RegisterFormValues } from './register-form-types';
import { yupSchemaValidator } from './yup-schema-validator';

export const RegisterForm = (): JSX.Element => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormValues>({ resolver: yupResolver(yupSchemaValidator) });

  const onSubmit: SubmitHandler<RegisterFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Card>
      <form onSubmit={(e) => void handleSubmit(onSubmit)(e)} autoComplete="off">
        <FormControl>
          <Input label="Name" {...register('name')} autoComplete="name" />
          <ErrorMessage errors={errors} name="name" as="span" />
        </FormControl>

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

        <FormControl>
          <Input
            label="Confirm password"
            {...register('confirm_password')}
            type="password"
            autoComplete="new-password"
          />
          <ErrorMessage errors={errors} name="confirm_password" as="span" />
        </FormControl>
        <FormControl>
          <Select
            label="Country"
            {...register('country')}
            options={['USA', 'Mexico', 'Germany', 'Antarctica']}
          />
          <ErrorMessage errors={errors} name="country" as="span" />
        </FormControl>

        <FormControl>
          <Input type="number" label="Age" {...register('age')} />
          <ErrorMessage errors={errors} name="age" as="span" />
        </FormControl>

        <FormControl>
          <Checkbox label="Accept terms of service" {...register('tos')} type="checkbox" />
          <ErrorMessage errors={errors} name="tos" as="span" />
        </FormControl>

        <div className={styles.actions}>
          <Button type="submit" variant="primary">
            Register
          </Button>
          <Button onClick={() => reset()}>Reset</Button>
        </div>
      </form>
    </Card>
  );
};
