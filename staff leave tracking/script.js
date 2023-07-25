function izinTalep(personelId) {
    const popup = document.getElementById('izinTalepForm');
    const personelAdi = document.querySelector('.personel[data-id="' + personelId + '"]').dataset.name;
    const personelPozisyon = document.querySelector('.personel[data-id="' + personelId + '"]').dataset.position;

    document.getElementById('popupPersonelAdi').innerText = personelAdi;
    document.getElementById('popupPersonelAdi').dataset.id = personelId;
    document.getElementById('popupPersonelPozisyon').innerText = personelPozisyon;

    popup.classList.add('show-popup');
}

function closePopup() {
    const popup = document.getElementById('izinTalepForm');
    popup.classList.remove('show-popup');
}

function submitIzinTalep() {
    const izinTipi = document.querySelector('.izin-tipi').value;
    const izinBaslangic = document.getElementById('izinBaslangic').value;
    const izinBitis = document.getElementById('izinBitis').value;
    const izinTarihBaslangic = document.getElementById('izinTarihBaslangic').value;
    const izinTarihBitis = document.getElementById('izinTarihBitis').value;
    const personelId = parseInt(document.getElementById('popupPersonelAdi').dataset.id);

    // İzin talep işlemleri burada gerçekleştirilebilir (örneğin, veritabanına kaydedilebilir).
    console.log('Personel ID:', personelId);
    console.log('İzin Tipi:', izinTipi);
    console.log('Başlangıç Tarihi:', izinBaslangic);
    console.log('Bitiş Tarihi:', izinBitis);
    console.log('izinTarihBaslangic:', izinTarihBaslangic);
    console.log('izinTarihBitis:', izinTarihBitis);
    closePopup();
}