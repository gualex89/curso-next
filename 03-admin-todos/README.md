# Development
Pasos para levantar la app en desarrollo  

1. Levantar la base de datos
```
docker compose up -d
```
2. Renombrar el archivo .env copy a .env
3. Reemplazar las variables de entorno
4. Ejecutar el Seed para [crear la base de datos local](http://localhost:3000/api/seed)

# Prisma Commands
```
npx prisma init
npx prisma migrate dev
npx prisma generate
```


# Prod


# Stage