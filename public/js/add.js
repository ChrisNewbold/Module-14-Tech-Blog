async function newFormHandler(event) {
    event.preventDefault();

    const title = document.querySelector('#blog-title').value;
    const copy = document.querySelector('#blog-copy').value;

    const response = await fetch(`/api/Blogs`, {
      method: 'POST',
      body: JSON.stringify({
        title,
        copy
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // response check
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }

  document.getElementById('add-Blog-form').addEventListener('submit', newFormHandler);