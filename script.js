const btnPopup = document.getElementById('btnPopup');
const overlay = document.getElementById('overlay');
btnPopup.addEventListener('click',openMoadl);

function openMoadl() {
    overlay.style.display='block';
}

function closeModal() {
    overlay.style.display ='none';
}
