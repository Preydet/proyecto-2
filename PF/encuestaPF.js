//Función que pide un texto no vacío al usuario
function pedirTextoNoVacio(mensaje){
    let texto = "";
    while (!texto || texto.trim() === ""){
        texto = prompt(mensaje);
        if (!texto || texto.trim() === "") {
            alert("Debes ingresar un texto válido.");
        }
    }
    return texto.trim();
}
//Función que pide al menos 2 opciones separadas por comas
function pedirOpciones(){
    let opciones = [];
    while (opciones.length < 2) {
        const entrada = prompt("Escribe al menos 2 opciones separadas por comas:");
        if (!entrada) {
            alert("No ingresaste nada. Intenta de nuevo.");
            continue;
        }
        //Divide la entrada por comas, quita espacios y filtra vacíos
        opciones = entrada
            .split(",")
            .map(op => op.trim())
            .filter(op => op !== "");
        if (opciones.length < 2) {
            alert("Debes ingresar al menos 2 opciones válidas.")
        }
    }
    return opciones;
}
//Función que crea una sola pregunta con su texto y opciones
function crearPregunta(numero) {
    const texto = pedirTextoNoVacio(`Escribe el texto de la pregunta ${numero}:`);
    const opciones = pedirOpciones();
    return {
        texto,
        opciones,
        respuesta: null
    };
}
//Función que crea toda la encuesta (título + preguntas)
function crearEncuesta() {
    alert("Bienvenido al creador de encuestas");
    const titulo = pedirTextoNoVacio("Escribe el título de la encuesta:");
    //Pide cuántas preguntas quieres agregar (mínimo 8)
    let numPreguntas = parseInt(prompt("¿Cuántas preguntas quieres agregar? (mínimo 8):"));
    while (isNaN(numPreguntas) || numPreguntas < 8) {
        numPreguntas = parseInt(prompt("Número inválido. Ingrese al menos 8 preguntas:"));
    }
    //Crea un array de preguntas 
    const preguntas = Array.from({length: numPreguntas}, (_, i) => crearPregunta(i + 1));

    return {titulo, preguntas };
}
//Función que muestra una pregunta y registra la respuesta
function hacerPregunta(pregunta) {
    let mensaje = `\n${pregunta.texto}\n`;
    //Agrega opciones numeradas al mensaje
    pregunta.opciones.forEach((op, i) =>{
        mensaje += `${i + 1}. ${op}\n`;
        });
    //Pide al usuario elegir una opción (por número)    
    let eleccion = parseInt(prompt(mensaje + "Selecciona una opción (número):"));
    while (isNaN(eleccion) || eleccion < 1 || eleccion > pregunta.opciones.length) {
        eleccion = parseInt(prompt("Opción inválida. Intenta de nuevo:\n" + mensaje));
    }
    return pregunta.opciones[eleccion - 1];
}
//Función que recorre todas las preguntas y guarda las respuestas
function realizarEncuesta(encuesta) {
    alert(`Comenzando la encuesta: ${encuesta.titulo}`);
    encuesta.preguntas = encuesta.preguntas.map(p => ({
        ...p,
        respuesta: hacerPregunta(p)
    }));
    alert("Encuesta completada. Revisa la consola para ver los resultados.");
    return encuesta;
}
//Función que muestra los resultados en la consola
function mostrarResultados(encuesta) {
    console.clear();
    console.log(`Resultados de la encuesta: ${encuesta.titulo}\n`);
    encuesta.preguntas.forEach((p, i) => {
        console.log(`${i + 1}. ${p.texto}`);
        console.log(`Respuestas: ${p.respuesta}\n`);
    });
}
//Función principal que controla el flujo del programa
function iniciar(){
    const encuesta = crearEncuesta();// crea la encuesta
    const encuestaRespondida = realizarEncuesta(encuesta);//La realiza
    mostrarResultados(encuestaRespondida);//Mustra los resultados
}
//Inicia el programa
iniciar();