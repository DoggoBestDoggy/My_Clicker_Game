var golds = 0;
var x = 1;
var upgrade = 0;
var cursorCost = 10;
var cursors = 0

function buyCursor() {
    if (golds >= cursorCost) {
        golds = golds - cursorCost;
        cursors = cursors + 1;
        upgrade = upgrade + 1;
        cursorCost = Math.round(cursorCost * 1.15);
        displayGolds();


        document.getElementById("golds").innerHTML = golds;
        document.getElementById("cursorcost").innerHTML = cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
    }
}

function addGold(x) {
    golds = golds + x;
    console.log()
}



function displayGolds() {

    let inter = setInterval(() => {
        golds = golds + cursors;
        cursorss = document.getElementById("cursors").innerHTML = upgrade;
        moneyy = document.getElementById("money").innerHTML = golds;
        console.log(golds);

    }, 1000);
}

function money() {
    addGold(x);

}