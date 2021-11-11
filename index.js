console.log('p5-logger loaded');

const serverURL = 'http://localhost:3000/data';
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
          const code = document.querySelector('.CodeMirror').textContent;
          const time = new Date();
          const postData = { time, code };
          console.log(postData);
          //fetchPost(postData).then(res => { console.log(res.message); });
      } 
    } else if (typeof(e.target.className) === 'string') {
      if (e.target.className.split(' ')[0] === buttonClass) {
        const code = document.querySelector('.CodeMirror').textContent;
        const time = new Date();
        const postData = { time, code };
        console.log(postData);
        //fetchPost(postData).then(res => { console.log(res.message); });
      }
    }
});
