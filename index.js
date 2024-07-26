let isTrue = false;
let add = false;
let sub = false;
let mul = false;
let div = false;
let dot = false;
let equation = "";
document.querySelector("#equation").innerHTML = "0";
function One() {
    if (isTrue == true) {
        isTrue = false;
        equation = "";
    }
    add = false;
    sub = false;
    mul = false;
    div = false;
    let data = document.querySelector("#key1").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Two() {
    if (isTrue == true) {
        isTrue = false;
        equation = "";
    }
    add = false;
    sub = false;
    mul = false;
    div = false;
    let data = document.querySelector("#key2").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Three() {
    if (isTrue == true) {
        isTrue = false;
        equation = "";
    }
    add = false;
    sub = false;
    mul = false;
    div = false;
    let data = document.querySelector("#key3").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Four() {
    if (isTrue == true) {
        isTrue = false;
        equation = "";
    }
    add = false;
    sub = false;
    mul = false;
    div = false;
    let data = document.querySelector("#key4").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Five() {
    if (isTrue == true) {
        isTrue = false;
        equation = "";
    }
    add = false;
    sub = false;
    mul = false;
    div = false;
    let data = document.querySelector("#key5").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Six() {
    if (isTrue == true) {
        isTrue = false;
        equation = "";
    }
    add = false;
    sub = false;
    mul = false;
    div = false;
    let data = document.querySelector("#key6").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Seven() {
    if (isTrue == true) {
        isTrue = false;
        equation = "";
    }
    add = false;
    sub = false;
    mul = false;
    div = false;
    let data = document.querySelector("#key7").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Eight() {
    if (isTrue == true) {
        equation = "";
        isTrue = false;
    }
    add = false;
    sub = false;
    mul = false;
    div = false;
    let data = document.querySelector("#key8").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Nine() {
    if (isTrue == true) {
        equation = "";
        isTrue = false;
    }
    add = false;
    sub = false;
    mul = false;
    div = false;
    let data = document.querySelector("#key9").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Zero() {
    if (isTrue == true) {
        equation = "";
        isTrue = false;
    }
    add = false;
    sub = false;
    mul = false;
    div = false;
    let data = document.querySelector("#key0").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Add() {
    if (sub == true || add == true || div == true || mul == true || equation == "") {
        return;
    }
    dot = false;
    add = true;
    isTrue = false;
    let data = document.querySelector("#Add").value;
    equation = equation + data;
    document.querySelector("#equation").innerHTML = equation;
}
function Substract() {
    if (sub == true || add == true || div == true || mul == true || equation == "") {
        return;
    }
    dot = false;
    sub = true;
    isTrue = false;
    let data = document.querySelector("#Minus").value;
    equation = equation + data;
    document.querySelector("#equation").innerHTML = equation;
}
function Divide() {
    if (sub == true || add == true || div == true || mul == true || equation == "") {
        return;
    }
    dot = false;
    div = true;
    isTrue = false;
    let data = document.querySelector("#Divide").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
function Multiply() {
    if (sub == true || add == true || div == true || mul == true || equation == "") {
        return;
    }
    dot = false;
    mul = true;
    isTrue = false;
    let data = document.querySelector("#Multiply").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}

function answer() {
    let answer = eval(equation);
    document.querySelector("#equation").innerHTML = answer;
    equation = answer;
    isTrue = true;
    dot = false;
}
function clearIt() {
    dot = false;
    isTrue = false;
    equation = "";
    document.querySelector("#equation").innerHTML = "0";
}
function Dot() {
    if (isTrue == true) {
        equation = "";
        isTrue = false;
    }
    if (dot == true) {
        return;
    }
    dot = true;
    let data = document.querySelector("#Dot").value;
    equation = equation + data;
    console.log(equation);
    document.querySelector("#equation").innerHTML = equation;
}
console.log(eval(equation));
