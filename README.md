# challenge-08-05-2024

Saludos!

El proyecto cuenta con 2 partes, el BE y el FE

Dentro del BE encontraremos algunas cosas, el mismo fue hecho con Python/DJango y algunas librerías

Al abrir la carpeta de company_api ejecutamos este comando- python manage.py runserver

Eso debería ser suficiente para que suba correctamente el BackEnd, asegurarse de que esté corriendo en el puerto http://127.0.0.1:8000/

Podrán ver dentro de esta URL http://127.0.0.1:8000/admin/ un panel administrativo en el cual ya se pueden hacer todas las acciones de lugar (agregar, editar, eliminar, listar) gracias a al framework de DJango que utilicé

![image](https://github.com/Daniel-Tavarez/challenge-08-05-2024/assets/63930346/fbbf24d3-e6fb-4d99-92eb-9d051d4eeb40)

También tiene la funcionalidad de agregar múltiples direcciones a un cliente, como el mandato lo exigía

![image](https://github.com/Daniel-Tavarez/challenge-08-05-2024/assets/63930346/cfc22250-a948-4602-8006-c490ad78620e)

Y tenemos la parte del swagger, donde pueden ver a detalle los endpoints

http://127.0.0.1:8000/swagger/

![image](https://github.com/Daniel-Tavarez/challenge-08-05-2024/assets/63930346/e8f713f3-fa35-4886-811a-7bdf0b3189e8)

No obstante, también en vista de que utilizar React sería útil para la vacante en cuestión, realicé un FrontEnd que utiliza los servicios suministrados de mi API

En la misma puedo crear, eliminar, listar, editar las empresas, al igual que con los clientes, y por supuesto con las direcciones de los clientes

![image](https://github.com/Daniel-Tavarez/challenge-08-05-2024/assets/63930346/35d46f80-e2c8-4f7c-88b0-2e203e7544a8)

![image](https://github.com/Daniel-Tavarez/challenge-08-05-2024/assets/63930346/61cde9c2-252e-4600-ac1e-a8d3e2df0ba4)
![image](https://github.com/Daniel-Tavarez/challenge-08-05-2024/assets/63930346/74529777-c72e-4415-b472-b63b61cd9996)
![image](https://github.com/Daniel-Tavarez/challenge-08-05-2024/assets/63930346/38b21ee9-bb22-4377-9492-cb9b2f83dc10)

Para correr este proyecto, solo es cuestión de abrir la carpeta Frontend, hacer NPM Install, y luego npm start para subir la app.

Muchas gracias por la oportunidad!

