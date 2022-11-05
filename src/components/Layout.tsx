import css from '../styles/Layout.module.css';
import Header from './Header';
type Props = {
  children: JSX.Element;
};
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className={css.container}>
      <Header />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
