
window.addEventListener('DOMContentLoaded', ()=>{
    const submit = document.getElementById('send')
    const textInput = document.getElementById('textInput');
    const list = document.getElementById('list');

    submit.addEventListener('click', () =>{
        if(textInput.value == ' '){
            return
        }
        var btn = document.createElement('button');
        var btnCancel = document.createElement('button');
        var listElement = document.createElement('li');
        listElement.setAttribute('class', 'tarefas');
        listElement.appendChild(document.createTextNode(textInput.value))
    
        //cria botão concluido
        btn.setAttribute('class', 'button');
        btn.innerHTML = 'Concluido';
        listElement.appendChild(btn)
        //cria botão remover
        btnCancel.setAttribute('class', 'button');
        btnCancel.innerHTML = 'Remover';
        listElement.appendChild(btnCancel)
        
            
        list.appendChild(listElement)
        
        textInput.value = ' '

        btnCancel.addEventListener('click', () =>{
            list.removeChild(listElement)
         })

         btn.addEventListener('click', () =>{
             if(listElement.style.textDecorationLine == 'line-through'){
                listElement.style.textDecorationLine = "none";
                listElement.style.opacity = "1"
             }else {
                listElement.style.textDecorationLine = 'line-through';
                listElement.style.opacity = "0.5"
             }

         })
    })
    
    

})
