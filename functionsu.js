// 1- kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yapınız.

/*function kelime(kelime, adet) {
    for (let i=0; i<adet; i++){
        console.log(kelime);
    }
}
// kelime("merhaba", 5);

// 2- dikdörtgenin alan ve çevresini hesaplayan fonkiyonu yazınız.

function alanCevre(kisa,uzun){
    let alan = kisa * uzun;
    let cevre = (kisa + uzun) * 2

    return `alan: ${alan} çevre: ${cevre}`;
}
let sonuc = alanCevre(7, 10);
// console.log(sonuc);

// 3- yazı tura uygulaması fonksiyon kullanarak yapınız.

function yazıTura(){
    let random = Math.random(); // 0-1

    if (random < 0.5) {
        console.log("yazı")
    } else {
        console.log("tura")
    }
    console.log(random);
}
yazıTura();
yazıTura();
yazıTura();


// 4- kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.

function tamBolenler(sayi) {
    let sayilar = [];
    for(let i=2; i<sayi; i++ ) {
        if(sayi % i == 0) {
            sayilar.push(i);
        }
    }

    return sayilar;
}
// console.log(tamBolenler(10));   // 2,5
// console.log(tamBolenler(15));   // 3,5
*/
// 5- değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.

function toplam() {
    let sonuc = 0;

    for(let i = 0; i < arguments.length; i++){
        sonuc += arguments[i]
    }

    return sonuc;
}


console.log(toplam(2, 5));
console.log(toplam(2, 5, 7));
console.log(toplam(2, 5, 7, 10));
