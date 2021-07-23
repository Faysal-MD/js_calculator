let screen = document.getElementById('screen');
// let buttonText = screen.value;
const buttons = document.querySelectorAll('button');
let screenValue = '';
for (let i of buttons) {
    i.addEventListener('click', (e) => {
        screen.value = e.target.innerText;
        if(e.target.innerText == 'C'){
            screenValue = '';
            screen.value = screenValue;
        }
        else if(screen.value == '=')
        {
            screen.value = eval(screenValue);
        }
        else{
            screenValue += screen.value;
            screen.value = screenValue;
        }  
    })
}
