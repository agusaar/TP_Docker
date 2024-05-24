# Docker + CouchDB (🐳 + 🛋️)

La aplicación web consiste en dar de alta y visualizar productos, detallando: *Nombre, Precio y Descripcion del producto*. 

### Stack utilizado

- Express.js utilizado en Backend
- CouchDB + PouchDB en base de datos
- Axios utilizado en Frontend (JS y CSS vanilla)

### Integrantes
- Rojas, Agustin.
- Priano Sobenko, Bautista

### Contenedores
* **Contenedor Interfaz Web (*couchserver*)**
    - Se utiliza imagen de nginx
    - Puerto host: 5500
    - Puerto expuesto: 80
* **Contenedor Servidor Web (*servidor_web*)**
    - Se utiliza imagen de node
    - Puerto host: 3000
    - Puerto expuesto: 3000
* **Contenedor Base de datos (*cliente_web*)**
    - Se utiliza imagen de CouchDB
    - Puerto host: 8080
    - Puerto expuesto: 5984

### Comandos

* `docker compose up -d`
    - Corre la aplicacion en el background.
* `docker compose logs -f`
    - Visualizar todos los logs de cada servicio de la aplicacion.
* `docker compose down`
    - Permite dar de baja la aplicacion completa con todos sus servicios.
### URL
* `http://localhost:5500`



