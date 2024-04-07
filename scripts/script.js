var menuAside = document.querySelector("aside");
var menuButtonOpen = document.querySelector("nav button");
var menuButtonSluit = document.querySelector("aside button");
var main = document.querySelector("main");
var nav = document.querySelector("nav");
var logo = document.querySelector("header a img");


var foto1 = document.querySelector(".insurance section:nth-of-type(5) img:first-of-type")
var foto2 = document.querySelector(".insurance section:nth-of-type(5) img:nth-of-type(2)")
var foto3 = document.querySelector(".insurance section:nth-of-type(5) img:nth-of-type(3)")
var foto4 = document.querySelector(".insurance section:nth-of-type(5) img:nth-of-type(4)")

var knop1 = document.querySelector(".insurance section:nth-of-type(6) a:first-of-type");
var knop2 = document.querySelector(".insurance section:nth-of-type(6) a:nth-of-type(2)");
var knop3 = document.querySelector(".insurance section:nth-of-type(6) a:nth-of-type(3)");
var knop4 = document.querySelector(".insurance section:nth-of-type(6) a:nth-of-type(4)");


var vid1 = document.querySelector(".insurance section:nth-of-type(8) video:first-of-type")
var vid2 = document.querySelector(".insurance section:nth-of-type(8) video:nth-of-type(2)")
var vid3 = document.querySelector(".insurance section:nth-of-type(8) video:nth-of-type(3)")
var vid4 = document.querySelector(".insurance section:nth-of-type(8) video:nth-of-type(4)")

var knop1vid = document.querySelector(".insurance section:nth-of-type(9) a:first-of-type");
var knop2vid = document.querySelector(".insurance section:nth-of-type(9) a:nth-of-type(2)");
var knop3vid = document.querySelector(".insurance section:nth-of-type(9) a:nth-of-type(3)");
var knop4vid = document.querySelector(".insurance section:nth-of-type(9)  a:nth-of-type(4)");


function MenuOpenen() {
  menuAside.classList.add("show");//classlists toevoegen als het nu geopend wordt
  main.classList.add("blur");
  nav.classList.add("blur");
  logo.classList.add("blur");
} 
menuButtonOpen.addEventListener("click", MenuOpenen);


function MenuSluiten() { //classlists verwijderen als het nu geopend wordt
  menuAside.classList.remove("show"); 
  main.classList.remove("blur");
  nav.classList.remove("blur");
  logo.classList.remove("blur");
} 
main.addEventListener("click", MenuSluiten);

function MenuSluiten() {  
  menuAside.classList.remove("show");
  main.classList.remove("blur");
  nav.classList.remove("blur");
  logo.classList.remove("blur");
} 
menuButtonSluit.addEventListener("click", MenuSluiten);


function eersteFoto(){  //als er op de knop geklikt wordt gaat de foto waarbij de button hoort op display block en de rest op display none, verder wordt er nog een classlist aangemaakt voor de opacity.
  foto1.style.display = "block";
  foto2.style.display = "none";
  foto3.style.display = "none";
  foto4.style.display = "none";
  knop1.classList.add("opacity");
  knop2.classList.remove("opacity");
  knop3.classList.remove("opacity");
  knop4.classList.remove("opacity");
}
knop1.addEventListener("click", eersteFoto);

function tweedeFoto(){
  foto1.style.display = "none";
  foto2.style.display = "block";
  foto3.style.display = "none";
  foto4.style.display = "none";
  knop1.classList.remove("opacity");
  knop2.classList.add("opacity");
  knop3.classList.remove("opacity");
  knop4.classList.remove("opacity");

}
knop2.addEventListener("click", tweedeFoto);


function derdeFoto(){
  foto1.style.display = "none";
  foto2.style.display = "none";
  foto3.style.display = "block";
  foto4.style.display = "none";
  knop1.classList.remove("opacity");
  knop2.classList.remove("opacity");
  knop3.classList.add("opacity");
  knop4.classList.remove("opacity");
}knop3.addEventListener("click", derdeFoto);


function vierdeFoto(){
  foto1.style.display = "none";
  foto2.style.display = "none";
  foto3.style.display = "none";
  foto4.style.display = "block";
  knop1.classList.remove("opacity");
  knop2.classList.remove("opacity");
  knop3.classList.remove("opacity");
  knop4.classList.add("opacity");
}
knop4.addEventListener("click", vierdeFoto);


const myFunctions = [eersteFoto, tweedeFoto, derdeFoto, vierdeFoto,]; /*array met functions*/
let counter = 1; 
function runMyNextFunction() { 
  let func = myFunctions[counter]; /*de volgende functie wordt geselecteerd. MyFunctions = de array en counter zorgt er voor dat er steeds +1 wordt gedaan en zo het rijtje steeds langs gaat*/
  func(); /*voert de code uit*/

  counter += 1; /*updates the counter*/
  if (counter >= myFunctions.length) { /*als de counter groter of gelijk is het getal van de string*/
    counter = 0; 
  }
}
setInterval(runMyNextFunction, 5000);



      function eersteVid(){
        vid1.style.display = "block";
        vid2.style.display = "none";
        vid3.style.display = "none";
        vid4.style.display = "none";
        knop1vid.classList.add("opacity");
        knop2vid.classList.remove("opacity");
        knop3vid.classList.remove("opacity");
        knop4vid.classList.remove("opacity");
      }
      knop1vid.addEventListener("click", eersteVid);
      
      function tweedeVid(){
        vid1.style.display = "none";
        vid2.style.display = "block";
        vid3.style.display = "none";
        vid4.style.display = "none";
        knop1vid.classList.remove("opacity");
        knop2vid.classList.add("opacity");
        knop3vid.classList.remove("opacity");
        knop4vid.classList.remove("opacity");
      
      }
      knop2vid.addEventListener("click", tweedeVid);
      
      
      function derdeVid(){
        vid1.style.display = "none";
        vid2.style.display = "none";
        vid3.style.display = "block";
        vid4.style.display = "none";
        knop1vid.classList.remove("opacity");
        knop2vid.classList.remove("opacity");
        knop3vid.classList.add("opacity");
        knop4vid.classList.remove("opacity");
      }knop3vid.addEventListener("click", derdeVid);
      
      
      function vierdeVid(){
        vid1.style.display = "none";
        vid2.style.display = "none";
        vid3.style.display = "none";
        vid4.style.display = "block";
        knop1vid.classList.remove("opacity");
        knop2vid.classList.remove("opacity");
        knop3vid.classList.remove("opacity");
        knop4vid.classList.add("opacity");
      }
      knop4vid.addEventListener("click", vierdeVid);

      const myFunctionsVid = [eersteVid, tweedeVid, derdeVid, vierdeVid,];
      let counterVid = 1;
      function runMyNextFunctionVid() {
        let func2 = myFunctionsVid[counterVid];
        func2();
      
        counterVid += 1;
        if (counterVid >= myFunctions.length) {
          counterVid = 0;
        }
      }
      setInterval(runMyNextFunctionVid, 7000);
