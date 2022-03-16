const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function removeTransitionDuration(hand, degrees) {
    if (degrees === 90) {
        hand.style.transitionDuration = '0s';
    } else {
        hand.removeAttribute('style');
    }
} 

function setDate() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) *  360) +  90;

    removeTransitionDuration(secondHand, secondsDegrees);
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;  

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + 90;

    removeTransitionDuration(minsHand, minsDegrees);
    minsHand.style.transform = `rotate(${minsDegrees}deg)`;
    
    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + 90;
    removeTransitionDuration(hourHand, hourDegrees);
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(() => {
    setDate();
}, 1000);

setDate();