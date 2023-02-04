function isLeapYear(year) {
    const remainder = year % 4;
    if (remainder === 0) {
        return true;
    }
    else {
        return false;
    }
}
const isMyLeapYear = isLeapYear(1980);
console.log(isMyLeapYear);