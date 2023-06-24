var a = 5;
var b = "a";
var c = true;
var d;
var e = [1, 2, 3, 4]; // e and f are the same
var f = [1, 2, 3, 4];
var g = [1, "a", true];
var h = ["ASD", 23, true]; //tuple
var creditPayment = 0;
var zellePayment = 1;
var eftPayment = 2;
var Payment;
(function (Payment) {
    Payment[Payment["credit"] = 0] = "credit";
    Payment[Payment["kapidaodeme"] = 1] = "kapidaodeme";
    Payment[Payment["zelle"] = 5] = "zelle";
    Payment[Payment["eft"] = 3] = "eft";
})(Payment || (Payment = {}));
var credit = Payment.credit; // 0
var kapidaodeme = Payment.kapidaodeme; // 1
var havale = Payment.zelle; // 5
var eft = Payment.eft; //  2
// let a = 5;
// a = "a";
// a = true;
