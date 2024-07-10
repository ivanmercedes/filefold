# FileFold

**FileFold** es una plataforma SaaS para la gestión de archivos en la nube, diseñada para organizar y simplificar la administración de documentos mediante una estructura de categorías, subcategorías, años y meses. Con una interfaz intuitiva y características avanzadas, FileFold es la solución ideal para individuos y equipos que buscan eficiencia y seguridad en el manejo de archivos.

## Características

- **Gestión de Categorías y Subcategorías:** Organiza tus archivos de manera lógica y accesible.
- **Estructura Anual y Mensual:** Clasifica documentos por años y meses para fácil seguimiento.
- **Interfaz Intuitiva:** Experiencia de usuario limpia y moderna.
- **Búsqueda Avanzada:** Encuentra archivos rápidamente con herramientas de búsqueda y filtrado.
- **Subida y Gestión de Archivos:** Soporte para múltiples formatos de documentos.
- **Control de Acceso y Permisos:** Configura permisos detallados para usuarios.

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/filefold.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd filefold
    ```

3. Instala las dependencias de Composer:
    ```bash
    composer install
    ```

4. Copia el archivo `.env.example` a `.env` y configura tu base de datos:
    ```bash
    cp .env.example .env
    ```

5. Genera la clave de aplicación:
    ```bash
    php artisan key:generate
    ```

6. Migra la base de datos:
    ```bash
    php artisan migrate
    ```

7. Instala las dependencias de Node.js:
    ```bash
    npm install
    ```

8. Compila los assets:
    ```bash
    npm run dev
    ```

## Uso

Inicia el servidor local:
```bash
php artisan serve
```
