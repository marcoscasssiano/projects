var doces = [3, 2, 1, 3];
function birthdayCakeCandles(candles) {
    var maxNumber = Math.max.apply(null, candles);
    var contador = 0;
    for (var i = 0; i < candles.length; i++) {
        (candles[i] == maxNumber) ? contador++ : contador;
    }
    return contador;
}
var teste = birthdayCakeCandles(doces);
console.log(teste);
