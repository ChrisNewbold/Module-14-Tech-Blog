async function editFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="Blog-title"]').value.trim();
    const copy = document.querySelector('input[name="Blog-copy"]').value.trim();
    const id = window.location.toString().split("/")[
      window.location.toString().split("/").length - 1
    ];
    const response = await fetch(`/api/Blogs/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        title,
        copy,
      }),
      headers: {
        "copy-Type": "application/json",
      },
    });
  
    if (response.ok) {
      document.location.replace("/dashboard/");
    } else {
      alert(response.statusText);
    }
  }
  
  document
    .querySelector(".edit-Blog-form")
    .addEventListener("submit", editFormHandler);
  
  document
    .querySelector(".edit-Blog-form")
    .addEventListener("submit", editFormHandler);
  