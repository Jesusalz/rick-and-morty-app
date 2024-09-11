### Paso 1: Forkear el Repositorio

Forkear el siguiente repositorio: https://github.com/fvillanuevadev/rick-morty-ws

### Paso 2: Clonar o Descargar el Repositorio

Clonar o descargar el repositorio forkeado en una carpeta de su elección. Si se utiliza git bash, el comando sería:

```
git clone https://github.com/Francisco-Villanueva/rick-morty-ws.git
```

Asegurarse de clonar el repositorio en una carpeta adecuada, como el escritorio.

### Paso 3: Abrir el Proyecto en el Editor de Código

Abrir el proyecto clonado en VSCode o el editor de código de su elección.

### Paso 4: Instalar Dependencias

Instalar los paquetes y dependencias necesarios ejecutando el siguiente comando en la consola:

```
npm install
```

### Paso 5: Levantar el Proyecto

Levantar el proyecto ejecutando el siguiente comando:

```
npm run dev
```

Si todo está bien, deberían acceder a http://localhost:5173/ y ver así la aplicacion en su navegador:

![alt text](<Screenshot 2024-09-05 115940.png>)

### Paso 6: Crear Rutas

Crear las siguientes rutas utilizando react-router-dom:

```
 /
```

Ruta raíz, debe mostrar un
componente estilo Landing Page con un botón que lleva a la ruta /characters.

```
 /characters
```

2. **/characters**: Ruta para ver el listado de personajes, utilizando el componente character-list.jsx.

```
 /characters/:id
```

3. **"characters/:id**: Ruta para ver el detalle de un personaje, enviando el ID del personaje por parámetros.

### Las rutas deberian quedar asi:

```javascript
<Routes>
  <Route path="/" elemnt={<LandingPage />} />
  <Route path="/characters" elemnt={<CharacterListPage />} />
  <Route path="/characters/:id" elemnt={<CharacterDetailPage />} />
</Routes>
```

### Paso 7: Consumir Datos desde los Parámetros

Para consumir los parámetros, utilizar el hook useParams de react-router-dom.

```javascript
const { id } = useParams();
```

En el componente donde se muestra el detalle del personaje, crear un estado para el personaje.

```javascript
const [character, setCharacter] = useState(null);
```

Y, dentro de un useEffect, ejecutar la acción que solicita la información del personaje utilizando la función **getCharacterById(id)** del directorio /services/character.services.js.

```javascript
useEffect(() => {
  // Función para obtener los datos del personaje de la API
  const fetchCharacter = async () => {
    setLoading(true);
    try {
      const data = await getCharacterById(id);
      setCharacter(data);
    } catch (error) {
      console.error("Error fetching character details:", error);
      setError("Failed to load character details");
    } finally {
      setLoading(false);
    }
  };

  fetchCharacter();
}, [id]); // Se ejecuta cada vez que cambia el ID
```

Por último renderizar la información del personaje:

```javascript
// Renderiza los detalles del personaje
return (
  <div className="character-details">
    <h2>{character.name}</h2>
    <img src={character.image} alt={character.name} />
    <p>Status: {character.status}</p>
    <p>Species: {character.species}</p>
    <p>Gender: {character.gender}</p>
    <p>Origin: {character.origin.name}</p>
    <p>Location: {character.location.name}</p>
  </div>
);
```
