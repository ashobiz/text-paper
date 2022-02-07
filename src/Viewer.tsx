import React from 'react';
import styles from './viewer.module.scss';

type VIEWER_PROPS = {
  text: String | null;
  textStyle: FONT_STYLE;
  font: String | null;
};
export type FONT_STYLE = {
  i: Boolean;
  b: Boolean;
  color: any;
  bgColor: any;
  size: number;
};

const Viewer: React.FC<VIEWER_PROPS> = ({ text, textStyle }) => {
  const cssStyle = {
    fontWeight: textStyle.b ? 'bold' : 'normal',
    fontStyle: textStyle.i ? 'italic' : 'normal',
    color: textStyle.color,
    fontSize: textStyle.size + 'px',
  };
  return (
    <div className={styles.viewer_container}>
      <h1 style={cssStyle} id="entered_text">
        {text}
      </h1>
    </div>
  );
};

export default Viewer;
