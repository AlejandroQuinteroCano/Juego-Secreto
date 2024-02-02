
    //Variables 
    let numeroSecreto = 6;
    let numeroUsuario = 0;
    let intentos =1;
    let maximosIntentos = 2;
//let palabraVeces = 'vez';
    // != es diferente igual 
    while (numeroUsuario  != numeroSecreto){
        numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

        console.log(numeroUsuario);
                /*
                Este codigo realiza la comparacion
                */
            if (numeroUsuario == numeroSecreto) {
                        // Acertamos, fue verdadera la condicion
                        // Otra forma de mostrar mensajes con la variable vez
                        //alert(`Acertaste, el numero es :${numeroUsuario}.
             //Lo realizaste en ${intentos} ${palabraVeces}`);
            alert(`Acertaste, el numero es :${numeroUsuario}.
            Lo realizaste en ${intentos} ${intentos ==1 ? 'vez' : 'veces' } `);
                        } else {
                        // La condicion no se cumplio
                        if  (numeroUsuario > numeroSecreto){
                            alert("El numero es menor ")
                        }else{
                            alert("El numero es mayor")
                        }
                        //incrementamos el numero d eintentos

                        //intentos = intentos +1;
                        //intentos+=;
                        
                        intentos++
                        
                        
                        palabraVeces = 'veces';

                        if (intentos > maximosIntentos) {
                             alert(`Llegaste al  numero intnetos maximo de ${maximosIntentos} intentos`);
                             break;

                        }
                        //alert("Lo siento, Intenta de nuevo");
                        }
            }