
$(document).ready(function(){
	 
	var randomNumber;
	
  	newGame();

  	//When Each Guess is Submitted
  	$('form').submit(function(event) {
  		event.preventDefault();
	  			
	  	var guessNumber = $('#userGuess').val();

	  	if (guessNumber < 1 || guessNumber > 100) {
	  		generateFeedback("That won't work! Pick a number between 1 and 100.");
	  		clearValue();
	  	} else {
		  	console.log("User Guess: " + guessNumber);
		  	clearValue(); 
		  	compareGuess(Math.abs(guessNumber - randomNumber));
		  	guessCount++;
		  	setCount(guessCount);
		  	$('#guessList').append('<li>' + guessNumber + '</li>');
		}
  	});

  	//Create a New Game on Click 
  	$('.new').click(function() {
  		newGame();
  	})

  	
  	//Create a new Game
	function newGame () {	
		generateFeedback('Make your Guess!');
		randomNumber = randomize();
		console.log("The secret number: " + randomNumber);
		guessCount = 0;
		setCount(guessCount);
		clearValue();
		$('#guessList li').remove();
	}

  	
  	//Generate a random number between 1 and 100.
  	function randomize() {
  		return(Math.floor((Math.random() * 100) + 1));
  	}

  	//Clear the input box value.
  	function clearValue() {
  		$('#userGuess').val('');
  	}

  	//Compare the Guess to the Random Number
  	function compareGuess(difference) {
  		if (difference == 0) {
  			generateFeedback("That's Right! You Win!");
  		} else if (difference <= 5)  {
  			generateFeedback("You are hot hot hot! Almost got it!");
  		} else if (difference <= 10) {
  			generateFeedback("You are really hot now!");
  		} else if (difference <= 20) {
  			generateFeedback("You are hot!");
  		} else if (difference <=30) {
  			generateFeedback("You are getting warm!");
  		} else if (difference <= 40) {
  			generateFeedback("You are cold! Brrr!");
  		} else if (difference <= 60) {
  			generateFeedback ("You are very cold!");
  		} else {
  			generateFeedback ("You are freezing cold! Try again!");
  		}
  	}

  	//Generate the Feedback for each Guess
  	function generateFeedback(feedback) {
  		$('#feedback').text(feedback)
  	}

  	//Set the Guess Count 
  	function setCount(count) {
  		$('#count').text(guessCount);
  	}


  	/* Help Functions */
	// Display information modal box
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	//Hide information modal box
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


}); //End of Script


