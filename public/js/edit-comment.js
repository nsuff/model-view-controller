async function editFormHandler(event) {
    event.preventDefault();

    const comment_text = document.querySelector('#edit-comment-description').value.trim();

    const sesh = document.getElementById('sessionuser').innerHTML;
    const comment_user = document.getElementById('comment-user').innerHTML;
    const comment_post = document.getElementById('comment-post').innerHTML;
    const postid = String(comment_post);
    const link = '/post/'+postid;

    const id = window.location.toString().split('/')[
      window.location.toString().split('/').length - 1
    ];
    //alert(sesh + '  ' + food_user + '  ' + food_potluck);
    if (sesh === comment_user) {
      
      if (comment_text) {
        
      
        var response = await fetch(`/api/comments/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ comment_text }),
          headers: { 'Content-Type': 'application/json'},
        });
      }
      
    } else if (sesh != comment_user) {
      alert('You cannot edit a food you did not make!')
    }
  
    if (response.ok) {
      document.location.replace(link);
    } else {
      alert(response.statusText);
    }
    //alert('this is working');
}
  
document.getElementById('edit-btn').addEventListener('click', editFormHandler);
  