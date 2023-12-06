

const source = "https://noah-2299.github.io/wdd230/final/data/rental_pricing.json";

async function getPricing(){
    const response = await fetch(source);
    const data = await response.json();
    displayTable(data);
}

function displayTable(data){
    let table = document.getElementById("rental-pricing");
    data.rentals.forEach(element => {
        let rental_type = element.rental_type;
        
        let row = document.createElement('tr');
        let first_column = document.createElement('td');
        first_column.innerText = rental_type;
        row.appendChild(first_column);
        let pricing = element.pricing;
        console.log(pricing);
        pricing.forEach(price=>{
            let column = document.createElement('td');
            // console.log(price);
            column.innerText = price[0];
            row.appendChild(column);
        });
        table.appendChild(row);

    });


}


getPricing();