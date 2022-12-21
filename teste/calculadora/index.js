let total = 0
let buffer = "0"
let ultimoOperador 

const screen = document.querySelector('.screen')

function clickBotao(value) {
    if(isNaN(value)) {
        handleSymbol(value)
    }else {
        handleNumber(value)
    }
    screen.innerText = buffer
}

function handleSymbol(symbol) {
    switch(symbol) {
        case 'C':
            buffer = '0'
            total = 0
            break;
        case '=':
            if(ultimoOperador === null) {
                return
            }
            flushOperation(parseInt(buffer))
            ultimoOperador = null
            buffer = total
            total = 0
            break
        case '←':
            if(buffer.length ===1) {
                buffer = '0'
            }else {
                buffer - buffer.toString(0, buffer.length - 1)
            }
            break
        
    }

}



