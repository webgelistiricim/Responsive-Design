function MusteriBilgileri() {
    const MusteriBilgileriBtn = document.querySelector('.musteribilgileri button');
    MusteriBilgileriBtn.disabled = true;
    MusteriBilgileriBtn.style.display = 'block';


}

function ParkYeri(){
    const ParkyeriBtn = document.querySelector('parkyeri button');
    ParkyeriBtn.disabled = true;
    ParkyeriBtn.style.display = 'block';

}


function AracBirak() {
    const aracBirakBtn = document.querySelector('.arac button');
    //const aracGeldiDiv = document.querySelector('.arac-geldi');
    aracBirakBtn.disabled = true;
    aracGeldiDiv.style.display = 'block';
}


function AracTeslim (){
    const aracTeslimBtn = document.querySelector('aracteslim button');
    const aracTeslimDiv = document.querySelector('aracteslim');
    aracTeslimBtn.disabled = true;
    aracTeslimDiv.style.display = 'block';
}

function PersonelYonetimi(){
    const PersonelYonetimiBtn = document.querySelector('personelyonetimi button');
    PersonelYonetimiDiv = document.querySelector('personelyonetimi');
    PersonelYonetimiBtn.style.disabled = true;
    PersonelYonetimi.style.display = 'block';
}

function OdemeVeFatura(){
    const OdemeVeFatura = document.querySelector('odemevefatura button');
    OdemeVeFaturaBtn = document.querySelector('odemevefatura');
    OdemeVeFaturaDiv.style.display = 'true';
    OdemeVeFatura.style.display = 'block';
}