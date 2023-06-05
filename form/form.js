const inputContainerGrid = document.querySelectorAll('[data-input-container-grid]')
const inputs = document.querySelectorAll('div input')
const form = document.querySelector('form')
const firstname= document.forms[0].elements[0]
const lastname= document.forms[0].elements[1]
const email= document.forms[0].elements[2]
const contactAddress= document.forms[0].elements[3]
const telephone= document.forms[0].elements[4]
const cityState = document.forms[0].elements[5]
const postalCode= document.forms[0].elements[6]
const country= document.forms[0].elements[7]

const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
const regezNum=/0-9/

inputs.forEach(input=> {
    input.addEventListener('focus',e=>{
        let label = input.nextElementSibling
        input.classList.add('focus')
        label.classList.add('anime')
    })
})

inputs.forEach(input=> {
    input.addEventListener('blur',e=>{
        let label= input.nextElementSibling
        if (input.value.length== 0)
        {label.classList.remove('anime')
        input.classList.remove('focus')}
        else {
        label.classList.add('anime')
        input.classList.add('focus')}
    })
})

 
form.addEventListener('submit', e=> {
    
    let error= []
    
    inputs.forEach(input=> {
        let label= input.nextElementSibling
        let span= label.nextElementSibling
        if (input.value.length> 0 && email.value.match(regex)){
            label.classList.remove('animeX')
            input.classList.remove('blur')
            span.innerText=''
        }else if (input.value.length> 0){
            label.classList.remove('animeX')
            input.classList.remove('blur')
            span.innerText=''
        
        }
    })
   
    if (firstname.value.length<=1 || firstname.value.length>20 ){
   
        let nextSibling= firstname.nextElementSibling
        let lastSibling= nextSibling.nextElementSibling
        error.push(`Less than 20 values are required here`)
        firstname.classList.add('blur')
        nextSibling.classList.add('animeX')
        lastSibling.innerText= error
        firstname.focus()
        e.preventDefault()
        return
    }   
   
    else if (lastname.value.length==0){

        let nextSibling2= lastname.nextElementSibling
        let lastSibling2= nextSibling2.nextElementSibling
        error.push(`required*`)
        lastname.classList.add('blur')
        nextSibling2.classList.add('animeX')
        lastSibling2.innerText= error
        lastname.focus()
        e.preventDefault()
        return
    }
   
    else if (email.value.length==0 || !email.value.match(regex)){
   
        let nextSibling3= email.nextElementSibling
        let lastSibling3= nextSibling3.nextElementSibling
        error.push(`enter a valid email address`)

           
                email.classList.add('blur')
                nextSibling3.classList.add('animeX')
                lastSibling3.innerText= error
        
        email.focus()
        e.preventDefault()
        return
    }
   
    else if (contactAddress.value.length==0 || contactAddress.value.length<6){
   
        let nextchild4= contactAddress.nextElementSibling
        let lastchild4= nextchild4.nextElementSibling
        error.push(`full information required*`)
        contactAddress.classList.add('blur')
        contactAddress.focus()
        nextchild4.classList.add('animeX')
        lastchild4.classList.add('error')
        lastchild4.innerHTML=error
        e.preventDefault()
        return
    }
    
    else if (telephone.value.length==0 || !telephone.value.match(regezNum)){
   
        let nextchild5= telephone.nextElementSibling
        let lastchild5= nextchild5.nextElementSibling
        error.push(`required*`)
        telephone.classList.add('blur')
        telephone.focus()
        nextchild5.classList.add('animeX')
        lastchild5.classList.add('error')
        lastchild5.innerHTML=error
        e.preventDefault()
        return
    }

    else if (cityState.value.length==0 || contactAddress.value.length<6){
   
        let nextchild4= contactAddress.nextElementSibling
        let lastchild4= nextchild4.nextElementSibling
        error.push(`full information required*`)
        contactAddress.classList.add('blur')
        contactAddress.focus()
        nextchild4.classList.add('animeX')
        lastchild4.classList.add('error')
        lastchild4.innerHTML=error
        e.preventDefault()
        return
    }

})