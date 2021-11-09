console.log('loaded');
/*
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.3/codemirror.min.js';
document.head.appendChild(script);
*/

const buttonClass = 'toolbar__play-button';
document.addEventListener('click', (e) => {
  try {
    if (e.target.className.split(' ')[0] === buttonClass) {
      const code = document.querySelector('.CodeMirror').textContent;
      const time = new Date();
      console.log(code, time);
    }
  } catch (err) {
  }

  try {
    if (e.path[2].className.split(' ')[0] === buttonClass) {
      const code = document.querySelector('.CodeMirror').textContent;
      const time = new Date();
      console.log(code, time);
    }
  } catch (err) {
  }

});
