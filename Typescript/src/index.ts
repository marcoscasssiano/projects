//tipos básicos
let age: number = 5;
const firstName: string = "Felipe";
const isValid: boolean = true;
let idk: any = 5;

idk = "12";
idk = "false"

const ids: number[] = [1, 2, 3, 4, 5];
const booleans: boolean[] = [true, false, true, false];
const names: string[] = ["Felipe", "Jane"];

//Tupla
const person: [number, string] = [1, "string"]
const people: [number, string][] = [
    [1, "marcos"],
    [2, "joão"],
    [3, "José"]
];

//Intersections
const productId: string | number | boolean = false;

//Enum
enum Direction {
    Up = 1,
    Down = 2,
    Left = "Esquerda"
}

//Type Assertions
const productName: any = "Boné";

let itemId = productName as string
//let itemId = <string>productName
