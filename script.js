const input = document.querySelector('#input');
const addbtn = document.getElementById('btn');
const list = document.getElementById('list');



let editmode = false;
let editli = null;

// console.log(input,addbtn,list)

//creating a funnction to add tasks

function add(){
    if(input.value.trim()=== ""){
        return alert("you need to write something")
    }
    if(editmode){
        editli.querySelector('p').innerHTML = input.value;
        addbtn.value = "Add";
        editmode = false;
        editli = null;
        input.value = ''
    }
    else{
        let li = document.createElement('li');
        let p = document.createElement('p');
        let editbtn = document.createElement('pre');
        let removebtn = document.createElement('pre');
        p.innerHTML = input.value;
        editbtn.innerHTML = "Edit";
        removebtn.innerHTML = "Remove";
        li.appendChild(p);
        li.appendChild(editbtn);
        li.appendChild(removebtn);
        list.append(li);
        input.value ="";

        editbtn.addEventListener('click',(e)=>{
            addbtn.value='Update';
            input.value = p.innerHTML;
            input.focus();
            editmode = true;
            editli = li;
        })
        removebtn.addEventListener('click',(e)=>{
            list.removeChild(li);
            if (editmode && editli === li) {
                // If the task being edited is removed, reset button text
                addbtn.value = "Add";
                editmode = false;
                editli = null;
            }
        })
    }
}

addbtn.addEventListener('click',add);