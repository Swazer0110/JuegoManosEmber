import Component from '@glimmer/component';
import { action } from '@ember/object';
var mano = Math.floor(Math.random() * 2);

export default class Contenedor extends Component {
  @action
  showHand(id) {
    var h = id - 1;
    if (mano != h) {
      document.getElementById('Jugador').innerHTML =
        Number(document.getElementById('Jugador').innerHTML) + 1;
    } else {
      document.getElementById('IA').innerHTML =
        Number(document.getElementById('IA').innerHTML) + 1;
    }
    if (mano == 0) {
      document.getElementById('1').src = 'assets/left.png';
      document.getElementById('2').src = 'assets/llave.png';
    } else if (mano == 1) {
      document.getElementById('1').src = 'assets/llave.png';
      document.getElementById('2').src = 'assets/right.png';
    }
    mano = Math.floor(Math.random() * 2);
    setTimeout(function () {
      document.getElementById('1').src = 'assets/closed1.png';
      document.getElementById('2').src = 'assets/closed2.png';
    }, 2000);
  }

  pista(){
    if(mano==0){
        var str='derecha';
    }
    else{
        var str='izquierda';
    }
    alert("La llave esta en la mano "+str);
  }

  reiniciar() {
    document.getElementById('Jugador').innerHTML = '0';
    document.getElementById('IA').innerHTML = '0';
  }
}
