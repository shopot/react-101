import { ReactElement, useRef, useState } from 'react';

import { Badge, Button, Divider, Subtitle } from '@/shared/ui';

export const Stopwatch = (): ReactElement => {
  const [startTime, setStartTime] = useState<ReturnType<typeof Date.now> | null>(null);
  const [now, setNow] = useState<ReturnType<typeof Date.now> | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleStart = () => {
    setStartTime(Date.now());

    setNow(Date.now());

    clearInterval(intervalRef.current!);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalRef.current!);
  };

  let secondsPassed = 0;

  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <>
      <Subtitle>Таймер</Subtitle>
      <Divider />В этом примере используется комбинация состояния и <Badge>ref</Badge>. И{' '}
      <Badge>startTime</Badge>, и <Badge>now</Badge> являются переменными состояния, поскольку они
      используются для рендеринга. Но нам также необходимо сохранить идентификатор интервала, чтобы
      мы могли остановить таймер нажатием кнопки. Поскольку идентификатор интервала не используется
      для рендеринга, целесообразно сохранить его в ссылке и обновлять вручную.
      <Divider />
      <Subtitle>Прошло времени: {secondsPassed.toFixed(2)}</Subtitle>
      <Button onClick={handleStart} variant="primary">
        Start
      </Button>
      <Button onClick={handleStop} variant="primary">
        Stop
      </Button>
    </>
  );
};
