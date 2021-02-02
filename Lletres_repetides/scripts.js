//Defenim funció global per reutilitzar en diferents  exercicis
function clearString() {
    const myName= "Jordi Fuentes Leiva"
    return myName.replace(/ /g,"").split("");
}

//Exercici 1
function showCharacter() {
    //Iprimim les dades
   console.log(clearString());
}

//Exercici 2
function charterType () {
    
    //Recuperem les dades
    myNameArray = clearString();
    
    //Fem bucle a les dades recuperades
    myNameArray.forEach(findCharter);

    // Definim funcio per verificar cada caracter
    function findCharter(element) {
        //Definim expressions regulars per clasificar cada tipus de lletra
        let expvoc = new RegExp("^[aeiouAEIOUäÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙ]");
        let expcon = new RegExp("^[a-zA-Z]");
        let expnum = new RegExp("^[0-9]");

        //Apliquem condicions
        if(element.match(expvoc)) {
            console.log('He trobat la VOCAL=>', element);
        } else if (element.match(expcon)){
            console.log("He trobat la CONSONTANT=>", element);
        } else if (element.match(expnum)){
            console.log("Els noms de persones no contenen el número=>", element)
        }
    }
}

//Exercici 3
function saveArray() {

    //Recuperem les dades del nom
    const nameArray = clearString();
    //Declarem array biut
    const repited ={};
    
    //Apliquem el mètode map() per recorrer les dades
    nameArray.map(findCharter);
      
        function findCharter(elem) {
            repited[elem] = (repited[elem] || 0) + 1;
        }

    console.log('test map =>',repited);
}


//Exercici 4
function concatArray () {

    //Definim les dades
    const name = ("Jordi").split("");
    const surename = ("Fuentes").split("");

    //Definim variable i apliquem el mètode concat
    fullname = name.concat(' ', surename);

    //Pintem per consola el resultat
    console.log("Exercici 4 =>", fullname);
}

/*******************************************
 *********   Nivell 2 **********************
 ******************************************/
 
function getArray() {

    let str = 'Una dirección de correo electrónico es la dirección que utiliza para recibir y enviar correos electrónicos. Se muestra a los destinatarios de sus correos electrónicos para que sepan quién le envió un correo electrónico. Cada dirección de correo electrónico sólo se puede asignar una vez en todo el mundo y, por lo tanto, está disponible exclusivamente para usted. No puede cambiar las direcciones de correo electrónico, pero puede eliminarlas en cualquier momento. Una dirección de correo electrónico consiste en el signo @ (arroba), el nombre de usuario delante y el dominio detrás, por ejemplo, nombre-de-usuario@ionos.es: La parte del dominio depende del dominio bajo el cual se crea la dirección de correo electrónico: en nuestro ejemplo es ionos.es. Esta información varía de proveedor a proveedor, por lo que una parte del dominio también puede ser gmail.com o gmx.es si utiliza una dirección de correo electrónico de estos proveedores. Si ha registrado su propio dominio, por ejemplo, www.el-nombre-de-sus-sueños.es, las direcciones de correo electrónico que configura para el dominio lo tienen como parte del dominio (nombre-de-usuario@el-nombre-de-sus-sueños.es o nombre-de-usuario@el-nombre-de-sus-sueños.ES). El nombre de usuario es la parte de una dirección de correo electrónico que puede seleccionar libremente en la medida de lo posible. Puede, por ejemplo, utilizar su propio nombre o el nombre o departamento de una empresa. Si utiliza una dirección de correo electrónico con un proveedor de correo como gmail.com o gmx.es, es posible que la combinación con la parte del dominio deseada ya esté registrada. En este caso, deberá considerar alternativas para el nombre de usuario de su dirección de correo electrónico. Si utiliza su propio dominio, estas restricciones no se aplican porque sólo usted puede crear direcciones de correo electrónico que coincidan con su propio dominio. En resumen, nombre-de-usuario@ionos.es es un email';

    //Definim expressió regular
    let regexp = /([a-zA-Z0-9-_.]+@[a-zA-Z0-9-_.]+)/g;
    //Apliquem al text
    let resultado = str.match(regexp);
    
    const newArray= [];
    const myObject = {};

        resultado.forEach(element => {
        //Comporovem si el valor existeis a l'objecte
        if (!(element in myObject)) {
          //Si no exixteis, afegim el valor a l'array final
          myObject[element] = true
          newArray.push(element);
        }
      });

      console.log(newArray);
    }


