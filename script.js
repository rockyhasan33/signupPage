const text = document.querySelector('.text');
const pass = document.querySelector('.pass');
const form = document.querySelector('form');
const displayAlert = document.querySelector('.alert') ;
const label = document.querySelector('.label');
const fill = document.querySelector('.fill');
const submit = document.querySelector('button');
const checkbox = document.querySelector('input[type=checkbox]');


form.addEventListener('submit', (e) => {
    e.preventDefault();
    displayAlert.style.visibility = 'hidden';
    label.style.visibility = 'hidden';
    text.value = '';
    pass.value = '';
})



pass.addEventListener('input', (e) => {
    if(e.currentTarget.value.length > 5) {
        displayAlert.style.visibility = 'visible';
        displayAlert.textContent = 'low level'
        label.style.visibility = 'visible';
        fill.style.width = '25%';
        fill.style.backgroundColor = 'red';
    }else {
        displayAlert.style.visibility = 'visible';
        displayAlert.textContent = 'please enter minimum value 6 length'
        label.style.visibility = 'visible';
        fill.style.width = '5%';
        fill.style.backgroundColor = '#2F2440';
    }

    if(e.currentTarget.value.length > 10) {
        // displayAlert.style.visibility = 'visible';
        displayAlert.textContent = 'medium level'
        // label.style.visibility = 'visible';
        fill.style.width = '50%';
        fill.style.backgroundColor = 'yellow';
    }

    if(e.currentTarget.value.length > 15) {
        // displayAlert.style.visibility = 'visible';
        displayAlert.textContent = 'hight level'
        // label.style.visibility = 'visible';
        fill.style.width = '75%';
        fill.style.backgroundColor = 'green';
    }


    
    

    
})

checkbox.addEventListener('change', () => {
    if(checkbox.checked) {
        pass.type = 'text';
    }else {
        pass.type = 'password';
    }
})

