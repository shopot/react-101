import { ReactElement } from 'react';

import styles from './panel.module.css';

export const Panel = ({ title, units, activeIndex, onShow }: Props): ReactElement => {
  const unitsList = units.map((unit) => (
    <div key={unit} className={styles.unit}>
      {unit}
    </div>
  ));

  const activeClass = activeIndex ? '' : styles.hover;

  return (
    <section className={styles.wrapper}>
      <button className={`${styles.button} ${activeClass}`} onClick={onShow}>
        {title}
      </button>
      {activeIndex && <div className="pl-4">{unitsList}</div>}
    </section>
  );
};

type Props = {
  title: string;
  units: string[];
  activeIndex: boolean;
  onShow: () => void;
};
