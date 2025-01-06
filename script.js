
function submitComment() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const comment = document.getElementById('comment').value.trim();
    const commentsList = document.getElementById('comments-list');

    if (name && email && comment) {
        const commentBlock = document.createElement('div');
        commentBlock.classList.add('comment-block');
        commentBlock.innerHTML = `
            <p><strong>${name}</strong> (${email}, ${phone}):</p>
            <p>${comment}</p>
            <hr>
        `;
        commentsList.appendChild(commentBlock);

        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('phone').value = '';
        document.getElementById('comment').value = '';
    } else {
        alert('Будь ласка, заповніть всі поля!');
    }
}
