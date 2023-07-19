/* Komut satırından iki sayı girebileceğiz ve sonuç olarak bu iki sayı arasında bulunan asal 
sayıları komut satırı ekranına yazdıracağız. Kısaca asal sayı tanımını tekrar hatırlayacak olursak: 
Yalnız 1 ve kendisine bölünebilen, 1 den büyük doğal sayılardır.
*/


const arguments = process.argv.slice(2);

function showPrimeNumbers(lownumber, highNumber) {
    for (let i = lownumber; i <= highNumber; i++) {
        let isPrime = true;
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j !== i) {
                isPrime = false
            }
        }

        if (isPrime) {
            console.log(i);
        }
    }
}
//showPrimeNumbers(200, 2220); 
showPrimeNumbers(arguments[0] * 1, arguments[1] * 1);