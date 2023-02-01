function milesToKm (miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const dhkToCdp = 165;
const dhkTocdpMiles = milesToKm(dhkToCdp);
console.log(dhkTocdpMiles);