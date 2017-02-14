$(document).ready(function(){

var timerCount = 30;


var multipleChoice = {
	q1: {
		q: "What is the name of the founder of Rapture?",
		a: "o1",
		o1: "Andrew Ryan",
		o2: "Frank Fontaine",
		o3: "Anna Tenenbaum",
		o4: "Carl Suchong",
	},
	q2: {

	},
};


fadeInLogo();








function fadeInLogo(){
	$("#mainLogo").delay(3000).fadeTo(5000, 1).delay(3000).fadeTo(5000, 0);
	$("#mainScreen").delay(16000).fadeTo(5000, 1);
}






var timer

function runTimer(){
	$("#timer").html(timerCount);
	timerCount--;
}

function startTimer() {
	timer = setInterval(runTimer, 1000)
};

function pauseTimer(){
	clearInterval(timer);
};

$("#start").on("click", function(){
	startTimer();
})
$("#pause").on("click", function(){
	pauseTimer();
})


});