import { useState } from 'react';
import css from '../styles/Data.module.css';
export default () => {
  const [domain, setDomain] = useState('');
  return (
    <div className={css.container}>
      <div className={css.form}>
        <input placeholder="Type Domain to block" />
        <button>Block</button>
      </div>
    </div>
  );
};
