let cross = document.getElementById("cross");
let rulesButton = document.querySelector(".rules-button");
let gameBegun = false;
let chosen = 0;
let paper = document.querySelector(".paper");
let scissors = document.querySelector(".scissors");
let rock = document.querySelector(".rock");
let items = [paper, scissors, rock];

let score = 0;
let parent = document.querySelector(".items-container");
let child = 0;

rulesButton.addEventListener("click", openRules = () => {
    document.querySelector(".rules").style.display = "block";
});

cross.addEventListener("click", closeRules = () => {
    document.querySelector(".rules").style.display = "none";
});

function choseItem(item) {
    let classes = ["paper", "scissors", "rock"];
    let iconClasses = ["paper-icon", "scissors-icon", "rock-icon"];
    let iconRoutes = ["./images/icon-paper.svg", "./images/icon-scissors.svg", "./images/icon-rock.svg"];
    item.classList.add("chosen");
    let newArr = items.filter(el => el != item)
        .map((el) => {
            el.style.display = "none"
        });
    chosen = item;
    let rand = Math.floor(Math.random() * 3);
    let newOne = document.createElement("div");
    newOne.classList.add(classes[rand]);
    newOne.innerHTML = `<img src=${iconRoutes[rand]} alt="" class=${iconClasses[rand]}>`;
    parent.appendChild(newOne);
    newOne.classList.add("chosen");
    parent.classList.add("extend");
    chosen = item;
    document.getElementsByClassName("players")[0].style.display = "block";
    document.getElementsByClassName("players")[1].style.display = "block";
    child = parent.lastElementChild;
    let chosenPaper = document.querySelector(".paper.chosen");
    
    let chosenScissors = document.querySelector(".scissors.chosen");
    let chosenRock = document.querySelector(".rock.chosen")
    if (chosen == chosenPaper && child == chosenRock || chosen == chosenScissors && child == chosenPaper || chosen == chosenRock && child == chosenScissors) {
        ++score;
        document.getElementById("win-result").style.display = "block"
        document.getElementById("try-again").style.display = "block"
    } else {
        score += 0;
        document.getElementById("lose-result").style.display = "block"
        document.getElementById("try-again").style.display = "block"
    }
    document.getElementById("score").textContent = score;
}

function tryAgain() {
    chosen.classList.remove("chosen");
    items.map((el) => {
        el.style.display = "block"
    });
    child.style.display = "none";
    document.getElementById("win-result").style.display = "none"
    document.getElementById("lose-result").style.display = "none"
    document.getElementById("try-again").style.display = "none"
    document.getElementsByClassName("players")[0].style.display = "none";
    document.getElementsByClassName("players")[1].style.display = "none";
    parent.classList.remove("extend");
    child.remove();
}