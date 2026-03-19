# Actividad #9 — Implementación del sistema de navegación y flujos

---

## Desarrollo

En esta actividad migramos la navegación de la app de Cinépolis de un sistema manual con `useState` a un sistema real con **React Router**. El cambio más importante es que ahora la URL cambia al navegar, lo que permite que el usuario pueda regresar con el botón atrás del navegador, compartir links directos y recargar la página sin perder su ubicación.

---

## 1. Configuración de React Router

`react-router-dom` ya estaba instalado en el proyecto. Lo primero fue configurar el `BrowserRouter` en `main.tsx`, que es el archivo raíz de la aplicación. Al envolverlo aquí, toda la app tiene acceso al sistema de rutas:

```tsx
// main.tsx
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
```

Luego en `App.tsx` se reemplazó completamente el renderizado condicional con `useState` por `Routes` y `Route`:

```tsx
// App.tsx — antes
{vistaActual === 'home' && <Home />}
{vistaActual === 'cartelera' && <Cartelera />}

// App.tsx — después
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/cartelera" element={<Cartelera />} />
  <Route path="/alimentos" element={<Alimentos />} />
  <Route path="/otros" element={<Otros />} />
  <Route path="/pelicula/:id" element={<Detalle />} />
  <Route path="/historia" element={<Historia />} />
  <Route path="/membresias" element={<Membresias />} />
</Routes>
```

**Por qué es mejor:** con `useState` la URL nunca cambiaba, siempre era `/`. El usuario no podía compartir el link de una película específica ni regresar con el botón atrás. Con React Router cada vista tiene su propia URL real.

---

## 2. Vistas principales

La app cuenta con las siguientes páginas conectadas al sistema de rutas:

| Ruta | Componente | Descripción |
|---|---|---|
| `/` | `Home` | Carousel de estrenos + grid de películas + noticias |
| `/cartelera` | `Cartelera` | Todas las películas disponibles |
| `/alimentos` | `Alimentos` | Bebidas, comestibles y snacks |
| `/otros` | `Otros` | Promociones, membresías, preventas, formatos |
| `/pelicula/:id` | `Detalle` | Detalle dinámico por película |
| `/historia` | `Historia` | Página adicional — historia de Cinépolis |
| `/membresias` | `Membresias` | Niveles Classic, Gold y Platinum |

**Página adicional elegida: Historia**

Se eligió Historia porque es una sección que aporta identidad de marca a la app. Desde el punto de vista de UX, los usuarios que no conocen Cinépolis pueden encontrar contexto sobre la empresa sin salir de la plataforma. Además, es una ruta natural dentro del footer en la sección "Quiénes somos".

---

## 3. Rutas dinámicas con useParams

La ruta `/pelicula/:id` es la más importante del sistema. Antes, la película seleccionada se pasaba como estado entre componentes. Ahora la información viaja por la URL:

```tsx
// Home.tsx y Cartelera.tsx — al hacer clic en una película
function irADetalle(id: number) {
  navigate(`/pelicula/${id}`)
}
```

En `Detalles.tsx` se usa `useParams` para leer el id de la URL y buscar la película en el JSON:

```tsx
// Detalles.tsx
const { id } = useParams()
const pelicula = (todasLasPeliculas as Pelicula[]).find(p => p.id === Number(id))
```

**Justificación UX:** al ir a `/pelicula/3` el usuario ve Sinners, y si comparte ese link con alguien, esa persona llega directamente a la misma película. Antes eso era imposible porque todo vivía en el mismo `/`.

---

## 4. Navegación visible con NavLink

En el `Header` se reemplazaron los `<span>` con `NavLink`, que tiene la ventaja de saber automáticamente si su ruta está activa:

```tsx
// header.tsx
import { NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  color: isActive ? '#f0c040' : 'white',
  fontWeight: isActive ? 'bold' : 'normal',
  textDecoration: 'none',
  cursor: 'pointer',
})

<NavLink to="/" end style={linkStyle}>Inicio</NavLink>
<NavLink to="/cartelera" style={linkStyle}>Cartelera</NavLink>
<NavLink to="/alimentos" style={linkStyle}>Alimentos</NavLink>
<NavLink to="/otros" style={linkStyle}>Otros</NavLink>
```

El prop `end` en el link de Inicio es importante: sin él, el link de Inicio aparecería activo en todas las páginas porque todas las rutas empiezan con `/`.

En el footer se usó `Link` (no NavLink) para Historia y Membresías, ya que ahí no se necesita indicar página activa:

```tsx
// footer.tsx
<li><Link to="/historia">Historia</Link></li>
<li><Link to="/membresias">Membresías</Link></li>
```

---

## Decisiones de UX en el flujo de navegación

**Header siempre visible:** el Header con el nav se mantiene en todas las vistas porque el usuario siempre necesita saber dónde está y poder moverse rápido. Quitarlo en alguna vista generaría confusión.

**Indicación visual de activo:** el link activo cambia a color amarillo `#f0c040` y negrita. Esto le comunica al usuario en qué sección está sin que tenga que leer la URL. Es un patrón estándar en cualquier app de navegación.

**Footer para rutas secundarias:** Historia y Membresías se colocaron en el footer porque son páginas informativas, no de navegación principal. Ponerlas en el header llenaría demasiado el nav. El footer es el lugar convencional para ese tipo de contenido.

**useNavigate en lugar de Link en las tarjetas:** las MovieCards usan `useNavigate` con una función `irADetalle` en lugar de un `<Link>` directo. Esto da más control: en el futuro se pueden agregar validaciones o lógica antes de navegar sin cambiar la estructura del componente.

**Ruta dinámica con id numérico:** se eligió el `id` del objeto película como parámetro de la URL porque es único y estable. Usar el título generaría URLs con espacios y caracteres especiales que son difíciles de manejar.

---

## Conclusión

El cambio a React Router mejoró la app en todos los aspectos de navegación. El sistema anterior con `useState` funcionaba visualmente pero era una simulación de navegación. Con React Router la app se comporta como una SPA real: URLs únicas por vista, navegación con el historial del navegador, rutas dinámicas por id y señalización visual de la sección activa. Todo esto impacta directamente en la experiencia del usuario.
