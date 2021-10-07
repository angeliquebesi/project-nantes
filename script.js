const btnPopup = document.querySelector('.btnPopup');
const overlay = document.querySelector('.overlay');
const btnClose = document.querySelector('.btnClose');
btnPopup.addEventListener('click',openModal);
btnClose.addEventListener ('click',closeModal);
function openModal() {
    overlay.style.display='block';
}

btnClose.addEventListener ('click',closeModal);
function closeModal() {
    overlay.style.display ='none';
}
