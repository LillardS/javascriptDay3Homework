const ein = 1;
const zwei = 2;
const drei = 3;
const vier = 4;
const funf = 5;
const sechs = 6;
const sieben = 7;
const acht = 8;
const neun = 9;
const zehn = 10;

function addition(arg1, arg2){
    console.log(`${arg1} plus ${arg2} is eqaul to ` + (arg1 + arg2));
}

addition(vier, acht);
addition(ein, neun);

function subtraction(arg1, arg2){
    console.log(`${arg1} minus ${arg2} is equal to ` + (arg1 - arg2));
}

subtraction(zehn, funf);
subtraction(sieben, zwei);

function multiplication(arg1, arg2){
    console.log(`${arg1} times ${arg2} is equal to ` + (arg1 * arg2));
}

multiplication(drei, sechs);
multiplication(zehn, acht);

function division(arg1, arg2){
    console.log(`${arg1} divided by ${arg2} is equal to ` + (arg1 / arg2));
}

division(sechs, drei);
division(zehn, funf);

function increase(arg1){
    var newArg = arg1++;
    console.log(`${newArg} has been increased to ${arg1}.`)
}

increase(ein);
increase(drei);

function decrease(arg1){
    var newArg = arg1--;
    console.log(`${newArg} has been decreased to ${arg1}.`)
}

decrease(vier);
decrease(neun);