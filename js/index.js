function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active'); // Toggle the 'active' class
}

function calculate() {
    // Get the user input value
    const usdcAmount = parseFloat(document.getElementById('usdcAmount').value);

    // Validate if the input is a valid number
    if (isNaN(usdcAmount) || usdcAmount <= 0) {
        document.getElementById('result').innerHTML = 'Please enter a valid USDC amount.';
        return;
    }

    // Hardcoded exchange rates
    const USDC_TO_USD = 1; // 1 USDC = 1 USD
    const BTC_TO_USD = 35000; // 1 BTC = 35,000 USD

    // Calculate the equivalent USD and BTC
    const usdEquivalent = usdcAmount * USDC_TO_USD;
    const btcEquivalent = usdcAmount / BTC_TO_USD;

    // Display the results
    document.getElementById('result').innerHTML = `
        ${usdcAmount} USDC = ${usdEquivalent.toFixed(2)} USD <br>
        ${usdcAmount} USDC = ${btcEquivalent.toFixed(5)} BTC
    `;
}


function toggleMenu() {
    const navLinks = document.querySelector('.firstNav');
    navLinks.classList.toggle('active');
}
