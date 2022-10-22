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
// //const userList = document.querySelector('#users');

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

console.log(document.domain);
console.log(document.URL);
console.log(document.title);
// document.title = 123;
console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.all[20].textContent);
//document.all[20].textContent = "Hello";
console.log(document.all[20].textContent);
console.log(document.forms);
console.log(document.links);
console.log(document.images);
var headerTitle = document.getElementById('main-header');
// headerTitle.textContent = 'Demo Title';
console.log(headerTitle.textContent);

headerTitle.style.border = 'solid 2px #000';

var title = document.all[14];
console.log(title.textContent);
title.style.color = 'green';
title.style.fontWeight = 'bold';

var items = document.getElementsByClassName('list-group-item');
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style.fontWeight = 'bold';
items[1].style.backgroundColor = 'yellow';

for (var i=0; i<items.length;i++){
    items[i].style.backgroundColor = 'lightgray';
}

items[2].style.backgroundColor = 'green';
for (var i=0; i<items.length;i++){
    items[i].style.color = 'bold';
}