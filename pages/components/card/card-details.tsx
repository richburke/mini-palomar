import cx from 'clsx';
import { formatCurrency, CURRENCY_FORMAT_USD_COMPACT } from '../../../core';
import styles from './card-details.module.css';

const formatCurrencyForDetails = formatCurrency(CURRENCY_FORMAT_USD_COMPACT);

type Props = {
  premium: number;
  participants: number;
  brokerCommissions: number;
  isOpen?: boolean;
};

export const CardDetails = ({
  premium,
  participants,
  brokerCommissions,
  isOpen = false,
}: Props) => {
  return (
    <div className={cx(styles.container, { [styles.open]: isOpen })}>
      <div>
        <p className={styles.datum}>
          <span className={styles.label}>Premium:</span>{' '}
          {formatCurrencyForDetails(premium)}
        </p>
        <p className={styles.datum}>
          <span className={styles.label}>Participants:</span> {participants}
        </p>
        <p className={styles.datum}>
          <span className={styles.label}>Broker Commissions: </span>
          {formatCurrencyForDetails(brokerCommissions)}
        </p>
      </div>
    </div>
  );
};
