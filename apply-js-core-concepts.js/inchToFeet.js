function inchToFeet(inches) {
    const feet = inches / 12;
    return feet;
}
 const NomanInches = 175;
 const NomanFeet = inchToFeet(NomanInches);
 console.log(NomanFeet);