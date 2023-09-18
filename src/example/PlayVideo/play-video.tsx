import { useRef, useState } from 'react';

import { Badge, Button, Divider, Subtitle } from '@/shared/ui';

export const PlayVideo = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    const nextIsPlaying = !isPlaying;

    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      void ref.current?.play();
    } else {
      void ref.current?.pause();
    }
  };

  return (
    <>
      <Subtitle>Воспроизведение и приостановка видео</Subtitle>
      <Divider />
      <p>
        В этом примере используется <Badge>ref</Badge> для вызова <Badge>play()</Badge> и{' '}
        <Badge>pause()</Badge> для элемента DOM <Badge>&lt;video /&gt;</Badge>.
      </p>
      <Divider />
      <Button onClick={handleClick} variant={isPlaying ? 'default' : 'primary'}>
        {isPlaying ? 'Pause' : 'Play'}
      </Button>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </>
  );
};
