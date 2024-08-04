const display = document.getElementById('display');

function appendToDisplay(input){
    display.value += input;

}

function clearDisplay(){
    display.value = '';
}

function Delete(){
    // OnClick="Calc.Input.value = Calc.Input.value.substring(0, Calc.Input.value.length - 1)"
     let delete_nums =  display.value.substring(0, display.value.length -1)

    display.value = delete_nums
}

function calculate(){
    try{

        display.value = eval(display.value)
    }
    catch{
        display.value = "Error"
    }

}