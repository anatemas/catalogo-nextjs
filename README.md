#  Mueblería El Roble — Punto de Venta (POS)

Aplicación web de punto de venta (POS) construida con **Next.js 16**, **React 19** y **TypeScript**.  
Permite explorar un catálogo de muebles organizado por categorías, ver el detalle de cada producto y gestionar un carrito de compras persistente.

---

## ¿Cómo ejecutar el proyecto?

### Requisitos previos

- [Node.js](https://nodejs.org/) v18 o superior
- [Laragon](https://laragon.org/) (o cualquier terminal con Node.js disponible)
- Git

### Pasos para correrlo en local

```bash
# 1. Clona el repositorio
git clone https://github.com/anatemas/catalogo-nextjs

# 2. Entra a la carpeta del proyecto
cd catalogo

# 3. Instala las dependencias
npm install

# 4. Inicia el servidor de desarrollo
npm run dev
```

Abre tu navegador en **http://localhost:3000**

---

##  Estructura del proyecto

```
catalogo/
├── app/
│   ├── page.tsx              # Catálogo principal con filtros por categoría
│   ├── layout.tsx            # Layout global con Navbar y CarritoProvider
│   ├── globals.css           # Estilos globales y paleta de colores
│   ├── cart/
│   │   └── page.tsx          # Página del carrito de compras
│   └── product/
│       └── [id]/
│           └── page.tsx      # Detalle individual de cada producto
├── components/
│   ├── Navbar.tsx            # Barra de navegación con contador del carrito
│   └── ProductCart.tsx       # Tarjeta de producto con hover y botón agregar
├── context/
│   └── CarritoCotext.tsx     # Contexto global del carrito con localStorage
├── data/
│   └── products.ts           # Datos estáticos de los 8 productos de mueblería
└── public/
    └── images/               # Imágenes de los productos
```

##  Tecnologías utilizadas

| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16.2.6 | Framework principal, enrutamiento |
| React | 19.2.4 | Interfaz de usuario y estado |
| TypeScript | ^5 | Tipado estático |
| Tailwind CSS | ^4 | Utilidades de estilo base |
| localStorage | Web API | Persistencia del carrito |

---

##  Paleta de colores

| Nombre | Color |
|---|---|
| Crema (fondo) | `#F5F0E8` |
| Café claro | `#E8DDD0` |
| Café medio | `#C4A882` |
| Café oscuro (texto) | `#2C1A0E` |
| Terracota (acento) | `#C1622F` |

---
