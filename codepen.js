postButton.addEventListener('click', () => {
  fetch('https://localhost:8080/feed/post', {
    method: 'POST',
    body: JSON.stringify({
      title: 'A Codepen post',
      content: 'First post from the codepen',
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(res => res.json())
    .then(resData => console.log(resData))
    .catch(err => console.log(err));
});
