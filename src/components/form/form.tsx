import { JSX } from 'react';

import { Button, Checkbox } from '@/components/ui';

type FormProps = {
  onCheckboxChange: (value: boolean) => void;
  onAddUser: () => void;
};

export const Form = ({ onCheckboxChange, onAddUser }: FormProps): JSX.Element => {
  return (
    <div className="flex gap-4 justify-center items-center">
      <Checkbox label="Without keys" onChange={onCheckboxChange} />

      <Button onCLick={onAddUser}>Add New</Button>
    </div>
  );
};
