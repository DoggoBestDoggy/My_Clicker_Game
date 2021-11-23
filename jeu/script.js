var golds=0;
var x=1;
function addGold(x){
    golds=golds+x;
}
function displayGolds(){
    document.getElementById("money").innerHTML = golds;
}
function money(){
    addGold(x);
    displayGolds();
}

setInterval(money(), 1000);
