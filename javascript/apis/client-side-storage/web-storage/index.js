const enterName = document.querySelector('#entername');
const submitName = document.querySelector('#submitname');
const title = document.querySelector('h1');
const personalGreeting = document.querySelector('.personal-greeting');
const forgetName = document.querySelector('#forgetname');
const remember = document.querySelector('.remember');
nameDisplayCheck();

submitName.addEventListener('click', (e) => {
    e.preventDefault();
    if (enterName.value) {
        title.textContent = `Hello ${enterName.value}`;
        personalGreeting.textContent = `Welcome to our website, ${enterName.value}`;
        remember.style.display = 'none'
        enterName.value = '';
        localStorage.setItem('name', enterName.value)
    } else {}
});

forgetName.addEventListener('click', (e) => {
    e.preventDefault();
    title.textContent = `Our website`;
    personalGreeting.textContent = `Welcome to our website.`;
    remember.style.display = 'block'
    localStorage.removeItem('name', enterName.value)
});

function nameDisplayCheck(){

}