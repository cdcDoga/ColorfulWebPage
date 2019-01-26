

var redCard = document.querySelector("#red-card");
var yellowCard = document.querySelector("#yellow-card");
var greenCard = document.querySelector("#green-card");
var blueCard = document.querySelector("#blue-card");
var blackCard = document.querySelector("#black-card");

var h = document.querySelector("#headtext");

/* console.log("check point 1!") */

redCard.addEventListener("mouseover", function(){change_color(redCard);});
redCard.addEventListener("mouseout", change_back);

yellowCard.addEventListener("mouseover", function(){change_color(yellowCard);});
yellowCard.addEventListener("mouseout", change_back);

greenCard.addEventListener("mouseover", function(){change_color(greenCard);});
greenCard.addEventListener("mouseout", change_back);

blueCard.addEventListener("mouseover", function(){change_color(blueCard);});
blueCard.addEventListener("mouseout", change_back);

blackCard.addEventListener("mouseover", function(){change_color(blackCard);});
blackCard.addEventListener("mouseout", change_back);

/* console.log("check point 2!") */

function change_color(cardID){
	h.style.color = cardID.style.backgroundColor;
}

function change_back(){
	h.style.color = "#FFFFFF";
}