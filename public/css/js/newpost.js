const newPostHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const content = document.querySelector("#post-content").value.trim();
    const system = document.querySelector("#post-system").value.trim();
    const category = document.querySelector("#post-category").value.trim();
  
    if (title && system && category && content ) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({ title, system, category, content}),
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);
  
      if (response.ok) {
        document.location.replace("/");
      } else {
        alert("Failed to create post");
      }
    }
  };
  
  // const delButtonHandler = async (event) => {
  //   if (event.target.hasAttribute("data-id")) {
  //     const id = event.target.getAttribute("data-id");
  
  //     const response = await fetch(`/api/posts/${id}`, {
  //       method: "DELETE",
  //     });
  
  //     if (response.ok) {
  //       document.location.replace("/profile");
  //     } else {
  //       alert("Failed to delete post");
  //     }
  //   }
  // };
  
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", newPostHandler);
  
  // document
  //   .querySelector(".post-list")
  //   .addEventListener("click", delButtonHandler);
  