# Portafolio de Martha A. Valdez

**Abrir en tu equipo.** Abre `portable/index.html` con un navegador moderno. Las imágenes, los estilos y las fuentes están incorporados. Puedes copiar ese archivo a otro equipo y abrirlo sin conexión.

**Publicar.** Descomprime `Port-Mar-servidor.zip` y sube su contenido al directorio público de tu alojamiento. Conserva la carpeta `assets` junto a `index.html`. Puedes usar la raíz del dominio o una subcarpeta como `/portafolio/`. Es un sitio estático y funciona sin Node.js en el servidor.

**Editar y regenerar.** Usa Node.js 24 y pnpm. Desde la carpeta que contiene `package.json`, ejecuta `pnpm install --frozen-lockfile` y luego `pnpm dev` para ver tus cambios. El contenido y los componentes están en `src/`. Ejecuta `pnpm build` para regenerar `dist/` (servidor) y `portable/` (doble clic). Después de editar, publica el contenido actualizado de `dist/`.

El diseño mantiene las láminas a escala 16:9 y las reglas de impresión del original. También conserva la preferencia original de excluir el sitio de los índices de búsqueda.
