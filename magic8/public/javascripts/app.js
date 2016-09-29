// TODO: make this random
var randomMessage = 'Yes';


// ---

// $(document).ready(function() {
//   $('#form').on('submit', function(e) {
//     var shakeBall = new Promise(function(resolve, reject) {
//       console.log('new Promise');
//       var questionText = $('#question').val();
//       if (!questionText) {
//         reject('You must enter a value');
//       } else {
//         setTimeout(function() {
//           resolve(randomMessage);
//         }, 3000);
//       }
//     });

//     e.preventDefault();
//     // 1. wait for 3 seconds
//     console.log('submit')
//     shakeBall
//       .then(function onSuccess(message) {
//         $('#number').text(message);
//       });

//     // 2. message to be random

//   });
// });

$("#form").submit(function(event){
  var questionText = $("input[name=question]").val();
  event.preventDefault();
  var magic8Ball = new Promise(function(resolve,reject) {
    console.log('new promise');
    if (questionText.length != 0) {
      setTimeout(function() {
        resolve(answer);}, 3000);
    } else {
        reject(alert("Please enter a question in the input box!"))
    }
  });
  magic8Ball.then(function(questionText){
  var answerArray = ["You will live forever", "You're making the right decision","SO AWSOME!", "Nahhhh Dude"];
  var randomAnswer = answerArray[Math.floor(Math.random() * answerArray.length)];
  $("#answer").innerHTML = randomAnswer;
});
});
