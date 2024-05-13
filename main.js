const BASE_URL = "https://v6.exchangerate-api.com/v6/b596e3b857d468b6c57d39fe/latest/USD"

const dropdowns = document.querySelectorAll(".dropdown select")

for(let select of dropdowns) {
    for(currcode in countryList){
        const newOption = document.createElement("options");
        newOption.innerText = currcode ; 
        newOption.value = currcode ;
        select.append(newOption)
    }
}
