const additembtn = document.getElementById("addItem");
const buttontext = additembtn.innerText;
const addItemText = document.getElementById("addText");
const Displayitem = document.getElementById("display");
let Edit = null;

let items = [];


let strobj = localStorage.getItem("user");
if(strobj !=null){
items = JSON.parse(strobj);
}
Displayinfo();


$(additembtn).click(function(){
    const name = addItemText.value;
    if(Edit != null){
      items.splice(Edit,1,{'name' : name} );
      Edit = null;
    }else{
       
        items.push({'name' : name});  
    }

 
    autoSave(items);
    addItemText.value = " ";
    additembtn.innerText = buttontext;

});



function autoSave(items){
    let str =JSON.stringify(items);
    localStorage.setItem("user", str);
     Displayinfo();
};



function Displayinfo(){
    let statement = '';
    items.forEach((user,i) => {
    statement += `<tr>
                   <th>${i+1}</th>
                   <td>${user.name}</td>
                  <td><i class=" btn btn-primary fa-solid fa-user-pen" onclick ='edit(${i})' ></i>    <i class=" btn btn-danger fa-solid fa-trash" onclick = 'delet(${i})' ></i></td>
                 </tr>`;
    
     } );
     Displayitem.innerHTML = statement;
}

 

function edit(id) {
    Edit = id;
    addItemText.value = items[id].name;
    additembtn.innerText = 'Save Changes';
 }



function delet(id){
    items.splice(id,1)
    autoSave(items);
    Displayinfo();
};
