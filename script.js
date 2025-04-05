let count = 0;
let target = 1234; // Example customer count
let speed = 20;

function updateCount() {
    if (count < target) {
        count += Math.ceil((target - count) / 10);
        document.getElementById("customer-count").innerText = count;
        setTimeout(updateCount, speed);
    } else {
        document.getElementById("customer-count").innerText = target;
    }
}

window.onload = updateCount;