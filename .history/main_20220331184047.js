const API_KEY = "f6cf693c03ea62d705bcb596";
const BASE_URL = ` https://v6.exchangerate-api.com/v6/${API_KEY}`;

async function getSupportedCodes() {
    try {
      const reponse = await fetch(`${BASE_URL}/codes`);
      if (reponse.ok) {
        const data = await reponse.json();  
        const codes = data["supported_codes"];
        return codes;
      }
    } catch(error) {
        console.log(error);
        return [];
    }
}

// getSupportedCodes().then((result) => console.log(result));

async function getConversionRate(baseCode, targetCode) {
    try {
        const reponse = await fetch(`${BASE_URL}/pair/${baseCode}/${targetCode}`);
        if (reponse.ok) {
          const data = await reponse.json();  
          const rate = data["conversion_rate"];
          return rate;
        }
    } catch (error) {
        console.log(error);
        return 0;
    }
}


// getConversionRate("VND", "USD").then((result) => console.log(result));

 const baseUnit = document.querySelector("#base-unit");
 const targetRate = document.querySelector("target-rate");

 const inputBaseAmount = document.querySelector("#base-amount");
 const selectBaseCode = document.querySelector("#base-code");
 const inputTargetAmount = document.querySelector("#target-amount");
 const selectTargetCode = document.querySelector("#target-code");

 const errorMsg = document.querySelector(".error-message");

 let supportedCodes = [];
 let conversionRate = 0;

 const initialize = async () => {
    // Get supported codes from the API
    // supportedCodes = await getSupportedCodes();
    if (!supportedCodes.length) {
        errorMsg.textContent = "No supported codes"
        return;
    }
    // Put options into the select boxs

    // Set VND to USD as default

    // Update exchange rate
 }


initialize();