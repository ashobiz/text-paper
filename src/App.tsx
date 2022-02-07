import React, { useState } from 'react';
import styles from './app.module.scss';
import Input from './Input';
import Viewer from './Viewer';
import html2canvas from 'html2canvas';
import { FONT_STYLE } from './Viewer';
import { getRandomColor, getRandonFont, saveAs } from './helper';
import {
  DEFAULT_BG_COLOR,
  DEFAULT_FONT_COLOR,
  DEFAULT_FONT_SIZE,
  IMAGE_NAME,
} from './constants';

const App: React.FC = () => {
  const [text, setText] = useState<String | null>(null);
  const [viewer, setViewer] = useState<Boolean>(false);
  const [font, setFont] = useState<String | null>(null);
  const [textStyle, setTextStyle] = useState<FONT_STYLE>({
    i: false,
    b: false,
    color: DEFAULT_FONT_COLOR,
    bgColor: DEFAULT_BG_COLOR,
    size: DEFAULT_FONT_SIZE,
  });

  const handleInput = (
    e: React.KeyboardEvent<HTMLInputElement>,
    val: String | null
  ): void => {
    setText(val);
    if (e.key === 'Enter') {
      setViewer(true);
    }
  };

  // Styling - italics, bold, color, background, size
  const handleStyle = (val: String): void => {
    switch (val) {
      case 'i':
        setTextStyle({ ...textStyle, i: !textStyle.i });
        break;
      case 'b':
        setTextStyle({ ...textStyle, b: !textStyle.b });
        break;
      case 'color':
        setTextStyle({ ...textStyle, color: getRandomColor() });
        break;
      case 'bgcolor':
        setTextStyle({ ...textStyle, bgColor: getRandomColor() });
        break;
      case 'increment':
        setTextStyle({ ...textStyle, size: textStyle.size + 2 });
        break;
      case 'decrement':
        setTextStyle({ ...textStyle, size: textStyle.size - 2 });
        break;
      default:
        setTextStyle({
          i: false,
          b: false,
          color: DEFAULT_FONT_COLOR,
          bgColor: DEFAULT_BG_COLOR,
          size: DEFAULT_FONT_SIZE,
        });
        break;
    }
  };

  // Capture screenshot using canvas
  const canvas = (): void => {
    html2canvas(document.getElementById('canvas')!).then(function (canvas) {
      saveAs(canvas.toDataURL(), IMAGE_NAME);
    });
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.app}
        id="canvas"
        style={{ backgroundColor: textStyle.bgColor }}
      >
        {!viewer && <Input text={text} handleInput={handleInput} />}
        {viewer && <Viewer text={text} textStyle={textStyle} font={font} />}
      </div>
      {viewer && (
        <div className={styles.editor}>
          <div onClick={getRandonFont}>Font</div>
          <div onClick={i => handleStyle('i')}>Italic</div>
          <div onClick={b => handleStyle('b')}>Bold</div>
          <div onClick={b => handleStyle('color')}>Color</div>
          <div onClick={b => handleStyle('bgcolor')}>Background</div>
          <div onClick={b => handleStyle('increment')}>+</div>
          <div onClick={b => handleStyle('decrement')}>-</div>
          <div onClick={canvas}>Download</div>
        </div>
      )}
    </div>
  );
};

export default App;
