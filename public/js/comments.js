const newCommentHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector('#comment-desc').value.trim();
  const post_id = document.querySelector('input[name="post_id"]').value.trim();

  if (title) {
    const response = await fetch(`/api/comments`, {
      method: 'POST',
      body: JSON.stringify({ post_id, title }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      location.reload();
    } else {
      alert('Failed to create Comment');
    }
  }
};

document
  .querySelector('.new-comment-form')
  .addEventListener('submit', newCommentHandler);
