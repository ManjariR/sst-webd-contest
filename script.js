console.log("gay");
document.getElementById("btn-post").addEventListener("click", function () {
  const newComment = document.getElementById("CommentInput").value;

    const commentContainer = document.getElementById("comments");

    var commentbox = document.createElement("div");
    commentContainer.appendChild(commentbox);
    commentbox.classList.add("comment-box");




    const commentimg = document.createElement("img");
    commentimg.setAttribute('src', "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739");
    const commentid = document.createElement("div");
    commentid.innerHTML = "@xyz" ;
    const commentElement = document.createElement("p");
    commentElement.innerText = newComment;

    commentbox.appendChild(commentimg);
    commentbox.appendChild(commentid);
    commentbox.appendChild(commentElement);

    document.getElementById("new-comment").value = " ";
});
