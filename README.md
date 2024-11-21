# PokeApp

PokeApp es una app creada con React Native y Expo utilizando la API de PokeAPI

## Decisiones importantes

- **Estructura de Carpetas**  
  La lógica y la interfaz se organizaron en carpetas:
   - **`api`**: Toda la lógica relacionada con las llamadas a la PokeAPI.
   - **`types`**: Definiciones de tipos TypeScript.
   - **`screens`**: Pantallas principales.
   - **`navigations`**: Configuración de navegadores y rutas.
   - **`hooks`**:   Se crearon hooks para manejar el fetch de datos, paginación y manejo de errores
   - **`components`**: Componentes reutilizables como mensajes de error o imágenes de Pokémon.

- **Funcionalidades bonus**  
  Se añadió una librería de sonido para reproducir el cry de un Pokemon y una pequeña animación al hacer tap sobre la imagen.

- **Pantallas Incompletas**  
  Las funcionalidades no implementadas tienen pantallas que retornan mensaje TODO para su futura implementación.


## Instalación

   ```bash
   git clone https://github.com/diegonicolas250/pokeApp.git
   cd pokeApp
   npm install
   expo start
   ```
