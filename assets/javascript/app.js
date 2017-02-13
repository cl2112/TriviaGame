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

function startTimer() {
	setInterval(function() {
		$("#timer").html(timerCount);
		timerCount--;
	},1000);
};

function pauseTimer(){
	clearInterval(startTimer())
};

$("#button").on("click", function(){
	startTimer();
})
$("#pause").on("click", function(){
	pauseTimer();
})


});