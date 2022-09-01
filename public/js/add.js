async function newFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector('input[name="Blog-title"]').value;
    const Blog_url = document.querySelector('input[name="Blog-url"]').value;
  
    const response = await fetch(`/api/Blogs`, {
      method: 'Blog',
      body: JSON.stringify({
        title,
        Blog_url
      }),
      headers: {
        'copy-Type': 'application/json'
      }
    });
  
    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }
  }
  
  document.querySelector('.new-Blog-form').addEventListener('submit', newFormHandler);