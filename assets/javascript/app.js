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
		q: "What is the nick-name given to the Adam Addicts",
		a: "o2",
		o1: "Junkers",
		o2: "Splicers",
		o3: "Adams",
		o4: "Juciers",
	},
};


//fadeInLogo();








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

var questionPicked

$("#begin").on("click", function(){
	questionPicked = multipleChoice["q"+Math.floor(Math.random()*2 +1)]
	console.log(questionPicked)
	$("#question").html(questionPicked.q);
	$("#o1").html(questionPicked.o1);
	$("#o2").html(questionPicked.o2);
	$("#o3").html(questionPicked.o3);
	$("#o4").html(questionPicked.o4);
})

$("h3").on("click", function(){
	if ($(this).attr("id") == questionPicked.a){
		console.log("correct");
	} else {
		console.log("incorrect");
	}
})





























});