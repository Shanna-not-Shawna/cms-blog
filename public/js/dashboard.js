const newPostForm = document.getElementById(".new-post-form");

// postButton.addEventListener("click", function() {
//     newPostForm.style.display = "block";
//   });
  
  const newFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#post-title').value.trim();
    const recipe = document.getElementById("postContent").value.trim();
  
  
    if (title && recipe) {
      const response = await fetch(`/api/post`, {
        method: "POST",
        body: JSON.stringify({ title, recipe }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
  
      if (response.ok) {
        document.location.replace(`/dashboard`);
      } else {
        alert("Failed to create post");
      }
    }
  };

  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/post/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete post');
      }
    }
  };


  document
  .querySelector(".new-post-form")
  .addEventListener("submit", newFormHandler);

  document
  .querySelector('.your-post')
  .addEventListener('click', delButtonHandler);