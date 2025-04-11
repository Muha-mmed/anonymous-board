fetch('http://127.0.0.1:8000/post', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content: 'hmm testing things' })
})
    .then(res => res.json()) // return the parsed JSON
    .then(data => {
        console.log(data); // now this logs the actual data
    })
    .catch(error => {
        console.error('Error:', error);
    });

post_url = 'anonymous-42de'
fetch(`http://127.0.0.1:8000/read/${post_url}`)
.then( res => res.json())
.then(data =>{
    // data.forEach(post => {
    //     const posts = `<li> ${post.content}</li>`;
    //     document.querySelector('p').insertAdjacentHTML('beforeend',posts)
    // });
    document.querySelector('p').innerHTML = data['content'] })
.catch(error => console.log("Error:", error));