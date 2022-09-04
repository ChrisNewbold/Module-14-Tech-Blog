async function deleteFormHandler(event) {
    event.preventDefault();

    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 2
    ];
    const response = await fetch(`/api/blogs/${id}`, {
      method: "DELETE",
    });
    // response check
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }

  document
    .querySelector(".delete-blog-btn")
    .addEventListener("click", deleteFormHandler);
