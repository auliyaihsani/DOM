// menerapkan events ada dua cara yaitu
// - event handler ada 2 cara untuk menjalankan eventhandler melalui
// inlinehtml attribute dan element method
// new method
//-  addeventListener()

// event handler

// // inlinehtml attribute
// const p3 = document.querySelector('.p3');
// function ubahWarnaP3() {
//     p3.style.backgroundColor = 'lightblue';
// }

// // element method
// const p2 = document.querySelector('.p2');
// function ubahWarnaP2() {
//     p2.style.backgroundColor = 'red';
// }
// p2.onclick = ubahWarnaP2;

// event handler
// const p3 = document.querySelector('.p3');
// p3.onclick = function() {
//     p3.style.backgroundColor= "lightblue";
// }
// p3.onclick = fucntion () {
//     p3.style.color = "red";
// }

// addeventListener
const p3 = document.querySelector('.p3');
p3.addEventListener('click', function(){
    p3.style.backgroundColor = "lightblue";
});

p3.addEventListener('click', function (){
    p3.style.color = "red";
});













// events listener
// mencari p di dalam section b
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    // alert('ok');
    // mengambil parrent
    const ul = document.querySelector('section#b ul');
    // membuat element
    const liBaru = document.createElement('li');
    // rangkai dan simpan
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
});







































