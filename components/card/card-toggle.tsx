import cx from 'clsx';
import { MdArrowDropDown as ArrowDropDown } from 'react-icons/md';
import styles from './card-toggle.module.css';

type Props = {
  toggle: boolean;
  onClick: (setting: boolean) => void;
};

const CardToggle = ({ toggle, onClick }: Props) => {
  return (
    <div
      role="button"
      onClick={() => onClick(!toggle)}
      className={styles.container}
    >
      <span className={styles.label}>{toggle ? 'Show less' : 'Show more'}</span>
      <div className={cx(styles.iconContainer, { [styles.open]: toggle })}>
        <ArrowDropDown className={styles.icon} />
      </div>
    </div>
  );
};

export default CardToggle;
