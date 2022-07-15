import { useState } from 'react';
import { Form5500Entry } from '../../core';
import CardDetails from './card-details';
import CardSummary from './card-summary';
import CardToggle from './card-toggle';
import styles from './card.module.css';

type Props = {
  info: Form5500Entry;
};

const Card = ({ info }: Props) => {
  const [toggle, setToggle] = useState(false);

  const {
    companyName,
    planYear,
    employeeCount,
    companyState,
    premiumSum,
    brokerCommissionSum,
    participantsSum,
  } = info;
  return (
    <div className={styles.container}>
      <p className={styles.title}>{companyName}</p>
      <CardSummary
        state={companyState}
        employees={employeeCount}
        year={planYear}
      />

      <hr className={styles.divider} />

      <CardToggle toggle={toggle} onClick={setToggle} />

      <CardDetails
        isOpen={toggle}
        premium={premiumSum}
        participants={participantsSum}
        brokerCommissions={brokerCommissionSum}
      />
    </div>
  );
};

export default Card;
