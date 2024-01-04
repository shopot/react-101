import { JSX } from 'react';

import styles from './panel.module.css';

type Props = {
  title: string;
  units: string[];
  activeIndex: boolean;
  onShow: () => void;
};

export const Panel = ({ title, units, activeIndex, onShow }: Props): JSX.Element => {
  const activeClass = activeIndex ? '' : styles.hover;

  const unitsList = units.map((unit) => (
    <div key={unit} className={styles.unit}>
      {unit}
    </div>
  ));

  return (
    <section className={styles.wrapper}>
      <button className={`${styles.button} ${activeClass}`} onClick={onShow}>
        {title}
      </button>
      {Boolean(activeIndex) && <div className="pl-4">{unitsList}</div>}
    </section>
  );
};
