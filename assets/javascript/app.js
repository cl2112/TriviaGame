$(document).ready(function(){

var timerCount = 10;
var questionPicked;
var timer;
var story = 0;
var clickToProgressNarrative = 1;
var ableToAnswer = 0;
var questionsAsked = [];
var correctAnswers = 0;
var wrongAnswers = 0;
var noAnswer = 0;
var playAgain = 0;



var multipleChoice = {
	q1: {
		q: "What is the name of the founder of Rapture?",
		a: "o1",
		correct: "Seems like his boasting was good for something, heh.",
		wrong: "An interesting thought. But a wrong answer.",
		o1: "Andrew Ryan",
		o2: "Frank Fontaine",
		o3: "Brigid Tenenbaum",
		o4: "Carl Suchong",
	},
	q2: {
		q: "What is the nick-name given to the Adam Addicts?",
		a: "o2",
		correct: "I like Adams more, but you can't control what people do can you? Heh.",
		wrong: "Ah, close. Kinda. But wrong? Absolutely.",
		o1: "Junkers",
		o2: "Splicers",
		o3: "Adams",
		o4: "Juciers",
	},
	q3: {
		q: "Who was the Revolutionaries' leader for Rapture's Civil War?",
		a: "o4",
		correct: "Who is Atlas? Who cares I say.",
		wrong: "Did you not see the posters? Or can you not read? Might explain your performance so far. Or not.",
		o1: "Wilkins",
		o2: "Tenenbaum",
		o3: "Suchong",
		o4: "Atlas",
	},
	q4: {
		q: "What led 'Das Wunderkind' to discover Adam?",
		a: "o1",
		correct: "Crazy story. Serendipitous. Way too serendipitous.",
		wrong: "Hah, did you really think that or do you like shocks? Can't say I blame you.",
		o1: "Seeing a dock worker's hands.",
		o2: "Finding sludge on a diver's boot.",
		o3: "Researching the effects of pressure on blood.",
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
	document.getElementById("cohenMusic").play();
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
		$("#blackScreen").fadeTo(5000, 0);
		$("#clickToProgress").delay(5000).fadeTo(2000, .6, function(){
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
		document.getElementById("bang").play();
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
		$("#narrativeText").html('Gears start churning and from above, a large neon sign rolls into view.');
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
			$("#blackScreen").css("background-color","red");
			askQuestion();
		});
	}
	if (story === 12){
		ending();
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
		document.getElementById("shock").play();
		$("#blackScreen").fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0);
		$("#narrativeText").html('"Aww, looks like you ran out of time."');
		pauseTimer();
		console.log("Ran out of time.");
		noAnswer++;
		$("#timer").fadeTo(5000, 0, function(){
			timerCount = 10;
			$("#timer").html(timerCount);
		});
		$("#narrativeText").fadeTo(2000, 0, function(){
			$("#narrativeText").html("The correct answer was...").fadeTo(1000, 1, function(){
				$("#"+questionPicked.a).css("background-color","gold");
				$("#narrativeText").delay(2000).fadeTo(1000, 0, function(){
					$("#narrativeText").html("Not bad but, try giving an answer next time. Just a little advice.").fadeTo(100, 1).delay(2000).fadeTo(1000, 0, function(){
						$("#narrativeText").html("Next Question!").fadeTo(1000, 1, function(){
							$("#"+questionPicked.a).css("background-color","");
							$("#timer").fadeTo(1000, 1, function(){
								askQuestion();
							})
						});
					})
				})
			})
		})
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
	questionPicked = multipleChoice["q"+Math.floor(Math.random()*15 +1)];
	if (questionsAsked.length < 10){
		if (questionsAsked.indexOf(questionPicked) === -1){
			questionsAsked.push(questionPicked);
			console.log(questionPicked);
			$("#question").html(questionPicked.q);
			$("#o1").html(questionPicked.o1);
			$("#o2").html(questionPicked.o2);
			$("#o3").html(questionPicked.o3);
			$("#o4").html(questionPicked.o4);	
			ableToAnswer = 1;
			startTimer();
			$("#timer").fadeTo(1000, 1);
		} else {
			askQuestion();
		}
	} else {
		console.log("No more questions");
		ableToAnswer = 0;
		$("#narrativeText").fadeTo(4000, 0).html("Uh...").fadeTo(3000, 1).fadeTo(2000, 0).html("Next Question!").fadeTo(10, 1, function(){
			$("#narrativeText").fadeTo(3000, 0).html("Next Question?!").fadeTo(3000, 1).fadeTo(2000, 0, function(){
				$("#narrativeText").html("Well then. I guess that's all the time we have.").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0, function(){
					$("#narrativeText").html("Let's see how our contestant did!").fadeTo(1000, 1, function(){
						$("#question").html("-=Results=-");
						$("#o1").html("Correct Answers: "+correctAnswers);
						$("#o2").html("Wrong Answers: "+wrongAnswers);
						$("#o3").html("Ran Out of Time: "+noAnswer);
						$("#o4").html("");
						clickToProgressNarrative = 1;
						$("#clickToProgress").fadeTo(5000,1);
					})
				})
			})
		})
	}
	
}

$("h3").on("click", function(){
	if(ableToAnswer === 1){
		ableToAnswer = 0;
		pauseTimer();
		$(this).css("background-color","gold");
		var answerPicked = $(this);
		if ($(this).attr("id") == questionPicked.a){
			console.log("correct");
			correctAnswers++;
			$("#timer").fadeTo(5000, 0);
			$("#narrativeText").html('"Your answer is..."');
			$("#narrativeText").fadeTo(5000, 0, function(){
				timerCount = 10;
				$("#timer").html(timerCount);
				$("#narrativeText").fadeTo(10, 1).html('"CORRECT!"').fadeTo(2000, 0, function(){
					document.getElementById("yay").play();
					$("#narrativeText").html(questionPicked.correct).fadeTo(100, 1).delay(2000).fadeTo(1000, 0, function(){
						$("#narrativeText").html("Next Question!").fadeTo(1000, 1, function(){
							answerPicked.css("background-color","");
							$("#timer").fadeTo(1000, 1, function(){
							askQuestion();
							})
						});
					})
				});
			})
		} else {
			console.log("incorrect");
			wrongAnswers++;
			$("#timer").fadeTo(5000, 0);
			$("#narrativeText").html('"Your answer is..."');
			$("#narrativeText").fadeTo(5000, 0, function(){
				timerCount = 10;
				$("#timer").html(timerCount);
				answerPicked.css("background-color","red");
				document.getElementById("shock").play();
				$("#blackScreen").fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0);
				$("#narrativeText").fadeTo(10, 1).html('"WRONG!"').fadeTo(2000, 0, function(){
					$("#narrativeText").html("The correct answer was...").fadeTo(1000, 1, function(){
						$("#"+questionPicked.a).css("background-color","gold");
						$("#narrativeText").delay(2000).fadeTo(1000, 0, function(){
							$("#narrativeText").html(questionPicked.wrong).fadeTo(100, 1).delay(2000).fadeTo(1000, 0, function(){
								$("#narrativeText").html("Next Question!").fadeTo(1000, 1, function(){
									answerPicked.css("background-color", "");
									$("#"+questionPicked.a).css("background-color","");
									$("#timer").fadeTo(1000, 1, function(){
										askQuestion();
									})
								});
							})
						})
					})
				})
			})
		}
	}
});


