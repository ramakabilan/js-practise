let Token = 0,
    myButtonElement = document.getElementById('counter'),
    displayElement = document.getElementById('display');
myButtonElement.addEventListener('click', function () {
    Token = Token + 1;
    displayElement.innerHTML = Token;
});
