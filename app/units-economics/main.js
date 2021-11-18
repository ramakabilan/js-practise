
let unitsEconomicsForm = document.getElementById('units-economics-form'),
sellingPriceInput = document.getElementById('selling-price'),
cogsInput = document.getElementById('cogs'),
grossMarginInput = document.getElementById('gross-margin'),
salesMarketingInput = document.getElementById('sales-marketing'),
operationCostInput = document.getElementById('operation-cost'),
netMarginInput = document.getElementById('net-margin'),
sellingPriceValue, cogsValue, grossMarginValue, salesMarketingValue, 
operationCostValue, netMarginValue;

function calculate(event){
    event.preventDefault();
    // Calculate gross margin
    sellingPriceValue = sellingPriceInput.value;
    cogsValue = cogsInput.value;
    grossMarginValue = sellingPriceValue - cogsValue;
    grossMarginInput.value = grossMarginValue;

    // Calculate net margin
    salesMarketingValue = salesMarketingInput.value;
    operationCostValue = operationCostInput.value;
    netMarginValue = grossMarginValue - salesMarketingValue -
    operationCostValue;
    netMarginInput.value = netMarginValue;

}

unitsEconomicsForm.addEventListener('submit', calculate);