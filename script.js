let insert = document.getElementById('insert')


document.addEventListener('keydown',(event)=> {

    console.log(event.keyCode)
    insert.innerHTML = `
    <div class="key">
    ${event.key === '' ? 'Space': event.key}
    <small>EVENT.KEY</small>
    </div>
    <div class="key">
    ${event.keyCode}
    <small>EVENT.KEYCODE</small>
    </div>
    <div class="key">
    ${event.code}
    <small>EVENT.CODE</small>
    </div>
    `
})