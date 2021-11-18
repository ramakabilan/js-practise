
// Create event listener for all buttons
let buttons = document.querySelectorAll('.question-btn');
console.log(buttons);

// [

//     'btn-1',
//     'btn-2',
//     'btn-3'

// ]

// buttons.forEach(function(button){
//     console.log(button);
// });

// for(let i = 0; i < 3; i++) {
//     console.log(i, buttons[i]);
//     printMe(buttons[i]);
// }
function hideAllQuestionText(){
    let questionTexts = document.querySelectorAll('.question-text');
    questionTexts.forEach(function(questionText){
        console.log(questionText);
        questionText.style.display = 'none';
    });
}

function printMe(button){
    button.addEventListener('click', function(){
        
        // Select nearest question-Text

        let currentElement = this,
            questionWrapperElement = currentElement.parentNode.parentNode,
            questionTextElement = questionWrapperElement.querySelector('.question-text');

        console.log(questionTextElement);
        // Hide all question text

        hideAllQuestionText();
        // Apply display: block; to the element

        questionTextElement.style.display = 'block';
    });
}

// printMe('hello');

// console.log(printMe);

// console.log(buttons.forEach);

buttons.forEach(printMe);