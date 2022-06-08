let paragraphs = document.querySelectorAll("p");

  console.log("Si es P > ", paragraphs)

let barraColor = document.querySelector('hr');

  console.log("Un solo div", barraColor);

  //example >: attributeStyleMap.append('background-image', 'linear-gradient(180deg, blue, black');
  

 //menus.addEventListener('mouseenter', menuHover => (menus.style.backgroundColor = 'white')  );

let menus_Nav = document.querySelector("ul");
let menus_h1 = document.querySelector("h1");

let menusNavLi = document.querySelectorAll(".menu");
//
console.log("menusNavLi consula li : " + menusNavLi[0] + HTMLUListElement)
//console.log("menusNavLi consula li : " + console.log("menusNavLi consula li : "  + Array.from(document.querySelectorAll('[p]'));

 // for para li
for (let i = 0; i < menusNavLi.length; i++) {
  menusNavLi[i].addEventListener('mouseenter', liColor => (menusNavLi[i].style.backgroundColor = "orange")); 
  menusNavLi[i].addEventListener('mouseleave', liColor => (menusNavLi[i].style.backgroundColor = "")); 

}

// forEach recorre li
//menusNavLi.forEach((menusNavLi) => menusNavLi.style.backgroundColor = "yellow");

//menusNavLi.addEventListener('click', menuHov);
/*
function menuHov() {
  for (let i = 0; i < menusNavLi.length; i++) {
    menusNavLi[i].style.backgroundColor = "red"; 
  }

};
*/




 
 console.log('los menus Nav > ' + menus_Nav);
 
menus_Nav.addEventListener('mouseenter', _colorNav => (menus_Nav.style.backgroundColor = 'blue', menus_Nav.style.borderRadius = '10% 10% 40% 80%' ));

menus_Nav.addEventListener('mouseleave', _colorNav => (menus_Nav.style.backgroundColor = ''));





 //menus_Nav.style.backgroundColor = "orange";
 
  


//barraColor.style.backgroundColor = 'orange';
  barraColor.style.border = '2px solid green';

 // console.log(paragraphs);
  
  for(let selector of paragraphs) {
      selector.style.color = 'blue';
  }





  
 //   barra.selector.style.color = 'green' ;
  //barra.selector.style.size = '25%';

//order: 10px solid green;


  barraColor.addEventListener('mouseenter', cambioHr => (barraColor.style.border = '8px solid orange'));
//barraColor.removeEventListener('mouseenter', cambioHr);

  barraColor.addEventListener('mouseleave', cambioHr => (barraColor.style.border = '2px solid blue'));

//con funcion flecha cambiar color barra
/*
barraColor.addEventListener ('mouseleave', cambioHr => {
    barraColor.style.border = '4px solid green'
} );
*/
//

///// crear un escuchador
//document.getElementById("myDIV").addEventListener("mousemove", myFunction);
//borrar un escuchador
//document.getElementById("myDIV").removeEventListener("mousemove", myFunction);


//cambio del menu con hover

//sonido en H1
/*

menus_h1.addEventListener("mouseenter",play => {
  let audio = new  Audio('click_click.mp3'); // Audio('http://www.sonidosmp3gratis.com/sounds/ringtones-iphone-8-plus.mp3');
  audio.currentTime = 0;
  audio.play();
  //audio.pause();
  
} );

*/
//menus_h1.addEventListener('mouseleave', pause => (console.log("puaser :>") + menus_h1.pause()  ));
// => {
  //menus_h1.classList.toggle();
  //let audio = new  Audio('click_click.mp3');   //('http://www.sonidosmp3gratis.com/sounds/ringtones-iphone-8-plus.mp3');
 // menus_h1.pause();
//} );

//###################################################
// nuemro aleatorio
//
//let aleatorioRandom = (Math.floor(Math.random() * 10));

//selector strong

//let numaleatorio = document.querySelector("#aleatorioran").innerHTML = aleatorioRandom;

let numAleatorio = document.querySelector("#botonRandom");

let numSpan = document.querySelector("#aleatorioRan");

console.log("io salida span >>>: " + numAleatorio + numSpan)

console.log(numAleatorio);
console.log(numSpan);

//console.log 
//console.log("Numero aleatorio >>> " + aleatorioRandom);

//salida click

//document.querySelector("#aleatorioran").innerHTML = aleatorioRandom;
//

// funciona pero no actualiza.
//numAleatorio.addEventListener('click', numR => ( numSpan.innerHTML = (Math.floor(Math.random() * 10)) ));

// Utiliza una funcion random para que al dar click funcione y actualice con el boton el span.
//
numAleatorio.addEventListener('click', numR => ( numSpan.innerHTML = "Random 1 a 10: " + "<br>" + "<br>"  + eventoRandom() ));

function eventoRandom () {
  return (Math.floor(Math.random() * 10));

}

//numAleatorio.addEventListener('mouse', numR => ( numSpan.innerHTML = eventoRandom()  ));
//numAleatorio.addEventListener('mouseleave', numR => (numSpan.innerHTML = eventoRandom()  ));


/*
for(let i = 0; i < 10; i++) {
  console.log(aleatorio);
  document.querySelector("#aleatorio").innerHTML = aleatorio);
  
}
*/
/*
for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

*/



