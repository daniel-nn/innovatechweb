const openButton1 = document.getElementById('open-button1');
const openButton2 = document.getElementById('open-button2');
const openButton3 = document.getElementById('open-button3');
const openButton4 = document.getElementById('open-button4');
const openButton5 = document.getElementById('open-button5');
const openButton6 = document.getElementById('open-button6');
const openButton7 = document.getElementById('open-button7');
const openButton8 = document.getElementById('open-button8');
const openButton9 = document.getElementById('open-button9');
const openButton10 = document.getElementById('open-button10');
const windowBackground1 = document.getElementById('window-background-1');
const windowBackground2 = document.getElementById('window-background-2');
const windowBackground3 = document.getElementById('window-background-3');
const windowBackground4 = document.getElementById('window-background-4');
const windowBackground5 = document.getElementById('window-background-5');
const windowBackground6 = document.getElementById('window-background-6');
const windowBackground7 = document.getElementById('window-background-7');
const windowBackground8 = document.getElementById('window-background-8');
const windowBackground9 = document.getElementById('window-background-9');
const windowBackground10 = document.getElementById('window-background-10');
const elementos = document.getElementsByClassName('window-background');
const closeButtons = document.getElementsByClassName('close-button');

const windowContainer = document.getElementById('window-container');

const openModal1 = () => {
    windowBackground1.style.display = 'flex';
}
const openModal2 = () => {
    windowBackground2.style.display = 'flex';
}
const openModal3 = () => {
    windowBackground3.style.display = 'flex';
}
const openModal4 = () => {
    windowBackground4.style.display = 'flex';
}
const openModal5 = () => {
    windowBackground5.style.display = 'flex';
}
const openModal6 = () => {
    windowBackground6.style.display = 'flex';
}
const openModal7 = () => {
    windowBackground7.style.display = 'flex';
}
const openModal8 = () => {
    windowBackground8.style.display = 'flex';
}
const openModal9 = () => {
    windowBackground9.style.display = 'flex';
}
const openModal10 = () => {
    windowBackground10.style.display = 'flex';
}

//   windowContainer.classList.add('close');
//   setTimeout(() => {
//     windowContainer.classList.remove('close');
//     windowBackground.style.display = 'none';
//   }, 1000);
    
const closeWindow = () => {
    for (const element of elementos) {
        element.style.display = 'none'
    }
};

for (let i = 0; i < closeButtons.length; i++) {
    elementos[i].addEventListener('click', closeWindow)
}
  
// windowBackground.addEventListener('click', (e) => {
//   if (e.target === windowBackground) {
//     closeWindow();
//   }
// });

if (window.location.pathname === '/about-us-es.html') {
    console.log('se muestra la ventana en español')
    openButton1.addEventListener('click', openModal1);
    openButton2.addEventListener('click', openModal2);
    openButton3.addEventListener('click', openModal3);
    openButton4.addEventListener('click', openModal4);
    openButton5.addEventListener('click', openModal5);
} else if (window.location.pathname === './innovatechweb/about-us.html') {
    console.log('se muestra la ventana ingles')
    openButton6.addEventListener('click', openModal6);
    openButton7.addEventListener('click', openModal7);
    openButton8.addEventListener('click', openModal8);
    openButton9.addEventListener('click', openModal9);
    openButton10.addEventListener('click', openModal10);

}
