import { JSX } from 'react';

import { Button } from './button';

type ToolbarProps = {
  onPlayMovie: () => void;
  onUploadImage: () => void;
};

export const Toolbar = ({ onPlayMovie, onUploadImage }: ToolbarProps): JSX.Element => {
  return (
    <div className="flex justify-center gap-3">
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
};
