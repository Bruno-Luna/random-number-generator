const inputOf = document.querySelector('.numberOf')
const inputUpTo = document.querySelector('.numberUpTo')
const btnGenerate= document.querySelector('.generate')
const btnClear = document.querySelector('.clear')
const paragraph = document.querySelector('p')

btnGenerate.addEventListener('click', () => {
    if(convertStringToNumber()){
        const randomNumber = Math.random() 
        const numRandom = Math.round(randomNumber * (inputUpTo.value - inputOf.value) + inputOf.value)

        paragraph.textContent =`Número sorteado: ${numRandom}`
    }
})

btnClear.addEventListener('click', () => {
    inputOf.value = ''
    inputUpTo.value = ''
    paragraph.textContent = ''
})

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
