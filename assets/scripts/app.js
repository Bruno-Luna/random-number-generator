const btnGenerate= document.querySelector('.generate')
const inputUpTo = document.querySelector('.numberUpTo')
const paragraph = document.querySelector('p')
const btnClear = document.querySelector('.clear')
const inputOf = document.querySelector('.numberOf')

const convertStringToNumber = () => {
    const numUpToConverte = Number(inputUpTo.value) 
    const numOfConverte = Number(inputOf.value)
    
    if(numUpToConverte < numOfConverte){
        alert('Número não pode ser menor que o inicial!')
        return false
    }
   
    if(!numUpToConverte || !numOfConverte){
        alert('Campo(s) vazio(s)!')
        return false
    }

    return true
}

const generateNumber = () => {
    if(checkNumber()){
        const numbers = convertStringToNumber()

        const numRandom = Math.floor(Math.random() * (numbers.numUpToConverte - numbers.numOfConverte + 1) + numbers.numOfConverte);
        
        paragraph.textContent =`Número sorteado: ${numRandom}`
    }
}

const clearValues = () => {
    inputOf.value = ''
    inputUpTo.value = ''
    paragraph.textContent = ''
}

const convertStringToNumber = () => {
    const numUpToConverte = Number(inputUpTo.value) 
    const numOfConverte = Number(inputOf.value)

    return { numOfConverte, numUpToConverte }
}

btnClear.addEventListener('click', clearValues)
btnGenerate.addEventListener('click', generateNumber)
