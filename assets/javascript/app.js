$(document).ready(function(){

var timerCount = 30;
var questionPicked;
var timer;
var story = 0;
var clickToProgress = 1


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
		q: "What is the nick-name given to the Adam Addicts?",
		a: "o2",
		o1: "Junkers",
		o2: "Splicers",
		o3: "Adams",
		o4: "Juciers",
	},
};


fadeInLogo();
$("#clickToProgress").hide();







function fadeInLogo(){

	$("#mainLogo").delay(3000).fadeTo(5000, 1).delay(3000).fadeTo(5000, 0);
	$("#blackScreen").delay(15000).fadeTo(3000, 0.7);
	$("#mainScreen").delay(16000).fadeTo(5000, 1);
	$("#narrative").delay(17000).fadeTo(5000, 1);
	narrative();
}

$("#narrative").on("click", function() {
	if (clickToProgress === 1) {
		clickToProgress = 0;
		story++;
		narrative();
	}
	
})

function narrative(){
	if (story === 0){
		$("#narrativeText").html('"Wake up sleepy head. The show is about to begin."');
		$("#clickToProgress").delay(5000).show();
	}
	if (story === 1){
		$("#narrativeText").html('You slowly open your eyes to a spectacle of neon lights and garrish sounds.');
		$("#blackScreen").fadeTo(7000, 0);
		$("#clickToProgress").delay(8000).show();

	}
}





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








$("[id^='o']").on("mouseover", function(){
	$(this).css("text-shadow","0 0 3px gold");
	console.log("yup");
});

$("[id^='o']").on("mouseout", function(){
	$(this).css("text-shadow","");
	console.log("yup");
});






















});