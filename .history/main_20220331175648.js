const API_KEY = "f6cf693c03ea62d705bcb596";
const BASE_URL = ` https://v6.exchangerate-api.com/v6${API_KEY}`;

fetch(`${BASE_URL}/codes`).then((response) => {
    console.log(response);
});