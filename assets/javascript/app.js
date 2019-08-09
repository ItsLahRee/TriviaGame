const triviaQuestions = [
  {
      question: "Where was Will Smith's fictional character from in the 1990 show The Fresh Prince of Bel Air?",
      choices: ["Detriot", "Philadelphia", "Santa Cruz", "Indinanapolis"],
      correctAnswer: "Philadelphia"
  },

  {
      question: "Which teenage heartthrob played a friendly gohst in the 1995 film Casper?",
      choices: ["Mark Paul Gosselaar", "Ryder Strong", "Justin Timberlake", "Devon Sawa"],
      correctAnswer: "Devon Sawa"
  },

  {
      question: "Which 1995 cartoon show starred two genetically enhanced labratory mice?",
      choices: ["Arthur", "Tale Spin", "Pinky & The Brain", "Animaniacs"],
      correctAnswer: "Pinky & The Brain"
  },

  {
      question: "Who's face was never shown on the television show series Home Improvement due to a backyard privacy fence?",
      choices: ["Jill", "Wilson", "Randy", "Al"],
      correctAnswer: "Wilson"
  },
  {
      question: "Which 1990's television series showed a different family dynamic than what America was used to?",
      choices: ["Boy Meets World", "Dawsons Creek", "Full House", "Family Matters"],
      correctAnswer: "Full House"
  },
  {
      question: "What government agency did X-Files stars Mulder and Sculy work for in the 1993 television series?",
      choices: ["DOL", "FBI", "USDA", "DEA"],
      correctAnswer: "FBI"
  }
  
];

const winImages = [
  './assets/images/#',
  './assets/images/#',
  './assets/images/#',
  './assets/images/#',
  './assets/images/#'
];

const lostImages = [
  './assets/images/#',
  './assets/images/#',
  './assets/images/#'
];
    
    
    
    var questionsArea =$("#show-questions")
    var number = 30;
    var intervalId;
    var correct=0;
    var incorrect=0;

    //  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);

    //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);


    function run() {
      displayQuestions();
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    function displayQuestions() {
      
      
      for (i = 0; i < triviaQuestions.length; i++) { 
        questionsArea.append("<h4>" + triviaQuestions[i].question  + "</h4> ")
        for(j = 0; j < triviaQuestions[i].choices.length; j++){
          questionsArea.append(' <input type="radio" id="huey" name="question-'+i+'" value="'+triviaQuestions[i].choices[j] +'">'+triviaQuestions[i].choices[j])
         
        }
      }
      questionsArea.append("<br></br> <button id='done'>Done</button>")
    }
      function checkAnswers() {
        var inputs= questionsArea.children("input:checked")
        for(i = 0; i < inputs.length; i++){
          if($(inputs[i]).val() === triviaQuestions[i].correctAnswer){
            correct ++ 
            
          } else{
            incorrect ++
          }
        }
        questionsArea.empty()
        questionsArea.append("<p>Correct"+correct+"</p>")
        questionsArea.append("<p>Incorrect"+incorrect+"</p>")
  }

  $(document).on("click", "#done", function(){
    checkAnswers()
  
  }) 
    //  Execute the run function.
    run();