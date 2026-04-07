# Usa una imagen base de Node.js 
FROM node:18 
# Establece el directorio de trabajo en el contenedor 
WORKDIR /usr/src/app 
# Crea un archivo package.json básico en el contenedor  
RUN echo '{ "name": "mi-proyecto-node", "version": "1.0.0", "main": "server.js", "dependencies": {} }' > package.json 
# Instala las dependencias del proyecto 
RUN npm install express body-parser 
# Copia el resto del código de la aplicación 
COPY . . 
# Expone el puerto en el que la aplicación se ejecutará 
EXPOSE 3000 
# Comando para ejecutar la aplicación 
CMD ["node", "server.js"]