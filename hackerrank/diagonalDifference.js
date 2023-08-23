var matriz = [
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]
];
function devolveSeiLaOQ(arr) {
    var leftDiagonal = arr[0][0] + arr[1][1] + arr[2][2];
    var rightDiagonal = arr[0][2] + arr[1][1] + arr[2][0];
    if (leftDiagonal > rightDiagonal) {
        console.log(leftDiagonal - rightDiagonal);
    }
    else {
        console.log(rightDiagonal - leftDiagonal);
    }
    console.log(arr.length);
}
devolveSeiLaOQ(matriz);
