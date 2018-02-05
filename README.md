# **PROYECTO PARA REALIZAR SERVICIO WEB MEDIANTE Node.js y Express**

El esqueleto del proyecto lo generamos con express-generator


## ARRANQUE DE LA APLICACIÓN

npm run start



## CONFIGURACIÓN BASE DE DATOS

config/database.js


## PAGINACION y SUBIDA IMAGENES AL SERVIDOR

Realizamos la paginación mediante mongoose-paginate.

Subida de imágenes al servidor la llevamos a cabo mediante multer

Multer cuando subimos los archivos nos genera un req.files de la siguiente manera:

...

{
  "cover": [
    {
      "fieldname": "cover",
      "originalname": "darth vader.jpg",
      "encoding": "7bit",
      "mimetype": "image/jpeg",
      "destination": "uploads/",
      "filename": "fd0732fe76afce0d377994fbe332d075",
      "path": "uploads/fd0732fe76afce0d377994fbe332d075",
      "size": 5596
    }
  ],
  "avatar": [
    {
      "fieldname": "avatar",
      "originalname": "GHOST000.JPG",
      "encoding": "7bit",
      "mimetype": "image/jpeg",
      "destination": "uploads/",
      "filename": "7e19df9f8b339f12dab649a132a84f6e",
      "path": "uploads/7e19df9f8b339f12dab649a132a84f6e",
      "size": 39277
    }
  ]
}

...

Some basic Git commands are:
```
git status
git add
git commit
```




