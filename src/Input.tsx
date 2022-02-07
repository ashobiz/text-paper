import React, { useState } from 'react';
import { INPUT_PLACEHOLDER } from './constants';
import styles from './input.module.scss';

type INPUT_PROPS = {
  text: String | null;
  handleInput: (
    e: React.KeyboardEvent<HTMLInputElement>,
    inputVal: String | null
  ) => void;
};

const Input: React.FC<INPUT_PROPS> = ({ text, handleInput }) => {
  const [inputVal, setInputVal] = useState<String | null>(null);

  return (
    <div className={styles.input_container}>
      <h4>{text}</h4>
      <input
        type="text"
        placeholder={INPUT_PLACEHOLDER}
        onChange={e => setInputVal(e.target.value)}
        onKeyPress={e => handleInput(e, inputVal)}
        spellCheck="false"
      />
    </div>
  );
};

export default Input;
