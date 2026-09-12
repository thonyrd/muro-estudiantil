# Anthony Rebolledo P
# MuroEstudiantil
# Una pagina web donde se publiquen noticias o informacion de talleres de un entorno academico


# Requisitos antes de la instalacion:
#Angular:   npm install -g @angular/cli@22
#Node:      descargar de pagina oficial
#npm:       npm install
#Ejecucion del proyecto: ng serve --open

# Componentes;
 components:
    -Menu; Despliegue de menu
    -cabacera: barra superior de la pagina 
# Pages:
    -actividad:    Muestra los talleres
    -contacto:     Informacion de contactos
    -inicio:       Pagina princial
    -incripcion:   formulario para registrar las tareas


# Rutas implementadas:

- inicio → vista de inicio
- actividades → vista de actividades
- inscripcion → vista del formulario de inscripción
- contacto → vista de contacto
- cabeceras → componente de cabecera
- menu → componente de menú


# Formulario y validacion: 
  -Nombre:   minimo 3 caracteres          /obligatorio
  -Apellido: minimo 3 caracteres          /obligatorio
  -Correo electronico: formato valido     /obligatorio
  -carrera:     obligatoria
  -Actividad:   obligatoria
  -Jornada:     obligatoria
  -Comentario: opcional

  


# Registro etapas:

# Etapa N°1: Se creo la estructura con ANGULAR y se configuro las variables de entorno
# Etapa N°2: se añadieron los componentes
# Etapa N°3: Se implemento el formulario responsivo
# Etapa N°4: Se valido todo y se hizo el commit final


# ImAgnenes de Pruebas:

![alt text](<Captura de pantalla 2026-09-11 212744.png>) ![alt text](<Captura de pantalla 2026-09-11 212915.png>)



This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.8.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

# muro-estudiantil