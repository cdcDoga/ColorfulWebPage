
				/* Vanilla */			/* jQuery */

var redCard = document.querySelector("#red-card");  		/* $('div').eq(3) */
var yellowCard = document.querySelector("#yellow-card");	/* $('div').eq(4) */
var greenCard = document.querySelector("#green-card");		/* $('div').eq(5) */
var blueCard = document.querySelector("#blue-card");		/* $('div').eq(6) */
var blackCard = document.querySelector("#black-card");		/* $('div').eq(7) */

var h = document.querySelector("#headtext");				/* $('h2') */

/* -------------------------------- hover ---------------------------------- */

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

function change_color(cardID){
	h.style.color = cardID.style.backgroundColor;
}

function change_back(){
	h.style.color = "#FFFFFF";
}

/* -------------------------------- click ---------------------------------- */

redCard.addEventListener("click", function(){
	$('.container').fadeOut(3000);
});

yellowCard.addEventListener("click", function(){
	$('.container').fadeOut(3000);
});

greenCard.addEventListener("click", function(){
	$('.container').fadeOut(3000);
});

blueCard.addEventListener("click", function(){
	$('.container').fadeOut(3000);
});

blackCard.addEventListener("click", function(){
	$('.container').fadeOut(3000);
});
