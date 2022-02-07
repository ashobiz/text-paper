import { FONTS, GOOGLE_WEB_FONTS } from './constants';

export function getRandomColor(): String {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// To get random google font

let index = 0;

export function getRandonFont() {
  // Before we set font we are hiding the text by setting opacity to 0.
  // It is because, during switching font, it is displaying default font for fraction of seconds.
  document.getElementById('entered_text')!.style.opacity = '0';
  const randomFontId = Math.random() * (FONTS.length - 0) + 0;
  // web font

  // For testings
  // var fontID = FONTS[index];

  var fontID = FONTS[Math.round(randomFontId)];
  var head = document.getElementsByTagName('head')[0];
  var link = document.createElement('link');
  link.id = fontID;
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = GOOGLE_WEB_FONTS + fontID;
  link.media = 'all';
  head.appendChild(link);
  const fontName = fontID.split('+').join(' ');
  document.getElementById('entered_text')!.style.fontFamily = fontName;

  // For testing
  // const test = (document.createElement('div').innerText = fontName);
  // document.body.prepend(test);

  setTimeout(() => {
    document.getElementById('entered_text')!.style.opacity = '1';
  }, 500);
  index++;
}

// To download the image on click
export function saveAs(uri: string, filename: string) {
  var link = document.createElement('a');
  if (typeof link.download === 'string') {
    link.href = uri;
    link.download = filename;

    //Firefox requires the link to be in the body
    document.body.appendChild(link);

    //simulate click
    link.click();

    //remove the link when done
    document.body.removeChild(link);
  } else {
    window.open(uri);
  }
}
