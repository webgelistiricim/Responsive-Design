const btnİzinOnay = document.getElementById('btnİzinOnay');
const btnCloseİzinPopup = document.getElementById('btnCloseİzinPopup');
const overlayMenu = document.getElementById('overlayMenu');
const popupİzinOnay = document.getElementById('popupİzinOnay');
const izinOnayi = document.getElementById('izinOnayi');

btnİzinOnay.addEventListener('click', () => {
    overlayMenu.style.display = 'block';
    popupİzinOnay.style.display = 'block';
});

btnCloseİzinPopup.addEventListener('click', () => {
    overlayMenu.style.display = 'none';
    popupİzinOnay.style.display = 'none';

    if (izinOnayi.checked) {
        // İzinler kabul edildi, burada gerekli işlemleri yapabilirsiniz.
        alert('İzinler kabul edildi.');
    } else {
        // İzinler kabul edilmedi, gerekli uyarıları verebilirsiniz.
        alert('İzinler kabul edilmedi.');
    }
});