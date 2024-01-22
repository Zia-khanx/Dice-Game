function generate() {
    let x = Math.random() * 6 + 1;
    let y = Math.trunc(x);
    document.querySelector(".random").textContent = y;
    let dice = document.querySelector(".image");
    dice.src = `image/dice-${y}.png`;
}