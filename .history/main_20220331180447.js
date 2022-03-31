const API_KEY = "f6cf693c03ea62d705bcb596";
const BASE_URL = ` https://v6.exchangerate-api.com/v6/${API_KEY}`;

async function getSupportedCodes() {
    try {
      const reponse = await fetch(`${BASE_URL}/codes`);
      if (reponse.ok) {
        const data = await reponse.json();  
      }
    } catch(error) {
        console.log(error);
        return [];
    }
}