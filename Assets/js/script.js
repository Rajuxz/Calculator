let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');

// console.log(buttons)
let screenVal = '';

for(item of buttons){
    item.addEventListener('click',(e)=>{
        btnText = e.target.innerText;
        // console.log("You've input : ", btnText);
        if(btnText=='X'){
            btnText = '*';
            screenVal += btnText;
            screen.value = screenVal;
        }
        else if(btnText == 'C'){
            screenVal = '';
            screen.value = screenVal;
        }
        else if(btnText == '='){
            try{
                result = eval(screenVal);
                screen.value = result;
                screenVal = result;
            }catch(e){
                screen.value = "Error";
            }
        }
        else if(btnText == 'DEL'){
            newVal = screen.value.substr(0,screen.value.length-1);
            screenVal = newVal;
            screen.value = screenVal;
        }
        else{
            if(screenVal==''){
                console.log(screenVal)
            }
            screenVal += btnText;
            screen.value = screenVal;
        }
    });
}