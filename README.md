# Bootstrap-Theme

<img src="rm-img/bootstrap-stack.png" alt="">

Hay dos formas de manejar boostrap.
Linkear los archivos o tenerlos instalados localmente.

Descargamos utilizando node.js
Node es basicamente na manera de ejecutar javascript fuera del navegador.

Webpack administra los archivos que tengo en el frontend (js, sass, etc) y los transforma a produccion.

Se puede usar con boostrap pero se puede usar algo mas sencillo:
GULP:

<img src="rm-img/gulp.png" alt="">

Gulp es una manera de poder ejecutar uns serie de comandos que nos permite poder configurar tareas
Por ejemplo le podemos decir a node.js que copie todos los archivos html a una nueva carpeta
U otra tarea podria ser que minifique todos los archivos css para que pesen menos
O que todos los archivos javascript les redusca el tamano
O que todos los archivos sass los convierta
De eso va gulp, poder escribir tareas automatizadas.

Tambien vamos a utilizar Browser sync,

<img src="rm-img/bs.png" alt="">

que es para poder tener una sevidor en tiempo real, para que la pagina de refresque sola.



