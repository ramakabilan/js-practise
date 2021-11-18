
let filterWrapper = document.getElementById('filter-1'),
    filterlinks = filterWrapper.querySelectorAll('.filter-link');
    
/*
    1. Write click event for each a-tag
    2. Get class name of this element
    3. Hide all cards
    4. Show with specific class name
*/

filterlinks.forEach(function(link){
    link.addEventListener('click',function(){
        // Get the class name of the element
        let showElement = this,
        filterType = showElement.classList[1];
        console.log(showElement);
        // Console.log(filterType);
        // Hide all cards
        hideAllCards();
        // Show cards with specific class name
        showCards(filterType);
    });
});

function hideAllCards(){
    let allCards = filterWrapper.querySelectorAll('.card');
    allCards.forEach(function(card){
        card.style.display = 'none';
    });
}

function showCards(filterType){
    console.log(filterType);
    if(filterType == "all"){
        cardType = '.card';
    }
    else{
        cardType = '.'+filterType;
    }
    console.log(cardType);
    let cardTypes = filterWrapper.querySelectorAll(cardType);
    cardTypes.forEach(function(card){
        card.style.display = 'block';
    });
}

