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


getConversionRate("VND", "USD").then((result) => console.log(result));