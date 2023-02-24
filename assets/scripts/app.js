const btnGenerate= document.querySelector('.generate')
const inputUpTo = document.querySelector('.numberUpTo')
const paragraph = document.querySelector('p')
const btnClear = document.querySelector('.clear')
const inputOf = document.querySelector('.numberOf')

const checkNumber = () => {
    if(convertStringToNumber()){
        
        const numbers = convertStringToNumber()
        if(numbers.numUpToConverte < numbers.numOfConverte){
            alert('Número não pode ser menor que o inicial!')
            return false
        }
    } else {
            alert('Campo(s) vazio(s)!')
            return false
    }

    return true
}

const generateNumber = () => {
    if(checkNumber()){
        
        if(convertStringToNumber()){
            
        const numbers = convertStringToNumber()
        const numRandom = Math.floor(Math.random() * (numbers.numUpToConverte - numbers.numOfConverte + 1) + numbers.numOfConverte);
        
        paragraph.textContent =`Número sorteado: ${numRandom}`
        }
    }
}

const clearValues = () => {
    inputOf.value = ''
    inputUpTo.value = ''
    paragraph.textContent = ''
}

const convertStringToNumber = () => {
    if (inputOf.value || inputUpTo.value !== '') {   
        const numOfConverte = Number(inputOf.value)
        const numUpToConverte = Number(inputUpTo.value)
         
        return { numOfConverte, numUpToConverte }
    }

    return false
}

btnClear.addEventListener('click', clearValues)
btnGenerate.addEventListener('click', generateNumber)
