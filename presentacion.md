
Mostrar la carpeta `src/components/` en el explorador de archivos.

Explicar que la app está dividida en componentes pequeños y reutilizables:
- `Header` — barra de navegación, aparece en todas las vistas
- `Button` — botón reutilizable que se usa dentro de Tarjeta y MovieCard
- `MovieCard` — card usada en Home y Cartelera

El punto clave a resaltar:  `MovieCard` son el mismo concepto aplicado en 4 páginas distintas. Se escribió una vez y se reutilizó en toda la app.

Abrir `Alimentos.tsx` y `Otros.tsx` para mostrar cómo ambas importan `Tarjeta` y le pasan datos diferentes.

---

## 2. Props para comunicación entre componentes

Los archivos más importantes aquí son `App.tsx`, `Header.tsx` y `Detalles.tsx`.

Abrir `App.tsx` y mostrar cómo pasa props hacia abajo:
- Le pasa `cambiarVista` al Header para que el nav funcione
- Le pasa `verDetalle` a Home y Cartelera para que las tarjetas naveguen con datos
- Le pasa `pelicula` a Detalle con la película que el usuario seleccionó

```tsx
<Header cambiarVista={setVistaActual} />
<Home verDetalle={verDetalle} />
<Detalle pelicula={peliculaSeleccionada} />
```

Abrir `MovieCard.tsx` y mostrar sus props: `title`, `image`, `onVerDetalle`. Explicar que el componente no sabe qué película es, solo muestra lo que le llegue.

---

## 3. Flexbox y Grid — diseño responsivo

Abrir `header.css` y mostrar el `display: flex` con `justify-content: space-between` que separa el logo del nav.

Luego abrir cualquiera de las páginas, por ejemplo `Home.tsx`, y mostrar el grid:

```tsx
display: 'grid',
gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
gap: '16px',
```

Demostrar en el navegador redimensionando la ventana. Las tarjetas pasan de 4 columnas a 2 a 1 automáticamente sin media queries. Eso es el diseño responsivo funcionando.

---

## 4. Los 2 estados nuevos — dónde están y cuáles son

Abrir `App.tsx` y mostrar los dos estados:

```tsx
const [vistaActual, setVistaActual] = useState('home')
const [peliculaSeleccionada, setPeliculaSeleccionada] = useState<Pelicula | null>(null)
```

Explicar cada uno:
- `vistaActual` controla qué página se renderiza
- `peliculaSeleccionada` guarda los datos de la película que el usuario eligió

Demostrar en el navegador: hacer clic en "Ver detalle" de una película y mostrar cómo la página de detalle recibe y muestra esos datos correctamente.

---

## 5. Props de cada componente en pantalla

Abrir `MovieCard.tsx` y mostrar su interfaz de props:

```tsx
interface MovieCardProps {
  title: string
  image: string
  onVerDetalle: () => void
}
```

Luego abrir `Detalles.tsx` y mostrar que recibe `pelicula`:

```tsx
interface DetalleProps {
  pelicula: Pelicula | null
}
```

Señalar que si no hay película seleccionada, el componente muestra un mensaje alternativo. Eso es manejo defensivo de props.

---

## 6. Renderizado dinámico con .map()

Abrir `Home.tsx` y mostrar el `.map()` sobre el JSON:

```tsx
{(peliculas as Pelicula[]).map((pelicula) => (
  <MovieCard
    key={pelicula.id}
    title={pelicula.titulo}
    image={pelicula.imagen}
    onVerDetalle={() => verDetalle(pelicula)}
  />
))}
```

Abrir `detalles.json` al lado y mostrar que cada objeto del JSON se convierte en una tarjeta en pantalla. Agregar o quitar un elemento del JSON y mostrar cómo la pantalla cambia sola.

---

## 7. Manejo del estado y eventos

Abrir `Detalles.tsx` y mostrar los 3 estados del formulario:

```tsx
const [nombre, setNombre] = useState('')
const [cantidadBoletos, setCantidadBoletos] = useState(1)
const [mensaje, setMensaje] = useState('')
```

Mostrar el `onChange` en el input de nombre:
```tsx
onChange={(e) => setNombre(e.target.value)}
```

Mostrar el `onSubmit` en el formulario:
```tsx
<form onSubmit={manejarCompra}>
```

Demostrar en el navegador: escribir un nombre, poner cantidad de boletos y darle submit. El mensaje de confirmación aparece abajo sin recargar la página.

---

## 8. preventDefault()

En `Detalles.tsx` mostrar la función `manejarCompra`:

```tsx
function manejarCompra(e: React.FormEvent) {
  e.preventDefault()
  setMensaje(`Gracias ${nombre}, compraste ${cantidadBoletos} boleto(s) para ${pelicula.titulo}`)
}
```

Explicar que sin `preventDefault()` el formulario recargaría la página y se perdería todo el estado. Es lo que permite que el mensaje aparezca en pantalla.

---

## 9. useEffect, fetch y JSON local

Abrir `Home.tsx` y mostrar el `useEffect` con el `fetch`:

```tsx
useEffect(() => {
  fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    .then(res => res.json())
    .then(data => setNoticias(data))
}, [])
```

Explicar que el `[]` al final hace que solo se ejecute una vez al cargar. Señalar en el navegador la sección "Noticias del Cine" y que esos datos vienen de esa API en tiempo real.

Luego mostrar `detalles.json` y explicar que las películas de Home vienen de ese archivo local, que funciona como una pequeña base de datos estática. Ambas formas, API externa y JSON local, son maneras válidas de consumir datos dinámicamente.

---

## Cierre

Hacer un recorrido rápido por las 5 secciones de la app en el navegador: Inicio, Cartelera, Alimentos, Otros y Detalle con formulario. Mostrar que todo está conectado y funciona con un solo `useState` de navegación en `App.tsx`.
