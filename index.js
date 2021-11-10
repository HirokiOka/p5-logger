console.log('loaded');
/*
const script = document.createElement('script');
script.src = 'https://cdnjs.cloudflare.com/ajax/libs/codemirror/5.63.3/codemirror.min.js';
document.head.appendChild(script);
*/

async function fetchPost(data) {
  const url = 'http://localhost:3000/data';
  const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    method: "POST",
  };

  let res = await fetch(url, options);
  return res.json();
}

const buttonClass = 'toolbar__play-button';
document.addEventListener('click', (e) => {
  try {
    if (e.target.className.split(' ')[0] === buttonClass) {
      const code = document.querySelector('.CodeMirror').textContent;
      const time = new Date();
      const postData = {
        time,
        code
      };
      fetchPost(postData).then(res => {
        console.log(res.message);
      });
    }
  } catch (err) {
  }

  try {
    if (e.path[2].className.split(' ')[0] === buttonClass) {
      const code = document.querySelector('.CodeMirror').textContent;
      const time = new Date();
      const postData = {
        time,
        code
      };

      fetchPost(postData).then(res => {
        console.log(res.message);
      });
    }
  } catch (err) {
    conosle.log(err);
  }

});


