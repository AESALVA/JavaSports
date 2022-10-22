Proyecto final:

Especificaciones Técnicas:

Sprint 1 - Diseño de producto

● Se elegirá lo siguiente:

○ Rol de Scrum Master (administra la metodología Scrum, administra las
reuniones)
○ Rol de Tech Lead (el dueño del repositorio, el que aprueba los pr)
○ Nombre del equipo.

● Se diseñará el producto asignado al grupo, que saldrá de los siguientes posibles:
○ Blog - News
○ Blog - Sports
○ Blog - Films
○ Blog - Show

● El Scrum Master creará el tablero Trello con los siguientes requisitos (todos son
obligatorios):

○ Columna de info del proyecto que incluya estas cards:
■ Logo
■ Paleta de colores (máximo recomendado 4 colores)
■ Mock del diseño de la app, el formato puede ser cualquiera de imagen
■ Sitios benchmark enviados a los que se apunta en función del proyecto
(ejemplo, si me toco un ECommerce, puedo poner una captura de
Mercado Libre y apuntar a ese formato y calidad)

○ Columna de reuniones que incluya las siguientes cards:
■ Evidencia de cada Daily/ Reunión de equipo, detallada con fecha y
contenido de la reunión

● Columna de tareas con los siguientes estados (todos obligatorios):

○ Backlog (de donde estarán todas las tareas inicialmente)
○ To Do (donde estarán inicialmente todas las tareas cuando ya están asignadas)
○ In Progress (donde cada integrante pondrá la tarea que haya iniciado)
○ Blocked (donde cada integrante pondrá la tarea que tenga bloqueada)
○ Ready to Test (donde cada integrante dejará las tareas para que un compañero
que elija la testeé) le asignará el ticket cuando lo pase a esta columna, este
tester dejará en el comentario si la tarea está Ok para que el integrante la pase a
Done luego del pull request.
○ Done (donde cada integrante dejará su tarea cuando ya esté el pr aprobado)

Sprint 2 - Desarrollo Front End

Stack de tecnologías obligatorias:

● React
● Diseño responsive
● Referido al código, todo debe ser expresado en inglés, los comentarios pueden ser en
castellano.
● El estilado del código debe ser hecho con la configuración básica de Prettier (2 espacios
para el indentado, etc etc).

Sesion:

● Login*
● Registro*
● Recuperar Contraseña**
*Login y registro con modal.
**Recuperar Contraseña -> página aparte

Header:

● logo + social icons + búsqueda (búsqueda debe arrojar resultados al hacer enter o click
en el botón de buscar, redireccionando a una página de resultados)
Nav Sticky

● Home
● Destacado
● Contacto
● Me gusta (debería agregarse un icono con la cantidad de favoritos que se agregan
-badge-)
● Icono de Contacto (icono a la derecha) que nos va a llevar al formulario de contacto.
Mobile:
- logo + menú hamburguesa ( con buscador ) (referencia página la gaceta)
Artículos destacados con Slider:
● Libre

Grilla de articulos:

● En Web: 3 filas con 5 artículos por fila + paginación. (debe tener un tilde al hacer click
en boton comprar y en fav)
● Tablet: 4 filas con 3 productos por fila + paginación.
● En Celular: 5 filas con 2 productos por fila + paginación
Publicidad:
● Libre - ocupa el 100% de pantalla del container
Categorias
● Botones en bloque + Collapse ( abajo)
● Publicidad ( en el panel derecho)
Mobile:
○ Publicidad no se muestra.

Footer
● Web Logo a la izq
● 2 columnas de links
● 1 columna con redes sociales + info contacto
● Fila con info copyright

Mobile:
● Redes sociales (iconos) centrado
● Logo centrado

Article Page: A discreción del cliente

Página de resultado de búsqueda de header. Linkeado a una búsqueda por defecto
Likes Page: similar a la página de productos pero mostrando un listado de favoritos
Se hereda header, footer y nav en páginas paralelas

