function isEven(number){
    const reaminder = number % 2;

    if(reaminder === 0 ){
        return true;
    }
    else{
        return false;
    }
}

const myNumber = isEven(75);
console.log(myNumber);

const hisNumber = isEven(40);
console.log(hisNumber);