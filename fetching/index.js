const catFacts = []
var fact = ''
var counter = 0;

async function getData() {
    const url = 'https://catfact.ninja/fact'
    try {
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error(`Response Status: ${response.status}`);
        }
        catFacts.unshift(response); // adds to beginning
        console.log("Response: " + response)
        let json = await catFacts[0].json(); 
        if (catFacts.length == 1) {
            fact = document.createElement('div'); //create new div for the cat fact
            fact.setAttribute('id', 'fact');
        }
        
        const button = document.getElementById('button') //find button to know where to append div
        console.log("Json: " + json);
        fact.textContent = json.fact;
        button.parentElement.prepend(fact);
        console.log(catFacts)
    } catch (error) {
        console.error(error.message);
    }
}

async function getNextData() {
    // need to implement
    
}
async function getPreviousData() {
    // need to implement
    
}