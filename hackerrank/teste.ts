let doces : number[] =  [3,2,1,3]

function birthdayCakeCandles(candles: number[]): number {

    let maxNumber : number = Math.max.apply(null, candles)
    let contador : number = 0;

    for(let i = 0; i < candles.length; i++){
        (candles[i] == maxNumber) ? contador++ : contador
    }

    return contador
}

let teste = birthdayCakeCandles(doces)

console.log(teste)