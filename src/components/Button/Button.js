import React from 'react';
import styles from './Button.module.css';

export default function Button({title, onPress}) {
  return (
    <button onClick={onPress} className={styles.btnStyle}>
      {title}
    </button>
  );
}
