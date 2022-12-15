
const input = document.querySelector("#telefone")

input.addEventListener('keypress', () => {
    let inputlength = input.value.length

    if(inputlength === 2){
        input.value += "-"
    }else if(inputlength === 8) {
        input.value += "-"
    }
})