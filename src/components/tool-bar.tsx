import { Button } from '@/components/button';

export const Toolbar = ({ onPlayMovie, onUploadImage }: Props) => {
  return (
    <div className="flex justify-center gap-3">
      <Button onClick={onPlayMovie}>Play Movie</Button>
      <Button onClick={onUploadImage}>Upload Image</Button>
    </div>
  );
};

type Props = {
  onPlayMovie: () => void;
  onUploadImage: () => void;
};
