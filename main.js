const cookieBanner = document.getElementById('cookie-banner');
const acceptButton = document.getElementById('accept-cookies');

acceptButton.addEventListener('click', () => {
    // Aquí puedes establecer las cookies o realizar otras acciones
    cookieBanner.style.display = 'none'; // Oculta el banner
});
