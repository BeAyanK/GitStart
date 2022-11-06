// console.log(document.getElementById('my-form'));
// console.log(document.querySelector('.container'));

// console.log(document.querySelectorAll('.item'));
// console.log(document.getElementsByTagName('li'));
// console.log(document.getElementsByClassName('item'));

// const li = document.getElementsByTagName('li');
// li[0].innerText = 'Hello';
// li[0].style.color = 'green';
// li[1].style.color = 'yellow';

// li[1].innerText = 'Brad';
// li[2].innerHTML = '<h1>Hello</h1>';

// const items = document.querySelectorAll('.item');
// items.forEach((item) => item.style.background = 'cyan'); 

// const ul = document.querySelector('.items');
// ul.style.color = 'red';

// const btn = document.querySelector('.btn');
// btn.style.background = 'blue';

// const form = document.getElementById('my-form');
// form.style.background = 'pink';


// // btn.addEventListener('click', (e) => {
// //     e.preventDefault();
// //     document.querySelector('body').style.backgroundColor = '#ccc';
// // });

// // btn.addEventListener('mouseover', (e)=>{
// //     document.querySelector('.btn').style.background = 'black';
// // });
// // btn.addEventListener('mouseout', (e) => {
// //     document.querySelector('.btn').style.background = 'green';
// // });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
//const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);

// function onSubmit(e) {
//     e.preventDefault();

//     if (nameInput.value === '' || emailInput.value === '') {
       
//         msg.classList.add('error');
//         msg.innerHTML = 'Please enter all fields';

        
//         setTimeout(() => msg.remove(), 3000);
//     } 
//     else {
      
//         console.log(nameInput.value);
//         console.log(emailInput.value);
        
//         nameInput.value = '';
//         emailInput.value = '';
//     }

    
// }

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// // document.title = 123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all[20].textContent);
// //document.all[20].textContent = "Hello";
// console.log(document.all[20].textContent);
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);
// var headerTitle = document.getElementById('main-header');
// // headerTitle.textContent = 'Demo Title';
// console.log(headerTitle.textContent);

// headerTitle.style.border = 'solid 2px #000';

// var title = document.all[14];
// console.log(title.textContent);
// title.style.color = 'green';
// title.style.fontWeight = 'bold';

// var items = document.getElementsByClassName('list-group-item');
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// for (var i=0; i<items.length;i++){
//     items[i].style.backgroundColor = 'lightgray';
// }

// items[2].style.backgroundColor = 'green';
// for (var i=0; i<items.length;i++){
//     items[i].style.color = 'bold';
// }

// var li = document.getElementsByTagName('li');
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for (var i=0; i<li.length;i++){
//     li[i].style.backgroundColor = 'lightgray';
// }

// li[2].style.backgroundColor = 'green';
// for (var i=0; i<li.length;i++){
//     li[i].style.color = 'bold';
// }

// var classItem = document.getElementsByClassName('single-item');
// classItem[0].style.backgroundColor = 'yellow';

// var tagItem = document.getElementsByTagName('li');
// tagItem[4].style.fontWeight = 'bold';

// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Item 5';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = "Done";

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'green';

// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// secondItem.style.backgroundColor = 'green';
// thirdItem.style.display = 'none';

// var titles = document.querySelectorAll('.title');
// titles[1].innerText = "Hello";

// var item = document.querySelectorAll('.list-group-item');
// item[1].style.color = 'green';

// var odd = document.querySelectorAll('li:nth-child(odd)');

// for (var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = 'green';
// }

// //ParentNode & ParentElement:-
// var itemList = document.querySelector('#items');
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

// //ChildNodes and Children
// console.log(itemList.childNodes);

// console.log(itemList.children);
// itemList.children[0].style.color = 'blue';



// // FirstChild & FirstElementChild
// console.log(itemList.firstChild);

// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = "Hello";



// // LastChild & LastElementChild
// console.log(itemList.lastChild);

// console.log(itemList.lastElementChild);

// itemList.lastElementChild.textContent = "World";

// //NextSibling nad NextElementSibling
// var item = document.querySelector('.form-inline')
// console.log(item.nextSibling);

// console.log(item.nextElementSibling);


// //PreviousSibling & PreviousElementSibling
// console.log(item.previousSibling);

// console.log(item.previousElementSibling);
// item.previousElementSibling.style.color = 'green';

// //CreateElement
// var newDiv = document.createElement('div');
// //Add ClassName
// newDiv.className = 'hello';
// //Add ID
// newDiv.id = 'idHello';
// //Add Attributes
// newDiv.setAttribute('title','titleHello');
// //Create TextNode
// var newDivText = document.createTextNode('Hello World');
// //Add Text to Div
// newDiv.appendChild(newDivText);
// //
// var cont = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// cont.insertBefore(newDiv, h1);

// newDiv.style.fontSize = '36px';
// newDiv.style.fontWeight = 'bold';

//console.clear();


// var newItem = document.createElement('item-0');
// newItem.innerHTML='<li>Hello World</li>';
// newItem.setAttribute('class','list-group-item',);
//newItem.setAttribute('id','id-0',);
//newItem.setAttribute('title','itemTitle',);

//var newItemText = document.createTextNode('Hello World');

//newItem.appendChild(newItemText);

// var ul = document.querySelector('div #items');
// var li = document.querySelector('div li');

// ul.insertBefore(newItem, li);

// console.log(newItem);

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;
  var newDesc = document.getElementById('desc').value;

  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  //Edit Btn
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(editBtn);
    
    li.appendChild(document.createElement('br'));

    li.appendChild(document.createTextNode(newDesc));

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Description
var item = document.querySelector('#item');
item.setAttribute('placeholder', 'Item');

var desc = document.createElement('input');
desc.setAttribute('type','text');
desc.setAttribute('placeholder','Description');
desc.className = 'form-control mr-2';
desc.id = 'desc';

var form = document.querySelector('form');
var btn = document.querySelector('form .btn-dark')

form.insertBefore(desc,btn);

//Edit Button for each item
var items = document.getElementsByTagName('li');

for (var i=0;i<items.length;i++){
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-secondary btn-sm float-right edit';
    editBtn.appendChild(document.createTextNode('Edit'));
    items[i].insertAdjacentElement("beforeend", editBtn);
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get lis
  var items = itemList.getElementsByTagName('li');
  // Convert to an array
  Array.from(items).forEach(function(item){
    console.log(item);
    var itemName = item.firstChild.textContent;
    var itemDesc = item.lastChild.textContent;
    console.log(itemName, itemDesc);
    if((itemName.toLowerCase().indexOf(text) != -1) || (itemDesc.toLowerCase().indexOf(text) != -1)){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}
