const API_KEY = "f6cf693c03ea62d705bcb596";
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}`;

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
 const targetRate = document.querySelector("#target-rate");

 const inputBaseAmount = document.querySelector("#base-amount");
 const selectBaseCode = document.querySelector("#base-code");
 const inputTargetAmount = document.querySelector("#target-amount");
 const selectTargetCode = document.querySelector("#target-code");
 

 let supportedCodes = [];
 let conversionRate = 0;

 const  updateExchangeRate = async () => {
     const baseCode = selectBaseCode.value;
     const targetCode = selectTargetCode.value;

     errorMsg.textContent = "Loading data..."
     conversionRate = await getConversionRate(baseCode, targetCode);
     if (conversionRate === 0) {
         errorMsg.textContent = "Cannot get the conversion rate";
         return;
     }
     errorMsg.textContent = ""; 


     const baseName = supportedCodes.find(code => code[0] === baseCode)[1];
     baseUnit.textContent = `1 ${baseCode} equals`;
     targetRate.textContent = `${conversionRate} ${targetCode}`;
 }

 const initialize = async () => {
    // Get supported codes from the API
    errorMsg.textContent = "Loading data..."
    supportedCodes = await getSupportedCodes();
    if (!supportedCodes.length) {
        errorMsg.textContent = "No supported codes"
        return;
    }
    errorMsg.textContent = "";
    
    // Put options into the select boxs
    supportedCodes.forEach((code) => {
        const baseOption = document.createElement("option");
        baseOption.value = code[0];
        baseOption.textContent = code[1];
        selectBaseCode.appendChild(baseOption);

        const targetOption = document.createElement("option");
        targetOption.value = code[0];
        targetOption.textContent = code[1];
        selectTargetCode.appendChild(targetOption);

    });

    // Set VND to USD as default
    selectBaseCode.value = "VND";
    selectTargetCode.value = "USD";

    // Update exchange rate
    await updateExchangeRate();
 }


initialize();