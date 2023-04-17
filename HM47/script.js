function fetchPost() {
  const postId = document.getElementById("post-id").value;

  if (postId < 1 || postId > 100) {
    alert("Введите ID от 1 до 100");
    return;
  }

  const url = `https://jsonplaceholder.typicode.com/posts/${postId}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((post) => {
      displayPost(post);
    })
    .catch((error) => {
      console.error("Error fetching post:", error);
      alert("Не удалось получить пост");
    });
}

function displayPost(post) {
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = `
    <h2>${post.title}</h2>
    <p>${post.body}</p>
    <button id="comments-btn">Получить коментарии</button>
    <div id="comments-container"></div>
  `;
  document.getElementById("comments-btn").addEventListener("click", () => fetchComments(post.id));
}

function fetchComments(postId) {
  const url = `https://jsonplaceholder.typicode.com/posts/${postId}/comments`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((comments) => {
      displayComments(comments);
    })
    .catch((error) => {
      console.error("Error fetching comments:", error);
      alert("Не удалось получить коментарии");
    });
}

function displayComments(comments) {
  const commentsContainer = document.getElementById("comments-container");
  commentsContainer.innerHTML = `
    <h3>Коментарии:</h3>
    <ul>
      ${comments.map((comment) => `
        <li>
          <strong>${comment.name} (${comment.email}):</strong>
          <p>${comment.body}</p>
        </li>
      `).join('')}
    </ul>
  `;
}

document.getElementById("search-btn").addEventListener("click", fetchPost);

