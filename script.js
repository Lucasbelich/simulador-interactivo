// Tienda de video-juegos
// 1) Bienvenida al cliente
// 2) Seleccion del video-juegos
// 3) Informar al cliente cuanto debe abonar
// 4) cobrar video-juego

let cartView = ``;
let cost = 0;

const juego1 = {
  nombre: `Grand Theft Auto 5`,
  precio: 5000,
};
const juego2 = {
  nombre: `FIFA 22`,
  precio: 9000,
};
const juego3 = {
  nombre: `Call of Duty MW`,
  precio: 3000,
};
const juego4 = {
  nombre: `Forza Horizon 5`,
  precio: 10000,
};
const juego5 = {
  nombre: `Battlefield 2042`,
  precio: 11000,
};

const juegos = [juego1, juego2, juego3, juego4, juego5];

const welcome = () => {
  let name = prompt(`Ingrese su nombre`);
  alert(`Bienvenido/a ${name}`);
};

const userGameSelector = () => {
  let gameNum;

  //Utilizacion de forEach para generar dinamicamente el texto de entrada

  let prompText = "Ingrese el numero correspondiente al juego a comprar.\n";
  juegos.forEach((juego, i) => {
    prompText += `${i + 1}) ${juego.nombre}\n`;
  });
  
  do {
      gameNum = parseInt(promp(prompText))
    /* gameNum = parseInt(
      prompt(
        `Ingrese el número correspondiente al juego a comprar\n 1) Grand Theft Auto 5\n 2) FIFA 22\n 3) Call of Duty MW\n 4) Forza Horizon 5\n 5) Battlefield 2042`
      )
    ); */
  } while (gameNum < 1 || gameNum > 5 || isNaN(gameNum));

  let gameSelected = juegos[gameNum - 1];

  /* switch (gameNum) 
        case 1:
            gameSelected = `Grand Theft Auto 5`
            break
        case 2:
            gameSelected = `FIFA 22`
            break
        case 3:
            gameSelected = `Call of Duty MW`
            break
        case 4:
            gameSelected = `Forza Horizon 5`
            break
        case 5:
            gameSelected = `Battlefield 2042`
            break
    } */

  return gameSelected;
};

/* const priceCalc = (gameSelected) => {
   /*  if (gameSelected === `Grand Theft Auto 5`) 
            return 5000
        else if (gameSelected === `FIFA 22`)
            return 9000
        else if (gameSelected === `Call of Duty MW`)
            return 3000
        else if (gameSelected === `Forza Horizon 5`)
            return 10000
        else
            return 11000 
    switch (gameSelected){
        case `Grand Theft Auto 5`:
            return 5000
            
        case `FIFA 22`:
            return 9000
            
        case `Call of Duty MW`:
            return 3000
            
        case `Forza Horizon 5`:
            return 10000
        default:
            return 11000

    } 
    
} */

//Desestructuracion de objeto
const cart = ({ nombre, precio }) => {
  cartView += alert(`Juego: ${nombre}\nvalor: $${precio}`);
  cost += precio;
};

const payout = (gameSelected) => {
  let pay = parseInt(
    prompt(
      `El monto a pagar es de $${gameSelected.precio}\nIngrese con cuanto realizará el pago`
    )
  );
  if (isNaN(pay)) {
    alert(`Ingresó un caracter no valido`);
    payout(gameSelected);
  } else if (pay > cost) {
    alert(`Su vuelto es $${pay - cost}\nGracias por su compra!`);
  } else if (pay === cost) {
    alert(`Gracias por su compra!`);
  } else {
    alert(`No le alcanza!`);
    payout(gameSelected);
  }
};

welcome();
let gameSelected = userGameSelector();
cart(gameSelected);
payout(gameSelected);
