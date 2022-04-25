const h5= document.querySelector('h5')
const taskButton= document.querySelector('#task-button')
const form = document.querySelector('form')
const task = document.forms[0].elements[0]
const date = document.forms[0].elements[1]
const time = document.forms[0].elements[2]
const cleanButton = document.getElementById('clean')
const addButton = document.getElementById('add')
const mainSection= document.querySelector('div.main')
const body= document.querySelector('body')
let pending= document.querySelector('span#pending-value')
let completed= document.querySelector('span#completed-value')
let total= document.querySelector('span#total-value')
//const taskBar = document.querySelectorAll('div.task-bar')

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

    if (active && task.value.length>4 )
    {vibrateThings(cleanButton)
    return}
    else if (active) {
    active.classList.remove('active')}
})

const formSpan= document.getElementById('error') 
total.innerText=0 


form.addEventListener('submit',(e)=> {
    e.preventDefault()

    const taskValue= task.value
    const dateValue= date.value
    const timeValue=time.value
    const taskBar = document.querySelectorAll('div.task-bar')
    
    

    let error= []
    let d =new Date(date.value+ ' ' +time.value)

    const timer =()=>{
        let n = new Date()
        const timeleft =d.getTime() - n.getTime()
        
        const seconds = 1000;
        const minutes = seconds*60 ;
        const hours = minutes* 60;
        const days = hours *24; 
    
        const day =Math.floor(timeleft/days)
        const hour =Math.floor((timeleft%days)/hours)
        const minute =Math.floor((timeleft%hours)/minutes)
        const second =Math.floor((timeleft%minutes)/seconds);
        
       // document.querySelectorAll('span#timer').forEach(timer=>{timer.innerText = `${day} :${hour} :${minute} :${second}`})
        const spanner= document.createElement('span')
        spanner.innerText=  `${day} :${hour} :${minute} :${second}`

        return spanner.innerText
    }
    
    const timeFormat = d.toLocaleTimeString('en-GB',{
        hour:'numeric',
        minute:'numeric',
        hour12:true
    })

    if (taskBar.length>9){
        error.push(`You've reached the '10' limit, please complete pending tasks`)
        vibrateThings(formSpan)
        formSpan.innerText=error
        return
    }

    if (task.value.length>0&&date.value.length>0&&time.value.length>0){
    const div= document.createElement('div')
    mainSection.append(div)
    div.setAttribute('class','task-bar')
    div.innerHTML= 
    `<p class="tick">Check<input type="checkbox" id="tick"></p>
    <div class="task">
        <h3>${taskValue}</h3>
        <div class="spans">
            <span id="date">${d.toGMTString()}</span>
            <span id="time">${timeFormat}</span>
            <span id="timer"><i>timeleft: </i>${timer()}</span>
        </div>
    </div>
    <p class="clear">Clear</p>`

        total.innerText= document.querySelectorAll('div.task-bar').length
    
        document.querySelectorAll('input#tick').forEach(box=>{
        box.addEventListener('click',e=>{
           let tickedTask=  e.target.closest('div.task-bar')
           tickedTask.classList.toggle('ticked')
         
        })
    })
    
    // form.reset()
    return
    }
    else error.push(`all fields are required`)
         vibrateThings(formSpan)
         formSpan.innerText=error
         return
})


function vibrateThings(element){
    let interval= setInterval(()=>{
        element.classList.toggle('vibrator')
    },100)
    setTimeout(()=>clearInterval(interval),600) 
}

mainSection.addEventListener('click', e=>{
    
    const onClearbutton= e.target.matches('.clear')
    const onCheckbutton= e.target.matches('.tick')
    let clearTaskbar
    let checkTaskbar
    if (onClearbutton){
        clearTaskbar = e.target.closest('div.task-bar')
        mainSection.removeChild(clearTaskbar)
        let taskBarLength = document.querySelectorAll('div.task-bar').length
        total.innerText= taskBarLength
        form.reset()
        
    }
    if (onCheckbutton){
        checkTaskbar = e.target.closest('div.task-bar')
        checkTaskbar.classList.toggle('ticked')
        let taskBarLength = document.querySelectorAll('div.task-bar').length
        let tickedtotal= document.querySelectorAll('div.ticked').length
        completed.innerText= tickedtotal
        pending.innerText= taskBarLength - tickedtotal
      
    }
    return
})


    