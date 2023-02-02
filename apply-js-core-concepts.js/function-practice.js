
// 1. INCH TO FEET PROGRAM ::::::::::::::::::::::::::::::::::::::::
function inch_To_Feet(myInch) {
    const Feet_Result = myInch / 12;
    return Feet_Result;
}

const Noman_Inch = 70;
const Noman_Feet = inch_To_Feet(Noman_Inch);
// console.log(Noman_Feet);


// 2. MILES TO KILO-METER PROGRAM :::::::::::::::::::::::::::::::::
function miles_To_Km(inputMiles) {
    const Kilo_Meter = inputMiles * 1.609;
    return Kilo_Meter;
}

const User_Dest_miles = 245;
const User_Km_Result = miles_To_Km(User_Dest_miles);
// console.log(User_Km_Result);



// 3. CHECK EVEN NUMBER PROGRAM ::::::::::::::::::::::::::::::::::::::::::
function is_Even(inputNumber) {
    const Calc_Number = inputNumber % 2;
    if (Calc_Number === 0) {
        console.log(User_Number,'is Even Number.');
    }
    else {
        console.log(User_Number,'is Odd Number.');
    }
}

const User_Number = 75;
const Check_EvenORodd = is_Even(User_Number);