function toggleVideo(){
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('video');
    video.pause();
    trailer.classList.toggle('active');
}
function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const contents = document.querySelectorAll('.content');
    banner.style.background = `url("image/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';
}

function changeTitleImage(imageUrl, title) {
    const titleContainer = document.querySelector('.span'); // Assuming a container for the title
    titleContainer.style.background = `url("${imageUrl}")`;
    titleContainer.style.backgroundSize = 'cover';
    titleContainer.style.backgroundPosition = 'center';

    // Update title text if needed
    const titleElement = document.querySelector('.span'); // Adjust the selector based on your HTML structure
    titleElement.innerText = title;
}

