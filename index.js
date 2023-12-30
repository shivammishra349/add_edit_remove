function project(event){
    event.preventDefault()
    let number=document.getElementById('num').value
   let item=document.getElementById('expance-name').value;
   let list=document.getElementById('expence').value
   let obj={
    number:number,
    list:list,
    name:item
    
   }
   axios.post("https://crudcrud.com/api/cbd93a6cd6544a79b5f71a949da42b39/AppoinmentApp",obj)
    .then((res)=>{
        showUserOnScreen(res.data)  
        console.log(res.data)
    })
    .then((err)=>{
        console.log(err)
    })
   //localStorage.setItem(number,JSON.stringify(obj));
   //showuser(obj)
}
function showuser(obj){
    let parent=document.getElementById('listOfItem');
    let li=document.createElement('li');
    li.textContent=obj.number+" - "+ obj.list+ " - "+obj.name;
    //parent.appendChild(li);

    let deletebtn=document.createElement('input');
    deletebtn.type="button";
    deletebtn.value="delete";
    li.appendChild(deletebtn);
    parent.appendChild(li)

    deletebtn.onclick=()=>{
        localStorage.removeItem(obj.number);
        parent.removeChild(li)
    }


    let editbtn=document.createElement('input');
    editbtn.type="button";
    editbtn.value="edit"
    li.appendChild(editbtn);
    parent.appendChild(li)


    editbtn.onclick=()=>{
        localStorage.removeItem(obj.number);
        parent.removeChild(li);

        document.getElementById('num').value=obj.number;
        document.getElementById('expance-name').value=obj.name;
        document.getElementById('expence').value=obj.list
    }

}
