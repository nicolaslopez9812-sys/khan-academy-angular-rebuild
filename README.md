# Khan Academy Angular Rebuild

Reconstrucción visual de la página principal de Khan Academy en español usando Angular.

## Qué incluye

- Header similar al sitio original con búsqueda, logo y acciones principales.
- Hero con mensaje principal, tarjetas de registro e imagen de estudiantes.
- Sección de cursos con categorías como Matemáticas, Ciencia, Economía y Computación.
- Bloques informativos para explicar por qué funciona Khan Academy.
- Secciones para maestros, estudiantes, misión, patrocinadores y footer.
- Diseño responsive para computador y celular.

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

## Comandos útiles

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
- `src/app/app.html`: estructura HTML de la página.
- `src/app/app.css`: estilos visuales y responsive.
