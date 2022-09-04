async function editFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value.trim();
    const copy = document.querySelector('#blog-copy').value.trim();
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 2
    ];
    const response = await fetch(`/api/blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        copy,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // response check
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }

  document
    .querySelector(".edit-blog-form")
    .addEventListener("submit", editFormHandler);
