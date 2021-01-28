
        //Exercici 1
        function showName() {

            console.log("Hola mundo");
        }

        //Exercici 2
        function showAlert() {

            alert("Jordi Fuentes");
        }

        //Exercici 3
        function varibleName(name, surename) {

            console.log(`El meu nom és ${name} ${surename}`);
        }

        //Exercici 4
        function plusNumber(num1, num2) {
            let numero1 = num1;
            let numero2 = num2;
            let resultado = numero1 + numero2;
            console.log(`La suma del número ${numero1} més el 
            ${numero2} és ${resultado}` );
        }

        //Exercici 5
        function examNote ( note) {
            if( note < 5) {
                alert(`L'exàmen està suspés amb un ${note}`);
            } else {
                alert(`Enhorabona has aprovat amb un ${note}`);
            }
        }

        //Exercici 6
        function replaceWords() {
            let phrase = "Tinc un cotxe de color verd"
            console.log(phrase.replace('verd', 'blau'));
            console.log(phrase.replace(new RegExp("o","g") ,"u"));
        }

        /*Exercici 7*/

        function objectList() {
            const objects = [ 'taula', 'cadira', 'ordinador', 'libreta' ];

            objects.forEach(getElemet);

            function getElemet(item, index) {
                console.log(`El element ${item} es a la posició ${index}`)
            }
        }

        /*Exercici 8 */
        
        function calculadora( operador, num1, num2) {
            let resultado;
            if (operador == 'suma'){
                resultado= num1 + num2;
                document.write( `El resultat de la suma de ${num1} més ${num2} és ${resultado}`);
            } else if (operador == 'resta') {
                resultado= num1 - num2;
                document.write( `El resultat de la resta del ${num1} menys ${num2} és ${resultado}`);
            } else if (operador == 'multiplicación' ) {
                resultado= num1 * num2;
                document.write( `El resultat de la multiplicació del ${num1} per ${num2} és ${resultado}`);    
            } else {
                document.write(`Operació no disponible`)
            }

            }
			function calcular () {
                calculadora('multiplicación',40,20);
            }

        //Nivell 2
        function calculadora2( operador, num1, num2) {
            let resultado;
            if (operador == 'suma'){
                resultado= num1 + num2;
                document.write( `El resultat de la suma de ${num1} més ${num2} és ${resultado}`);
            } else if (operador == 'resta') {
                resultado= num1 - num2;
                document.write( `El resultat de la resta del ${num1} menys ${num2} és ${resultado}`);
            } else if (operador == 'multiplicación' ) {
                resultado= num1 * num2;
                document.write( `El resultat de la multiplicació del ${num1} per ${num2} és ${resultado}`);    
            } else if( operador == "división" && num2>0){
                resultado= num1 / num2;
                document.write( `El resultat de la divisió de ${num1} entre ${num2} és ${resultado}`);
            } 
            else {
                document.write(`Operació no disponible`)
            }

            }
			function calcularNivell2 () {
                calculadora2('división',40,10);
            }

        //Nivell 3
            //Escoltem el botó de calcular
            document.querySelector('#calcular').addEventListener('click',() => {
                // Definim varianles i recollim valors del formulari
                const num1 = parseInt(document.querySelector('#numero1').value);
                const num2 = parseInt(document.querySelector('#numero2').value);
                const operacion = document.querySelector('#operacion').value;
                let resOperacion;
                    //Iniciem el bucle
                   if ( operacion == "sumar") {
                    resOperacion = num1 + num2;
                   } else if ( operacion == "restar") {
                    resOperacion = num1 - num2;  
                   } else if ( operacion == "multi" ) {
                    resOperacion = num1 * num2;  
                   } else if ( operacion == "divi" && num2>0 ) {
                    resOperacion = num1 / num2;  
                   } else {
                    resOperacion="Error";    
                   }
                   //Pintem a la pantalla el resultat
                document.querySelector('#resultado').innerHTML = resOperacion;
            });

