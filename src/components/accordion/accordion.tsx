import { ReactElement, useState } from 'react';

import roadmap from '@/data/react-roadmap.ts';

import { Panel } from '@/components';

export const Accordion = (): ReactElement => {
  const [activeIndex, setActiveIndex] = useState(0);

  const modulesList = roadmap.map(({ title, units }, index) => (
    <Panel
      key={title}
      title={title}
      units={units}
      activeIndex={activeIndex === index}
      onShow={() => setActiveIndex(index)}
    />
  ));

  return <>{modulesList}</>;
};
