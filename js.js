
const hourHand = document.querySelector('.hand.hour');
const minuteHand = document.querySelector('.hand.minute');

function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Calculate angles
  const hourAngle = (hours % 12) * 30 + minutes * 0.5; // 30° per hour + 0.5° per minute
  const minuteAngle = minutes * 6 + seconds * 0.1;     // 6° per minute + 0.1° per second

  // Apply rotation
  hourHand.style.transform = `translateX(-50%) rotate(${hourAngle}deg)`;
  minuteHand.style.transform = `translateX(-50%) rotate(${minuteAngle}deg)`;
}

// Run once immediately, then every second
updateClock();
setInterval(updateClock, 1000);
