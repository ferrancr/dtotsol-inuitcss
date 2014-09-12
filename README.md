dtotsol-inuitcss
================

Entorno personal de desarrollo CSS basado en [Inuitcss](#links) y SASS para los proyectos que utilizan HTML5, CSS3 y tienen que ser adaptables a los distintos terminales "resposive"



Para su instalación y puesta en marcha
```
  git clone https://github.com/ferrancr/dtotsol-inuitcss.git
  cd dtotsol-inuitcss/
 Es necesario desligarse de dtotsol-inuitcss
  rm -r .git
  git init
 Cargamos los módulos para grunt
  npm install
 Cargamos los módulos para inuit
  bower install
```
Modificar el __Gruntfile.js__ para indicarle al "compilador grunt" donde ha de colocar los ficheros css generados 

Modificar __scr/styles.scss__ para indicar que módulos de induit utilizamos, entrar en __src/\_themes.scss__ los estilos específicos del proyecto.

Utilizar __grunt__ para complicar los scss del proyecto
```
 grunt

```

##Links
* https://github.com/inuitcss Inuit, última versión. Pero como InuitCSS se ha desglosado en tantos proyectos como partes que se compone es un poco íncomodo tener una idea de que va, así que viene bien visitar
* https://github.com/inuitcss/getting-started Pasos para crear un proyecto InuitCSS.
* https://github.com/csswizardry/inuit.css Versión inicial de InuitCSS, con algunos comentarios interesantes del autors.
* https://github.com/desgnl/inuitcss-demo Demostración de todos complementos activados.
* https://github.com/terabytenz/inuit.css-kitchensink Contiene complementos adicionales.
* http://webdesign.tutsplus.com/articles/rubbing-noses-with-inuitcss--webdesign-9523 Tutorial sobre las primeras versiones de InduitCSS

##script showInuit.sh
El que sea Inuitcss modular es una ventaja a nivel de desarrollo pero un inconveniente para poder ver de manera rápida todas sus funcionalidades, 
así que se puede crear un pequeño script para tener todo Inuitcss en un solo documento.
```
for i  in `find dtotsol-inuitcss -name "*.scss" ` 
do
  echo "
---------------------------
fichero: $i
----------------------"
  cat $i
done
```
Se puede lanzar 
```
sh showInuit.sh >showInuit.txt
```

