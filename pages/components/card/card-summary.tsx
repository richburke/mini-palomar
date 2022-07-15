import { formatNumber } from '../../../core';
import styles from './card-summary.module.css';

type Props = {
  state: string;
  employees: number;
  year: number;
};

export const CardSummary = ({ state, employees, year }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.datum}>
        <p className={styles.label}>State</p>
        <p className={styles.value}>{state}</p>
      </div>
      <div className={styles.datum}>
        <p className={styles.label}>Employees</p>
        <p className={styles.value}>{formatNumber()(employees)}</p>
      </div>
      <div className={styles.datum}>
        <p className={styles.label}>Year</p>
        <p className={styles.value}>{year}</p>
      </div>
    </div>
  );
};
