# Nature Sumaq - Arquitectura y costos

## 1. Resumen general

Este proyecto está compuesto principalmente por dos áreas:

- `front/`: aplicación Next.js completa con frontend, rutas de páginas y API routes.
- `design-system/`: librería de componentes React reutilizable con Storybook. Es una unidad de diseño separada, principalmente para desarrollo y documentación.

No hay ninguna dependencia de pago obligatoria en el código. Todas las dependencias usadas son de código abierto.

---

## 2. Estructura del proyecto

### `front/`

- `package.json`: dependencias de la app principal.
- `src/app/`: rutas de Next.js y API routes.
  - `page.tsx`: página principal.
  - `productos/page.tsx`: página de productos.
  - `api/products/route.ts`: endpoint que obtiene productos.
- `src/components/`: componentes reutilizables, layout y UI.
- `src/lib/redux/`: configuración de Redux Toolkit y slices.
- `src/styles/`: estilos globales en Sass.
- `prisma/`: definición de modelo de datos y seed.

### `design-system/`

- `package.json`: librería de componentes con Storybook.
- `components/UXLib/`: componentes visuales reutilizables.
- `stories/`: historias de Storybook para documentar UI.
- `.storybook/`: configuración de Storybook.

---

## 3. Qué está utilizando la app principal (`front`)

### Dependencias de producción

- `next`: framework React para SSR/SSG y App Router.
- `react` / `react-dom`: librerías de interfaz.
- `@reduxjs/toolkit`: manejo de estado global.
- `react-redux`: integración Redux con React.
- `sass`: preprocesador CSS para estilos.
- `lucide-react`: iconos SVG.
- `@prisma/client` + `prisma`: ORM para base de datos.

### Dependencias de desarrollo

- `typescript`: tipado estático.
- `eslint` + `eslint-config-next`: linting.
- `@types/*`: tipos TypeScript para React y Node.

### Uso en el código

- La app usa `Next.js` para renderizar páginas.
- `Redux Toolkit` gestiona el estado de productos.
- Hay un API route en `src/app/api/products/route.ts`.
- El endpoint usa `Prisma` solo si existe `DATABASE_URL`.
- Si no hay `DATABASE_URL`, usa datos mock (
  `MOCK_PRODUCTS` en `page.tsx` y la API también cae en un fallback).
- El frontend usa un `WhatsAppFAB` que genera enlaces `https://wa.me/...`.

---

## 4. Base de datos

### `front/prisma/schema.prisma`

- Usa `provider = "postgresql"`.
- Espera una variable de entorno `DATABASE_URL`.
- Modelo principal: `Product`.

### `front/prisma/seed.ts`

- Siembra productos de ejemplo.
- No es obligatorio para ejecutar localmente si usas los mocks.

### Comportamiento real

- Si `DATABASE_URL` está definida, la API intentará conectar con PostgreSQL.
- Si no está definida, la app sigue funcionando con datos falsos.

---

## 5. Costos

### 5.1 Costos de dependencias

No hay cargos directos por usar las dependencias listadas. Son paquetes open source.

- `next`, `react`, `redux`, `sass`, `lucide-react`, `prisma`, etc.: gratuitos.
- `storybook` en `design-system`: herramienta de desarrollo, también libre.

### 5.2 Costos de hosting/despliegue

Los costos reales vienen de servicios externos cuando despliegues, por ejemplo:

- Vercel: puedes usar el plan gratuito, pero si superas límites de uso o quieres más recursos, se paga.
- Hostinger u otro hosting: tendrás que pagar si eliges ese proveedor.
- Dominio: siempre hay que pagar el registro del dominio si quieres un dominio propio.

### 5.3 Costos de base de datos

- En local: no hay costo si usas una base de datos local o los datos mock.
- En producción: si conectas con un PostgreSQL en la nube (Neon, PlanetScale, Supabase, AWS, etc.), puede haber costo según el proveedor y el plan.

### 5.4 Servicios externos

El proyecto usa enlaces `wa.me` para WhatsApp, no usa una API de pago. Por lo tanto, no hay costo extra por esa funcionalidad.

---

## 6. Conclusión

- El código en sí no te cobra nada.
- Las dependencias usadas tampoco tienen un cargo automático.
- Los únicos costos reales son:
  1. hosting / despliegue (Vercel, Hostinger, etc.)
  2. dominio personalizado
  3. base de datos en la nube si la necesitas en producción

Si ejecutas la app localmente con `npm install` y `npm run dev`, no deberías pagar nada.

---

## 7. Recomendación rápida

Para evitar costos:

- Ejecuta el proyecto localmente.
- No configures `DATABASE_URL` ni Prisma con DB en la nube si no lo necesitas.
- Despliega en Vercel con su plan gratuito mientras estés dentro de los límites.
- Compra dominio solo si quieres nombre propio.

---

## 8. Estructura principal de la app

- `front/src/app/page.tsx`: homepage.
- `front/src/app/productos/page.tsx`: listado de productos y carrito de WhatsApp.
- `front/src/app/api/products/route.ts`: API de productos.
- `front/src/lib/redux/`: store y producto slice.
- `front/src/components/layout/`: Navbar + Footer.
- `front/src/components/ui/WhatsAppFAB.tsx`: botón de contacto.
- `front/src/styles/globals.scss`: estilos principales.

---

## 9. Nota sobre `design-system`

Es una librería de componentes que sirve para desarrollar y documentar UI.
No es necesaria para que la app `front` funcione si no la enlazas desde `front`.

---

## 10. Archivo de dependencias clave

- `front/package.json`
- `design-system/package.json`

## 11. `npm install` y uso de dependencias

- `npm install` descarga los paquetes del registro de npm.
- Estos paquetes son gratuitos y no generan cobro por uso.
- No hay un cargo por usar React, Next.js, Redux, Sass, Prisma, Storybook o Lucide.
- Solo se paga si eliges un servicio adicional (hosting, dominio, base de datos en la nube).
- Si usas el mismo proyecto en varios sitios, las dependencias siguen siendo gratuitas.
- Cada sitio puede requerir su propio hosting/domino/DB, pero no paga por las librerías en el código.

## 12. ¿Qué se paga realmente?

- Hosting: el servidor donde se publica la app.
- Dominio: el nombre propio que compras.
- Base de datos en la nube: si activas `DATABASE_URL` y conectas a un servicio pago.
- Servicios extra: (no hay en este código) si llegas a integrar APIs de pago, entonces sí.

---

Si quieres, puedo también generar un diagrama simple de la arquitectura con las carpetas y relaciones.
