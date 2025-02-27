let cookie = document.getElementById("cookie"); 
let counter = document.getElementById("counter");

let numberOfCookies = 0;
let cookieIncreaseNumber = 1;

cookie.onclick = () => {
    numberOfCookies += cookieIncreaseNumber;
    counter.innerHTML = numberOfCookies;
}

let wrapper = document.getElementById("wrapper");
let addButton = document.getElementById("add");

addButton.onclick = () => {
    wrapper.innerHTML += "<p>Ahoj</p>";

}

let box = document.getElementById("box");

box.onclick = () => {
    box.style.backgroundColor = "red";
}

let secondBox = document.getElementById("box2");

secondBox.onclick = () => {
    secondBox.innerHTML++; //++ inkrement - zvedla o 1
}

let thirdBox = document.getElementById("box3");
let leftPos = 0;
let topPos = 0;

thirdBox.onclick = () => {
    leftPos ++;
    topPos += 2;
    thirdBox.style.left = leftPos + "px";
    thirdBox.style.top = topPos + "px";
}

let clickUpgradeBtn = document.getElementById("clickUpgrade");
let clickUpgradeCost = 10;
clickUpgradeBtn.onclick = () => {
    if (numberOfCookies >= clickUpgradeCost) {
        numberOfCookies -= clickUpgradeCost; // odečteme cenu upgradu od sušenek
        clickUpgradeCost += 10; // zvětšíme cenu upgradu
        counter.innerHTML = numberOfCookies;
        cookieIncreaseNumber ++;
        clickUpgradeBtn.innerHTML = "Click upgrade (Cost:"+clickUpgradeCost +")";
    } 
}

let autoclickUpgrade = document.getElementById("autoclickUpgrade");

let autoclickUpgradeCost = 50;

autoclickUpgrade.onclick = () => {
    if (numberOfCookies >= autoclickUpgradeCost) {
        numberOfCookies -= autoclickUpgradeCost;
        autoclickUpgradeCost *= 2;
        counter.innerHTML = numberOfCookies;
        autoclickUpgrade.innerHTML = "Autoclick upgrade (Cost: "+autoclickUpgradeCost +")";
        setInterval(() => {
            numberOfCookies ++;
            counter.innerHTML = numberOfCookies;
        }, 1000)
    }
}