const newRecipeForm = document.getElementById(".new-recipe-form");

postRecipeButton.addEventListener("click", function() {
    newRecipeForm.style.display = "block";
  });
  
  const newFormHandler = async (event) => {
    event.preventDefault();
    const title = document.querySelector('#recipe-title').value.trim();
    const recipe = document.getElementById("recipeContent").value.trim();
  
  
    if (recipe) {
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
    // You can add code to send the newComment to your server and update the comments array.
    // After that, you can clear the comment input and hide it again.
    // content.value = "";
    // newCommentForm.style.display = "none";
  
  };




  document
  .querySelector(".new-recipe-form")
  .addEventListener("submit", newFormHandler);