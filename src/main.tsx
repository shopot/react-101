import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root')!);

const tick = () => {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );

  root.render(element);
};

setInterval(tick, 1000);
