const addCommentButton = document.getElementById("addCommentButton");
const newCommentForm = document.querySelector(".new-comment-form");
const postCommentButton = document.getElementById("postCommentButton");


//*browser not happy about event listener for some reason but it still works.
addCommentButton.addEventListener("click", function() {
  newCommentForm.style.display = "block";
});
 
function deleteComment(commentId) {
  if(commentUserId !== currentUserId){
    alert("You can't delete this!")
  } else {
    ///fetch
  }
};

const newFormHandler = async (event) => {
  event.preventDefault();



  const content = document.getElementById("content").value.trim();
  // eslint-disable-next-line quotes
  const post_id = document.querySelector('input[name="post_id"]').value;


  if (content) {
    const response = await fetch(`/api/comments`, {
      method: "POST",
      body: JSON.stringify({ 
        content,
        post_id
       }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response);

    if (response.ok) {
      document.location.replace(`/post/${post_id}`);
    } else {
      alert("Failed to create comment");
    }
  }
  content.value = "";
  newCommentForm.style.display = "none";
};





document
  .querySelector(".new-comment-form")
  .addEventListener("submit", newFormHandler);