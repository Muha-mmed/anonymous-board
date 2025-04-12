document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("post_form");
    const input = document.getElementById("post_input");
  
    form.addEventListener("submit", (e) => {
      e.preventDefault(); // prevent page reload
  
      const content = input.value.trim();
      if (!content) return;
  
      fetch('http://127.0.0.1:8000/post', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content })
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          input.value = ""; // Clear input
  
          // Optionally re-render posts or append the new one
          addPostToDOM(data); // Add this function below
        })
        .catch(error => {
          console.error('Error:', error);
        });
    });
  });
  
  // Helper function to render a single post (card-style)
  function addPostToDOM(post) {
    const container = document.getElementById("post_container");
  
    const card = document.createElement("div");
    card.className = "card blue-grey darken-1";
  
    const cardContent = document.createElement("div");
    cardContent.className = "card-content white-text";
    const content = document.createElement("p");
    content.textContent = post.content;
    cardContent.appendChild(content);
  
    const cardAction = document.createElement("div");
    cardAction.className = "card-action";
    cardAction.innerHTML = `<a href="#">Comment</a> <a href="#">Share</a>`;
  
    card.appendChild(cardContent);
    card.appendChild(cardAction);
  
    container.prepend(card); // Add new post to top
  }
  

// post_url = 'anonymous-42de'
// fetch(`http://127.0.0.1:8000/read/${post_url}`)
// .then( res => res.json())
// .then(data =>{
//     // data.forEach(post => {
//     //     const posts = `<li> ${post.content}</li>`;
//     //     document.querySelector('p').insertAdjacentHTML('beforeend',posts)
//     // });
//     document.querySelector('p').innerHTML = data['content'] })
// .catch(error => console.log("Error:", error));



fetch(`http://127.0.0.1:8000/read`)
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("post_container");
    container.innerHTML = ""; // Clear any existing content

    data.forEach(post => {
      const card = document.createElement("div");
      card.className = "card blue-grey darken-1";
      card.style.marginBottom = "20px";
      card.style.padding = "20px";

      const cardContent = document.createElement("div");
      cardContent.className = "card-content white-text";

      const content = document.createElement("p");
      content.textContent = post.content;

      cardContent.appendChild(content);

      const cardAction = document.createElement("div");
      cardAction.className = "card-action";

      const commentLink = document.createElement("a");
      commentLink.href = "#";
      commentLink.textContent = "Comment";

      const shareLink = document.createElement("a");
      shareLink.href = "#";
      shareLink.textContent = "Share";

      cardAction.appendChild(commentLink);
      cardAction.appendChild(shareLink);

      card.appendChild(cardContent);
      card.appendChild(cardAction);

      container.appendChild(card);
    });
  })
  .catch(error => console.log("Error:", error));