function ending(){
	$("#narrativeText").fadeTo(3000, 0, function(){
		$("#question").remove();
		$("#o1").remove();
		$("#o2").remove();
		$("#o3").remove();
		$("#o4").remove();
		$("#timer").fadeTo(2000, 0);
		$("#neonSign").animate({bottom:"100%"},5000);
		$("#narrativeText").html("WOW! What a show folks!").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0,function(){
			$("#narrativeText").html("Now it's time for the prize!").fadeTo(1000, 1).delay(2000).fadeTo(1000,0, function(){
				if (correctAnswers == 10){
					$("#narrativeText").html("AMAZING! What a performance! You deserve the ultimate prize!").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0, function(){
						$("#narrativeText").html("And that's just what you'll get.").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0, function(){
							$("#blackScreen").fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0, function(){
								$("#blackScreen").css("background-color", "black").fadeTo(5000,1, function(){
									$("#narrativeText").html("HA HA HA HA HA HA AHA HA HAHA AHAH HAH!").fadeTo(1000, 1).delay(4000).fadeTo(1000, 0, function(){
										$("#narrativeText").html("Maybe I should change the show's name to Smart <b>AND</b> Dead?").fadeTo(5000,1, function(){
											$("#neonSignScreen").append("<h1 id='clickToPlayAgain'>Click Here To Play Again!</h1>");
											playAgain=1;
										});
									})
								});
							})
						})
					})
				} else if (correctAnswers > 5) {
					$("#narrativeText").html("Not Bad! Not Great! Exciting! Bet you can't wait to get your prize!").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0, function(){
						$("#narrativeText").html("And that's just what you'll get.").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0, function(){
							$("#blackScreen").fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0, function(){
								$("#blackScreen").css("background-color", "black").fadeTo(5000,1, function(){
									$("#narrativeText").html("HA HA HA HA HA HA AHA HA HAHA AHAH HAH!").fadeTo(1000, 1).delay(4000).fadeTo(1000, 0, function(){
										$("#narrativeText").html("I LOVE THIS GAME!").fadeTo(5000,1, function(){
											$("#neonSignScreen").append("<h1 id='clickToPlayAgain'>Click Here To Play Again!</h1>");
											playAgain=1;
										});
									})
								});
							})
						})
					})
				} else if (correctAnswers > 2) {
					$("#narrativeText").html("Ouch! Well, you ain't smart. But! You still deserve a prize for playing!").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0, function(){
						$("#narrativeText").html("And that's just what you'll get.").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0, function(){
							$("#blackScreen").fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0, function(){
								$("#blackScreen").css("background-color", "black").fadeTo(5000,1, function(){
									$("#narrativeText").html("HA HA HA HA HA HA AHA HA HAHA AHAH HAH!").fadeTo(1000, 1).delay(4000).fadeTo(1000, 0, function(){
										$("#narrativeText").html("I love this game!").fadeTo(5000,1, function(){
											$("#neonSignScreen").append("<h1 id='clickToPlayAgain'>Click Here To Play Again!</h1>");
											playAgain=1;
										});
									})
								});
							})
						})
					})
				} else {
					$("#narrativeText").html("Shocking! You'll go down in history as the worst contestant I have ever seen!").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0, function(){
						$("#narrativeText").html("And! Just in case your not dead enough.").fadeTo(1000, 1).delay(2000).fadeTo(1000, 0, function(){
							$("#blackScreen").fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0).fadeTo(10, 1).fadeTo(10, 0, function(){
								$("#blackScreen").css("background-color", "black").fadeTo(5000,1, function(){
									$("#narrativeText").html("HA HA HA HA HA HA AHA HA HAHA AHAH HAH!").fadeTo(1000, 1).delay(4000).fadeTo(1000, 0, function(){
										$("#narrativeText").html("Hmm. They just don't make contestants like they used to.").fadeTo(5000,1, function(){
											$("#neonSignScreen").append("<h1 id='clickToPlayAgain'>Click Here To Play Again!</h1>");
											playAgain=1;
										});
									})
								});
							})
						})
					})
				}
			})
		})
	})
}





$("[id^='o']").on("mouseover", function(){
	$(this).css("text-shadow","0 0 3px gold");
});

$("[id^='o']").on("mouseout", function(){
	$(this).css("text-shadow","");
});


$("#clickToPlayAgain").on("click", function(){
	if (playAgain === 1){
		location.reload(true);
	}
})



















});