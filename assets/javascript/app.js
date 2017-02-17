$(document).ready(function(){

var timerCount = 10;
var questionPicked;
var timer;
var story = 0;
var clickToProgressNarrative = 1


var multipleChoice = {
	q1: {
		q: "What is the name of the founder of Rapture?",
		a: "o1",
		correct: "Seems like his boasting was good for something, heh.",
		wrong: "An interesting thought. But a wrong answer.",
		o1: "Andrew Ryan",
		o2: "Frank Fontaine",
		o3: "Anna Tenenbaum",
		o4: "Carl Suchong",
	},
	q2: {
		q: "What is the nick-name given to the Adam Addicts?",
		a: "o2",
		correct: "I like Adams more, but what you can't control what people do can you? Heh.",
		wrong: "Ah, close. Kinda. But wrong? Absolutely.",
		o1: "Junkers",
		o2: "Splicers",
		o3: "Adams",
		o4: "Juciers",
	},
	q3: {
		q: "Who was the leader of the revolutionaries durring the Rapture Civil War?",
		a: "o4",
		correct: "Who is Atlas? Who cares I say.",
		wrong: "Did you not see the posters? Or can you not read? Might explain your performance so far. Or not.",
		o1: "Wilkins",
		o2: "Tenenbaum",
		o3: "Suchong",
		o4: "Atlas",
	},
	q4: {
		q: "How did 'Das Wunderkind' come to discover Adam?",
		a: "o1",
		correct: "Crazy story. Serendipitous. Way too serendipitous.",
		wrong: "Hah, did you really think that or do you like shocks? Can't say I blame you.",
		o1: "Seeing a dock worker's injured hands heal after a bite from a sea slug.",
		o2: "Finding some sludge on the bottom of a diver's boot.",
		o3: "Researching the effects of the intense pressure at the bottom of the sea on blood.",
		o4: "While throwing out an old sandwich.",
	},
	q5: {
		q: "Who is the mastermind behind Rapture's sumggling ring?",
		a: "o2",
		correct: "Ah yes. The tails to Ryan's heads. Hah!",
		wrong: "Best not to ask questions eh? Normally a good strategy. Today though, the piper's calling, eh?",
		o1: "Andrew Ryan",
		o2: "Frank Fontaine",
		o3: "Sander Cohen",
		o4: "Peach Wilkins",
	},
	q6: {
		q: "What currency is accepted at Gatherer's Garden?",
		a: "o3",
		correct: "Why could'nt it have been blood? There's plenty of that around.",
		wrong: "Nope. But I can think of a reason why you thought that. Your an idiot! HAH!",
		o1: "Eve",
		o2: "Gold",
		o3: "Adam",
		o4: "Blood",
	},
	q7: {
		q: "What color is Adam in it's raw form?",
		a: "o2",
		correct: "Hmm. How did you know that? Are you? Gasp! Cheating?! Heh.",
		wrong: "Well, that was a hard one I guess. Better luck on the next one?",
		o1: "Red",
		o2: "Green",
		o3: "Yellow",
		o4: "Blue",
	},
	q8: {
		q: "Where are most of the automated security devices are coordinated?",
		a: "o4",
		correct: "Well done. Well done indeed.",
		wrong: "Are they? Huh, I did'nt know that! Am I glad not to be in your seat!",
		o1: "Point Prometheus",
		o2: "Arcadia",
		o3: "Apollo Square",
		o4: "Rapture Central Computing",
	},
	q9: {
		q: "Who is the owner of Fort Frolic?",
		a: "o1",
		correct: "Ah, now that guy had style.",
		wrong: "Really? No class huh? Shame.",
		o1: "Sander Cohen",
		o2: "Andrew Ryan",
		o3: "Frank Fontaine",
		o4: "J.S. Steinman",
	},
	q10: {
		q: "Who runs Arcadia?",
		a: "o3",
		correct: "She does love her garden, does'nt she?",
		wrong: "And your one step closer to a prize! Might not be the one you want, but it's still a prize!",
		o1: "Diane McClintock",
		o2: "Brigid Tenenbaum",
		o3: "Julie Langford",
		o4: "J.S. Steinman",
	},
	q11: {
		q: "What is the name of the vending machines with a clown on them?",
		a: "o3",
		correct: "My favorite mascot by far.",
		wrong: "WOW! What a terrible answer! Truly amazing!",
		o1: "Bozo's Bounty",
		o2: "Carnival Cakes",
		o3: "Circus of Values",
		o4: "Red Nose Redeemables",
	},
	q12: {
		q: "Who developed the telekinesis plasmid?",
		a: "o1",
		correct: "Nice! Are you intrested in Ryan's best and brightest too?!",
		wrong: "I betcha wish you had that plasmid right about now huh?",
		o1: "Yi Suchong",
		o2: "Julie Langford",
		o3: "Brigid Tenenbaum",
		o4: "Frank Fontaine",
	},
	q13: {
		q: "What was J.S. Steinman's profession?",
		a: "o4",
		correct: "Did you get a little work done? It looks like you got a little work done.",
		wrong: "Are you even trying? 'Cause the show don't work if you don't try. Not smart are ya?",
		o1: "Security Overseer",
		o2: "Adam Researcher",
		o3: "Plasmid Developer",
		o4: "Cosmetic Surgeon",
	},
	q14: {
		q: "What is the original name given to 'Mr. Bubbles'?",
		a: "o2",
		correct: "Quite the historian, huh?",
		wrong: "Damn! That looked like it hurt!",
		o1: "Processors",
		o2: "Protectors",
		o3: "Poachers",
		o4: "Painters",
	},
	q15: {
		q: "'Little Sisters' are created and trained at what facility?",
		a: "o1",
		correct: "Ugh, those things are creepy. And sad. And carry a lot of Adam!",
		wrong: "Don't you know where Adam comes from?",
		o1: "Little Wonders Educational Facility",
		o2: "Arcadia Gardens",
		o3: "Fontaine Futuristics",
		o4: "Ryan Industries",
	},
};


fadeInLogo();








function fadeInLogo(){

	$("#mainLogo").delay(3000).fadeTo(5000, 1).delay(3000).fadeTo(5000, 0);
	$("#blackScreen").delay(15000).fadeTo(3000, 0.9);
	$("#mainScreen").delay(16000).fadeTo(5000, 1);
	$("#narrative").delay(17000).fadeTo(5000, 1);
	narrative();
}

$("#narrative").on("click", function() {
	if (clickToProgressNarrative === 1) {
		clickToProgressNarrative = 0;
		story++;
		$("#clickToProgress").fadeTo(100, 0);
		narrative();
	}
	
})

function narrative(){
	if (story === 0){
		$("#narrativeText").html('"Wake up sleepy head. The show is about to begin."');
		$("#clickToProgress").delay(20000).fadeTo(2000, .6);
	}
	if (story === 1){
		$("#narrativeText").html('You slowly open your eyes to a spectacle of neon lights and garrish sounds.');
		$("#blackScreen").fadeTo(7000, 0);
		$("#clickToProgress").delay(8000).fadeTo(2000, .6, function(){
			clickToProgressNarrative = 1;
		});
		
	}
	if (story === 2){
		$("#blackScreen").fadeTo(2000, 1, function(){
			$(".mainContainer").delay(2000).css("background-image","url(assets/images/frolic_splicer.png)");
			$("#narrativeText").delay(2000).html('A figure wearing a decrepid mask starts speaking, as if to an audience.');
			$("#blackScreen").fadeTo(3000, 0);
			$("#clickToProgress").delay(3000).fadeTo(2000, .6, function(){
			clickToProgressNarrative = 1;
			});
		});
	}
	if (story === 3){
		$("#narrativeText").html('"Welcome to another game of Smart or Dead!"');
		$("#clickToProgress").fadeTo(2000, .6, function(){
			clickToProgressNarrative = 1;
		});
	}
	if (story === 4){
		$("#narrativeText").html('"Where we find out if our lucky contestant is either Smart..."');
		$("#clickToProgress").fadeTo(2000, .6, function(){
			clickToProgressNarrative = 1;
		});
	}
	if (story === 5){
		$("#narrativeText").html('"OR DEAD! HA HA HA HA HAAA!"');
		$("#clickToProgress").fadeTo(2000, .6, function(){
			clickToProgressNarrative = 1;
		});
	}
	if (story === 6){
		$("#narrativeText").html('The madman starts banging on the rail and laughing violently.');
		$("#clickToProgress").fadeTo(2000, .6, function(){
			clickToProgressNarrative = 1;
		});
	}
	if (story === 7){
		$("#narrativeText").html('"Alright, alright, lets begin."');
		$("#clickToProgress").fadeTo(2000, .6, function(){
			clickToProgressNarrative = 1;
		});
	}
	if (story === 8){
		$("#neonSign").css("bottom", "100%");
		$("#narrativeText").html('Gears start churning and from above a large neon sign rolls into view.');
		$("#neonSign").fadeTo(100, 1).animate({bottom:"30%"},5000, function(){
			$("#clickToProgress").fadeTo(2000, .6, function(){
			clickToProgressNarrative = 1;
			});
		});		
	}
	if (story === 9){
		$("#narrativeText").html('"Now. The rules are simple."');
		$("#clickToProgress").delay(2000).fadeTo(2000, .6, function(){
			clickToProgressNarrative = 1;
		});
	}
	if (story === 10){
		$("#narrativeText").html('"I ask you a question and, you, then answer said question. OK? Great."');
		$("#clickToProgress").delay(2000).fadeTo(2000, .6, function(){
			clickToProgressNarrative = 1;
		});
	}
	if (story === 11){
		$("#narrativeText").html('"Oh, and you only have 10 seconds to answer. HAH! Here we go!"');
		$("#clickToProgress").delay(1000).fadeTo(2000, 0, function(){
			startTimer();
			askQuestion();
		});
	}
}





function runTimer(){
	$("#timer").html(timerCount);
	if (timerCount === 5){
		$("#narrativeText").html('"Hurry up, time is running out!"');
	}
	if (timerCount === 3){
		$("#narrativeText").html('"3!"');
	}
	if (timerCount === 2){
		$("#narrativeText").html('"2!"');
	}
	if (timerCount === 1){
		$("#narrativeText").html('"1!"');
	}
	if (timerCount === 0){
		$("#narrativeText").html('"Aww, looks like you ran out of time."');
	}
	timerCount--;
}

function startTimer() {
	timer = setInterval(runTimer, 1000)
};

function pauseTimer(){
	clearInterval(timer);
};








function askQuestion(){
	questionPicked = multipleChoice["q"+Math.floor(Math.random()*15 +1)]
	console.log(questionPicked)
	$("#question").html(questionPicked.q);
	$("#o1").html(questionPicked.o1);
	$("#o2").html(questionPicked.o2);
	$("#o3").html(questionPicked.o3);
	$("#o4").html(questionPicked.o4);
}

$("h3").on("click", function(){
	if ($(this).attr("id") == questionPicked.a){
		console.log("correct");
		pauseTimer();
		$("#timer").fadeTo(5000, 0);
		$("#narrativeText").html('"Your answer:'+ $(this).html()+' is..."');
		$("#narrativeText").fadeTo(5000, 0, function(){
			$("#narrativeText").fadeTo(10, 1).html('"CORRECT!"').fadeTo(2000, 1, function(){
				$("#narrativeText").html('"Next question!"');
				timerCount = 10;
				$("#timer").fadeTo(1000, 1, function(){
					startTimer();
					askQuestion();
				})
			});
	})
	} else {
		console.log("incorrect");
		pauseTimer();
	}
})








$("[id^='o']").on("mouseover", function(){
	$(this).css("text-shadow","0 0 3px gold");
});

$("[id^='o']").on("mouseout", function(){
	$(this).css("text-shadow","");
});






















});