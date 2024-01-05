import { JSX } from 'react';

import { Box } from './box';
import { Description } from './description';

export const IntersectionObserverApp = (): JSX.Element => {
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

function LongSection(): JSX.Element {
  const items = [];

  for (let i = 0; i < 50; i++) {
    items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
  }

  return <ul>{items}</ul>;
}
