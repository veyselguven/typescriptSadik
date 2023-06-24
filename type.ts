let a: number = 5;
let b: string = "a";
let c: boolean = true;
let d: any;
let e: number[] = [1, 2, 3, 4]; // e and f are the same
let f: Array<number> = [1, 2, 3, 4];
let g: any[] = [1, "a", true];
let h: [string, number, boolean] = ["ASD", 23, true]; //tuple

const creditPayment = 0;
const zellePayment = 1;
const eftPayment = 2;

enum Payment {
  credit = 0,
  kapidaodeme = 1,
  zelle = 5,
  eft = 3,
}

let credit = Payment.credit; // 0
let kapidaodeme = Payment.kapidaodeme; // 1
let havale = Payment.zelle; // 5
let eft = Payment.eft; //  2

// let a = 5;
// a = "a";
// a = true;
