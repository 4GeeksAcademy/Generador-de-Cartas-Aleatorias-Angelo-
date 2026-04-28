const generateCard = () => {
    const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    const suits = [
        { name: "hearts", symbol: "♥", color: "red" },
        { name: "diamonds", symbol: "♦", color: "red" },
        { name: "spades", symbol: "♠", color: "black" },
        { name: "clubs", symbol: "♣", color: "black" }
    ];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const topSuit = document.getElementById("top-suit");
    const bottomSuit = document.getElementById("bottom-suit");
    const content = document.getElementById("cardContent");
    topSuit.innerHTML = randomSuit.symbol;
    bottomSuit.innerHTML = randomSuit.symbol;
    content.innerHTML = randomValue;
    topSuit.className = "suit " + randomSuit.color;
    bottomSuit.className = "suit " + randomSuit.color;
    content.className = randomSuit.color;
};
window.onload = () => {
    generateCard();
    document.getElementById("drawButton").addEventListener("click", generateCard);
};