var golds = 0;
var x = 1;

var upcupcake = 0;
var cupcakeCost = 10;
var cupcake = 0

var uppotion = 0;
var potionCost = 500;
var potion = 0;

var uplicorne = 0
var licorneCost = 1000
var licorne = 0

function buyCupcake() {
    if (golds >= cupcakeCost) {
        golds = golds - cupcakeCost;
        cupcake = cupcake + 1;
        upcupcake = upcupcake + 1;
        cupcakeCost = Math.round(cupcakeCost * 1.15);
        displayGolds();


        document.getElementById("golds").innerHTML = golds;
        document.getElementById("cursorcost").innerHTML = cursorCost;
        document.getElementById("cursors").innerHTML = cursors;
    }
}

function buyPotion() {
    if (golds >= potionCost) {
        golds = golds - potionCost;
        potion = potion + 250;
        uppotion = uppotion + 1;
        potionCost = Math.round(potionCost * 1.50);
        displayGolds();


        document.getElementById("golds").innerHTML = golds;
        document.getElementById("potioncost").innerHTML = potionCost;
        document.getElementById("potion").innerHTML = potion;
    }
}

function buyLicorne() {
    if (golds >= licorneCost) {
        golds = golds - licorneCost;
        licorne = licorne + 500;
        uplicorne = uplicorne + 1;
        licorneCost = Math.round(licorneCost * 2);
        displayGolds();


        document.getElementById("golds").innerHTML = golds;
        document.getElementById("licornecost").innerHTML = licorneCost;
        document.getElementById("licorne").innerHTML = licorne;
    }
}

function addGold(x) {
    golds = golds + x;
    console.log()
}

function displayGolds() {

    let inter = setInterval(() => {
        golds = golds + cupcake;
	golds = golds + potion;
        golds = golds + licorne;
        cursorssss = document.getElementById("cupcake").innerHTML = upcupcake;
        cursorsss = document.getElementById("potion").innerHTML = uppotion;
        cursorss = document.getElementById("licorne").innerHTML = uplicorne;
	moneyy = document.getElementById("money").innerHTML = golds;
        console.log(golds);

    }, 1000);
}

function money() {
    addGold(x);

}
