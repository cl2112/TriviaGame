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
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q3: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q4: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q5: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
	},
	q2: {
		q:,
		a:,
		o1:,
		o2:,
		o3:,
		o4:,
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



$("#begin").on("click", function(){
	$("#question").html(multipleChoice.q1.q);
	$("#o1").html(multipleChoice.q1.o1);
	$("#o2").html(multipleChoice.q1.o2);
	$("#o3").html(multipleChoice.q1.o3);
	$("#o4").html(multipleChoice.q1.o4);
})

$("h3").on("click", function(){
	if ($(this).attr("id") == multipleChoice.q1.a){
		console.log("correct");
	} else {
		console.log("incorrect");
	}
})





























});