const showPopup = document.querySelector('.show-popup');
const popupContainer = document.querySelector('.popup-container');
const closeButton = document.querySelector('.close-button');

showPopup.onclick = () => {
    popupContainer.classList.add('active');
}

closeButton.onclick = () => {
    popupContainer.classList.remove('active');
}