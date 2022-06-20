const container = document.getElementsByClassName('form')
const inputblock= document.querySelector('input')
const label = document.querySelector('label')



inputblock.addEventListener('focus',e=>{
    label.classList.add('movie')
})

inputblock.addEventListener('blur', e=>{

    if (inputblock.value.length==0){
        label.classList.remove('movie')
    }else {label.classList.add('movie')}
})
