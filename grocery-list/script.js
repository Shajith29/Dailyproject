const alert = document.querySelector('.alert');
const item = document.querySelector('input');
const submitBtn = document.querySelector('.submit-btn');
const form = document.querySelector('.grocery-form');
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list');
const clearBtn  = document.querySelector('.clear-btn')


//Edit option
let editFlag = false;
let editElement;
let editID = '';

//event listner to listen for the form submission and invoke the addItem function
form.addEventListener('submit',addItem);

//when clearBtn is pressed clearAllItem is invoked
clearBtn.addEventListener('click',clearAllItem)

//As soon as the page loads retrive item from the local storage

window.addEventListener('DOMContentLoaded',setuptItem)


function addItem(e){
    e.preventDefault();
    const value = item.value;

    // ID to identify the value in the list
    let id = new Date().getTime().toString();

    // Condition 1 to check if the  value user typed is to be added in the list
    //1. if the value is not equal to null and editflag is not equal to true
    
    if(value && !editFlag ){

        //call the create list function to create a list 
        createList(id,value)
        container.classList.add('show-container')
        displayAlert('Item is added to the list')
        addtoLocalStorage(id,value);
        setToDefault() 
    }

    //Condition 2 check if the value user entered is for editing 
    //1. if the value is not equal to null and the edit flag is set to true
    else if(value && editFlag === true){
        editElement.innerHTML = value;
        displayAlert('Item is Modified')
        editLocalStroage(editID,editElement.innerText);
        setToDefault();

    }

    //Condition to check the value is empty
    //1. if it is true diplay a alert message to the user
    else{
        displayAlert('Value is empty')
    }
    

}


                //***********FUNCTION USED IN THE PROGRAM************** */

//function to display the alert message at interval of 2 seconds

function displayAlert(text){
    alert.innerText = text;
    
    setTimeout(() => {
        alert.innerText = '';
    },2000)
}


// Function set everything to default

function setToDefault(){
    item.value = '';
    editFlag = false;
    editElement;
    editID = ''
    submitBtn.innerText = 'Submit'
}

// Function to clear all the items in the list

function clearAllItem(){
    const items = document.querySelectorAll('.grocery-items');
    items.forEach((item) => {
        list.removeChild(item);
    })

    container.classList.remove('show-container')
    displayAlert("All the items are removed from the list")
    localStorage.removeItem('list')
    setToDefault()
}


//function to create a list 

function createList(id,value){

    const element = document.createElement('article');
    element.classList.add('grocery-items');
    const attr = document.createAttribute('data-id');
    attr.value = id;
    element.setAttributeNode(attr);

    element.innerHTML = `<p class="title">${value}</p>
              <!--edit and delete btn-->
              <div class="btn-container">
                <button class="edit-btn">
                  <i class="fas fa-edit"></i>
                </button>

                <button class="delete-btn">
                  <i class="fas fa-trash"></i>
                </button> `

            //Setting functionality for Delete and Edit button in the list

            const deleteBtn = element.querySelector('.delete-btn');
            const editBtn = element.querySelector('.edit-btn');
            deleteBtn.addEventListener('click',deleteItem);
    
            editBtn.addEventListener('click',editItem)

        
            list.appendChild(element)
 


}


// Function to delete a single item from the list

function deleteItem(e) {
    const item = e.currentTarget.parentElement.parentElement;
    const id = item.dataset.id;

    const itemName = e.currentTarget.parentElement.previousElementSibling.innerText;

    list.removeChild(item);

    if(list.children.length === 0){
        container.classList.remove('show-container');
    }

    displayAlert(`${itemName} is deleted from the list`)
    setToDefault()
    removeFromLoacalStorage(id)

}

// Function to Edit the item from the list 

function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;

    // item => refers to input which we got from the user
    item.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.innerText = 'Edit';


}


// ************************* LOCAL STORAGE FUNCTIONS ***************** //




// function to get values from the local storage 

function getLocalStorage(){

    // checking if the any object named list is present in the local storage
    // if it is then parese it and store it in the arry
    // if not return an empty array;
    return localStorage.getItem('list') ? JSON.parse(localStorage.getItem('list'))
    : []
}


// function to add the items to the local storage
// It takes two parameter id and value
function addtoLocalStorage(id,value){
    const grocery = {id:id, value:value}
    let  items = getLocalStorage()
    console.log(items)
    items.push(grocery);
    localStorage.setItem('list',JSON.stringify(items));

}

//function to remove from the local storage

function removeFromLoacalStorage(id){

    let items = getLocalStorage()
    items = items.filter((item) => {
        if(item.id !== id){
            return item;
        }
    })

    console.log(item)

    localStorage.setItem('list',JSON.stringify(items));

}


//function to edit items in the local storage

function editLocalStroage(id,value){
    let items = getLocalStorage()
    items = items.map((item) => {
        if(item.id === id){
            item.value = value
        }

        return item;
    })

    localStorage.setItem('list',JSON.stringify(items))
}


// function to create list for the local storage items

function setuptItem(){
    let items = getLocalStorage();
    
    if(items.length > 0){
        items.forEach((item) => {
            createList(item.id,item.value)
        })

        container.classList.add('show-container')
    }
}
