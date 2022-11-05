import css from '../styles/Header.module.css';
import Logo from './Logo';
export default () => {
  return (
    <div className={css.header}>
      <Logo />
    </div>
  );
};
