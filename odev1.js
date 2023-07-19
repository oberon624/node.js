/* Dairenin Alanı = π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap değerini konsoldan
parametre olarak girerek alanı bulmaya çalışacağız. 
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.*/


const arguments = process.argv.slice(2);

function showArea(radius) {
    const pi = 3.14;
    const area= pi* Math.pow(radius,2);
    console.log(
        `Yarıçapı (${radius}) olan dairenin alanı: (${area})`
    );
}

showArea(arguments[0]);