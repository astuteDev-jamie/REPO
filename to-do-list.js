const h5= document.querySelector('h5')
const taskButton= document.querySelector('#task-button')
const form = document.querySelector('form')
const task = document.forms[0].elements[0]
const date = document.forms[0].elements[1]
const time = document.forms[0].elements[2]
const cleanButton = document.getElementById('clean')
const mainSection= document.querySelector('div.main')
const body= document.querySelector('body')

body.onload= ()=>{
    console.log(`perfect`)
        h5.classList.replace('banner','load')
        taskButton.classList.toggle('rotate')
        const rotate= setTimeout(()=>{
            taskButton.classList.toggle('rotate')
        },700)
        setTimeout(()=>{clearTimeout(rotate)},700) 
}

document.addEventListener('click', (e)=>{
    const onTaskButton = e.target.matches('#task-button')
    if (!onTaskButton && e.target.closest('.filltask') != null) 
    return

    let fillForm
    if (onTaskButton && task.value.length<=4 && date.value.length==0 && time.value.length==0){
        fillForm= e.target.closest('.filltask')
        fillForm.classList.toggle('active')
    } else if (onTaskButton &&(task.value.length>4||date.value.length>0||time.value.length>0))
    {vibrateThings(cleanButton)
    return}

    const active = document.querySelector('.filltask.active')
    if (active === fillForm) return

    if (active && task.value.length>0 )
    {vibrateThings(cleanButton)
    return}
    else if (active) {
    active.classList.remove('active')}
})

const formSpan= document.getElementById('error')
const taskValue= task.value
const dateValue= date.value
const timeValue=time.value


function createTaskbar(){

    let error= []

    if (task.value.length>0&&date.value.length>0&&time.value.length>0){
    const div= document.createElement('div')
    mainSection.append(div)
    div.setAttribute('class','task-bar')
    div.innerHTML= 
    `<div class="task">
        <h3>the first item on the list</h3>
        <span id="date">Monday 3 january</span> 
        <span id="time">2pm</span>
    </div>
    <p class="clear">Clear</p>`
    form.reset()
    }
    else error.push(`all fields are required`)
         vibrateThings(formSpan)
         formSpan.innerText=error
         return
}

function vibrateThings(element){
    let interval= setInterval(()=>{
        element.classList.toggle('vibrator')
    },100)
    setTimeout(()=>clearInterval(interval),600) 
}

mainSection.addEventListener('click', e=>{
    const onClearbutton= e.target.matches('.clear')
    let clearTaskbar
    if (onClearbutton){
        clearTaskbar = e.target.closest('div.task-bar')
        mainSection.removeChild(clearTaskbar)
        form.reset()
    }
})
