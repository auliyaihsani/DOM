// DOM SELECTION teridiri dari :

// getElementbyId() = element
// getElementsbyTagName() = html collection
// getElementsbyClassName() = html collection
// querySelector() = element
// querySelectorAll() = nodelist


// pembahasan DOM selcetion part 2
// querySelector() = element
// querySelectorAll() = nodelist

// docyment.querySelector() menghasilkan element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// const p = document.querySelector('p');
// p.innerHTML = 'ini diubah melalui javascript';



// document.querySelectorAll() menghasilkan nodelist

const p = document.querySelectorAll('p');

for (let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}


// mengubah node root
// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor = 'lightblue';













