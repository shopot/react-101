import { ReactElement } from 'react';

import { Box } from './box';
import { Description } from './description.tsx';

export const IntersectionObserverApp = (): ReactElement => {
  return (
    <>
      <Description />
      <LongSection />
      <Box />
      <LongSection />
      <Box />
      <LongSection />
    </>
  );
};

function LongSection(): ReactElement {
  const items = [];

  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }

  return <ul>{items}</ul>;
}
