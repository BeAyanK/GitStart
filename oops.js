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

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

var input = document.querySelector('input');
input.value = 'Item 5';

var submit = document.querySelector('input[type="submit"]');
submit.value = "Done";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';

var lastItem = document.querySelector('.list-group-item:last-child');
lastItem.style.color = 'green';

var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
thirdItem.style.color = 'blue';

var secondItem = document.querySelector('.list-group-item:nth-child(2)');
secondItem.style.color = 'coral';

secondItem.style.backgroundColor = 'green';
thirdItem.style.display = 'none';


