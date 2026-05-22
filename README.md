# Khan Academy Angular

Reconstruccion visual de la pagina principal de Khan Academy en espanol usando Angular.

## Que incluye

- Header similar al sitio original con busqueda, logo y acciones principales.
- Hero con mensaje principal, tarjetas de registro e imagen de estudiantes.
- Seccion de cursos con categorias como Matematicas, Ciencia, Economia y Computacion.
- Bloques informativos para explicar por que funciona Khan Academy.
- Secciones para maestros, estudiantes, mision, patrocinadores y footer.
- Diseno responsive para computador y celular.

## Ejecutar el proyecto

Instala las dependencias:

```bash
npm install
```

Inicia el servidor local:

```bash
npm start -- --host 127.0.0.1 --port 4300
```

Abre el navegador en:

```text
http://127.0.0.1:4300/
```

## Comandos utiles

Compilar el proyecto:

```bash
npm run build
```

Ejecutar pruebas:

```bash
npm test -- --watch=false
```

## Estructura principal

- `src/app/app.ts`: datos usados por la interfaz.
- `src/app/app.html`: estructura HTML de la pagina.
- `src/app/app.css`: estilos visuales y responsive.
