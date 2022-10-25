

const testCommentFunction = async (event) => {
    event.preventDefault();

    const comment_text = document.getElementById('new-comment-text').value.trim();
    const post_id = window.location.toString().split('/')[
        window.location.toString().split('/').length - 1
      ];
    const user_id = 1;
    if ( comment_text ) {
        const response = await fetch('/api/comments', {
            method: 'POST',
            body: JSON.stringify({ comment_text, post_id, user_id }),
            headers: { 'Content-Type': 'application/json'},
        });

        if (response.ok) {
            document.location.reload();
        } else {
            alert('Failed to add food!');
        }
    }

    // alert(comment_text);
};



document.getElementById('new-comment-btn').addEventListener('click', testCommentFunction);