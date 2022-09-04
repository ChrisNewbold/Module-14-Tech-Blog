async function commentFormHandler(event){
    event.preventDefault();

    const body = document.querySelector('#comment').value.trim();

    const blogId = window.location.toString().split('/')[
        window.location.toString().split('/').length-1
    ];

    if(body){
        const response = await fetch('/api/comments', {
            method:'POST',
            body: JSON.stringify({
                blog_id: blogId,
                body
            }),
            headers:{
                'Content-Type':'application/json'
            }
        });
        // response check
        if(response.ok){
            document.location.reload();
        }else{
            alert(response.statusText);
        }
    }
}

document.querySelector('.comment-form').addEventListener('submit', commentFormHandler);

async function deleteCommentHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    const response = await fetch(`/api/comments/${event.target.value}`, {
      method: "DELETE",
    });

    if (response.ok) {
      document.location.replace("/blogs/" + id);
    } else {
      alert(response.statusText);
    }
  }

  document
    .querySelector(".delete-comment-btn")
    .addEventListener("click", deleteCommentHandler);