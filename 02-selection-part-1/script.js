// DOM SELECTION teridiri dari :
// getElementbyId() = element
// getElementsbyTagName() = html collection
// getElementsbyClassName() = html collection
// querySelector() = element
// querySelectorAll() = nodelist


// pembahasan DOM selcetion part 1

// getElementbyId() = element
// getElementsbyTagName() = html collection
// getElementsbyClassName() = html collection



// getElementbyId() mengembalikan element
const judul = document.getElementById('judul');
// manipulasi
judul.style.color = 'blue';
judul.style.backgroundColor = 'green';
judul.innerHTML = 'Mohammad Auliya Ihsani';


// meneyeleksi dengan document.getElementsByTagName() dan mengembalikan HTMLcollections
const p = document.getElementsByTagName('p');

for (let i = 0; i < p.length; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = ' 50px';

// document.getElementsByClassName() mengembalikan HTMLcollections

const p1 = document.getElementsByClassName('p1');
p1[0].innerHTML =  'ini di ubah melalui javascript';


















