let unesecondeDeg = 6; // 360/60
let uneminuteDeg = 6; //360/60
let uneheureDeg = 30; //360/12

const PA = document.querySelector('.petiteaiguille');
const GA = document.querySelector('.grandeaiguille');
const TT = document.querySelector('.trotteuse');

function afficheHeure(){
    let dateDuJour = new Date();
    let heures = dateDuJour.getHours(); 
    let minutes = dateDuJour.getMinutes();
    let secondes = dateDuJour.getSeconds();
    let angleHeures = uneheureDeg * heures;
    let angleMinutes = uneminuteDeg * minutes;
    let angleSecondes = unesecondeDeg * secondes;
   

    PA.style.transform = `translate3d(-50%,-50%,0) rotateZ(${angleHeures}deg)`;
    GA.style.transform = `translate3d(-50%,-50%,0) rotateZ(${angleMinutes}deg)`;
    TT.style.transform = `translate3d(-50%,-50%,0) rotateZ(${angleSecondes}deg)`;
    
}; 
afficheHeure();
window.setInterval(afficheHeure, 1000)


     
    
  
  



