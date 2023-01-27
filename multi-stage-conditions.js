var money = 45;
var danishPrice = 45;
var butterBread = 35;
var toastBiscuit = 20;

if(danishPrice < money) {
    console.log('Danish Buy DONE');
}
else if (butterBread < money) {
    console.log('Butter Bread Buy DONE');
}
else if (toastBiscuit < money) {
    console.log('Toast Biscuit Buy DONE')
}
else{
    console.log('Your Money too low')
}