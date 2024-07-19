function showDiscordPopup() {
    document.getElementById('discord-popup').style.display = 'block';
}

function hideDiscordPopup() {
    document.getElementById('discord-popup').style.display = 'none';
}

window.onclick = function(event) {
    const popup = document.getElementById('discord-popup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}
