// manipulasi node meliputi beberapa method diantaranya adalah
// document.createElement()
// document.createTextNode()
// node.appenChild()
// node.insertBefore()
// parentNode.removeChild()
// parentNode.replaceChild()



// node.appenChild()
// buat element baru
const pBaru = document.createElement('p');
const teksPBAru = document.createTextNode('paragraf baru ini dibuat melalui javascript');
// simpan tulisan ke dalam paragraf
pBaru.appendChild(teksPBAru);
// simpan pBaru di akhir section A
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



// node.insertBefore()
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('item baru');
liBaru.appendChild(teksLiBaru);
const ul = document.querySelector('section ul');
                                    // seleksi ul dan li menggunakan psudo class pada css
const li2 = document.querySelector('section#b ul li:nth-child(2)');
// menyimpan sebelum li2
ul.insertBefore(liBaru, li2 );

// parentNode.removeChild()
// menghapus element link
const link = document.getElementsByTagName('a')[0];
 sectionA.removeChild(link);


// parentNode.replaceChild()
// mengganti element

const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('judul baru!');

h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);


// element yg dirubah
pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';
































