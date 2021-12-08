# Prueba para Liverpool por Antonio Rosete 05/12/21

Buenos días! Primeramente me gustaría iniciar agradeciendo la oportunidad 
de ser tomado en cuenta para esta prueba. Así como una disculpa por la tardanza. 

Espero sea de su agrado.

El LIVE del Proyecto lo pueden encontrar en esta liga [Liverpool Reto](https://pmi-registro-dev.web.app/)

Se ejecuta en una instancia de `Google Cloud Platform`

Este proyecto fue iniciado con create-react-app y durante su desarrollo se utilizó para construir la versión `Node v14.17.3` y `NPM 6.14.13`
Si al momento de construir se presenta algún error se recomienda usar algún administrador de versions para Node como [NVM](https://github.com/nvm-sh/nvm/) o [N](https://www.npmjs.com/package/n)

Los ambientes disponibles pueden ser encontrados en el archivo `.env-cmdrc.json`

Es necesario tener instalada la dependencia env-cmd de manera global la cual se instala con el siguiente comando:  `npm install -g env-cmd`

Para iniciar el proyeto de manera local es necesario instalar las dependencias con el comando `yarn install` o `npm install`

## Scripts disponibles

En este proyecto podrás ejecutar los siguientes scripts.

### `start:dev`

Ejecuta la aplicación en modo desarrollo apuntando al backend que debe estar ejecutandose de manera local en el puerto 8080.
Abre [http://localhost:3000](http://localhost:3000) la cual podrás ver en el navegador.

La pagina volverá a ejecutarse al momento de realizar un cambio en el código. 

### `start:production`

Ejecuta la aplicación en modo desarrollo apuntando al backend productivo alojado en [https://us-central1-pmi-registro-dev.cloudfunctions.net/app
](https://us-central1-pmi-registro-dev.cloudfunctions.net/app)

Abre [http://localhost:3000](http://localhost:3000) la cual podrás ver en el navegador.

La pagina volverá a ejecutarse al momento de realizar un cambio en el código.

### `build:dev`

Crea una carpeta llamada `build` en la raíz del proyecto apuntando a localhost lista para ser desplegada.

### `build:production`

Crea una carpeta llamada `build` en la raíz del proyecto apuntando a localhost lista para ser desplegada.
