console.log('p5-logger loaded');

if (sessionStorage.id === undefined) {
  const userId = Math.floor(new Date().getTime() % 10**7);
  sessionStorage.setItem('id', userId);
}

console.log('your ID: ' + sessionStorage.id);

const serverURL = 'https://p5-logger.herokuapp.com/data';
const buttonClass = 'toolbar__play-button';

async function fetchPost(data) {
  const options = {
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
    method: "POST",
  };
  let res = await fetch(serverURL, options);
  return res.json();
}

document.addEventListener('click', (e) => {
  if (e.target.className === undefined) return;

    if (typeof(e.target.className) === 'object') {
      if ((e.path[2].className !== undefined) && (e.path[2].className.split(' ')[0] === buttonClass)) {
          const code = document.querySelector('.CodeMirror-code').innerText;
          const timestamp = new Date().toLocaleString();
          const userId = sessionStorage.id;
          const postData = { timestamp, code, userId };
          console.log(postData);
          fetchPost(postData).then(res => { console.log(res.message); });
      } 
    } else if (typeof(e.target.className) === 'string') {
      if (e.target.className.split(' ')[0] === buttonClass) {
        const code = document.querySelector('.CodeMirror-code').innerText;
        const timestamp = new Date().toLocaleString();
        const userId = sessionStorage.id;
        const postData = { timestamp, code, userId };
        fetchPost(postData).then(res => { console.log(res.message); });
      }
    }
});
