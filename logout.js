document.getElementById('logout-button').addEventListener('click', function(event) {
    event.preventDefault(); 

    fetch('logout.php', {
        method: 'GET'
    })
    .then(response => response.text())
    .then(data => {
        if (data === 'success') {
            localStorage.removeItem('loggedin'); 
            localStorage.removeItem('username'); 
            alert('Logged out successfully!');
            window.location.href = 'index.html'; 
        } else {
            alert('An error occurred while logging out.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while logging out.');
    });
});
