// submit a message
function submitMessage(){
    let inputMessage = document.getElementsByClassName("inp-message")[0];
    let messageEmpty = document.getElementsByClassName("enter-val")[0];
    let displayValue = document.getElementsByClassName("text-to-display")[0];

    if(inputMessage.value.length == 0){
        setTimeout(() => {
            messageEmpty.style.display = "block"
        }, 500);
    }else{
        messageEmpty.style.display = "none"
        displayValue.textContent = inputMessage.value
        inputMessage.value = ""
    }
}