===========================================
📝 Encuesta Interactiva en JavaScript
===========================================

Este proyecto es una aplicación de encuestas creada con JavaScript, que permite a los usuarios:

✔ Crear encuestas personalizadas  
✔ Agregar múltiples preguntas (mínimo 8)  
✔ Proporcionar al menos 2 opciones de respuesta por pregunta  
✔ Responder cada pregunta desde la consola del navegador  
✔ Ver los resultados de la encuesta en tiempo real y al final

Se presentan dos versiones de la solución:

--------------------------------------------------
🔧 Tecnologías utilizadas
--------------------------------------------------

- JavaScript 
- prompt, alert, console.log para interacción básica
- Compatible con ejecución en navegador (HTML)

--------------------------------------------------
📁 Estructura del proyecto
--------------------------------------------------

/proyecto-encuesta/
│
├─ index.html              => Página HTML para ejecutar JS
├─ encuesta-poo.js         => Versión en Programación Orientada a Objetos
├─ encuesta-funcional.js   => Versión en Programación Funcional
└─ README_Encuesta.txt     => Este archivo

--------------------------------------------------
🧠 Versión 1: Programación Orientada a Objetos (POO)
--------------------------------------------------

Archivo: encuesta-poo.js

Características:

- Clase Pregunta con texto, opciones y respuesta
- Clase Encuesta para manejar preguntas
- Agrega preguntas dinámicamente
- Muestra respuestas en consola en tiempo real
- Imprime resultados al final

Flujo:

1. El usuario ingresa el título de la encuesta
2. Se solicita cuántas preguntas (mínimo 8)
3. Para cada pregunta:
   - Valida que el texto no esté vacío
   - Pide al menos 2 opciones separadas por coma
4. Se responde cada pregunta
5. Se muestran resultados por consola

--------------------------------------------------
🧠 Versión 2: Programación Funcional (PF)
--------------------------------------------------

Archivo: encuesta-funcional.js

Características:

- Usa funciones puras (crearPregunta, pedirOpciones, etc.)
- No usa clases, sólo objetos y funciones
- Valida entradas y muestra resultados en consola

Flujo:

1. Ejecuta iniciar()
2. Se crea la encuesta (título + preguntas)
3. Se responden todas las preguntas
4. Se muestran resultados en consola

--------------------------------------------------
✅ Cómo usar el proyecto
--------------------------------------------------

1. Abre index.html en un navegador 
2. Enlaza uno de los archivos JS:

Para POO:
<script src="encuesta-poo.js"></script>

Para PF:
<script src="encuesta-funcional.js"></script>

3. Abre la consola del navegador para ver los resultados

--------------------------------------------------
📌 Requisitos
--------------------------------------------------

- Navegador moderno (Chrome, Firefox, etc.)
- Editor como Visual Studio Code (opcional)
