let myInput = document.getElementById('input1');
let add = document.querySelector('.task');


add.addEventListener('click', createData);
function createData() {
    let listDiv = document.querySelector('.list');

    let mydiv = document.createElement('div');
    listDiv.appendChild(mydiv)
    mydiv.classList.add('data');

    let p = document.createElement('input');
    p.setAttribute("type", "text");
    p.classList.add("input2");
    p.setAttribute("readonly", "")
    // p.toggleAttribute("readonly", "")

    console.log(myInput);
    p.value = myInput.value;
    myInput.value = "";
    mydiv.appendChild(p);

    let list_btns = document.createElement('div');
    mydiv.appendChild(list_btns);
    list_btns.classList.add('list-btns')

    let icon1 = document.createElement('i');
    let icon2 = document.createElement('i');
    let icon3 = document.createElement('i');

    list_btns.appendChild(icon1)
    list_btns.appendChild(icon2)
    list_btns.appendChild(icon3)

    icon1.classList.add('fa-solid');
    icon2.classList.add('fa-solid');
    icon3.classList.add('fa-solid');

    icon1.classList.add('fa-pen');
    icon2.classList.add('fa-circle-check');
    icon3.classList.add('fa-trash');

    let trash = mydiv.querySelector('.fa-trash');
    trash.addEventListener('click', removerr);
    function removerr() {
        
    
        let listDiv = document.querySelector('.list');
    
        listDiv.appendChild(mydiv);
    
        mydiv.appendChild(p);
    
        mydiv.appendChild(list_btns);
    
        list_btns.appendChild(icon1)
        list_btns.appendChild(icon2)
        list_btns.appendChild(icon3)
    
        mydiv.remove();
        p.remove();
        list_btns.remove();
        icon1.remove();
    }

    let edit = mydiv.querySelector('.fa-pen');
    edit.addEventListener('click', editer)
    function editer() {
        p.classList.toggle("input2-style")
        p.readOnly = !p.readOnly;
    }

    let check = mydiv.querySelector('.fa-circle-check');
    check.addEventListener('click', checker)
    function checker() {
        icon1.classList.toggle("fa-pen")
        icon2.classList.toggle('fa-circle-check');
        icon2.classList.toggle('fa-rotate-left');
        mydiv.classList.toggle('checked')
    }

}