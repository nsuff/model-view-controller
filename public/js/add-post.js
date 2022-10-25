
const newPostHandler = async (event) => {
  event.preventDefault();

  const sesh = document.getElementById('sessionuser').innerHTML;
  const description = document.querySelector('#post-content').value.trim();
  const user_id = sesh;


  if ( description ) {
    // alert('this is working');
      const response = await fetch('/api/posts', {
          method: 'POST',
          body: JSON.stringify({ description, user_id }),
          headers: { 'Content-Type': 'application/json'},
      });

      if (response.ok) {
          document.location.replace('/');
      } else {
          alert('Failed to add potluck!');
      }
  }

  // alert('this is working');
};


  
document.querySelector('.make-post-form').addEventListener('submit', newPostHandler);
  






