<div align="center">

# My Day | ToDo List

<img alt="ReactJS" src="./public/task.gif" width="100" /><br>


![Typescript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![GIT](https://img.shields.io/badge/Git-fc6d26?style=for-the-badge&logo=git&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

</div><br>

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.5.

## Introducción

Este proyecto es una aplicación de lista de tareas (To-Do List) desarrollada en Angular 18. Permite a los usuarios crear, editar y eliminar tareas, así como marcar tareas como completadas.

## Tabla de Contenidos

- [Introducción](#introducción)
- [Instalación](#instalación)
- [Uso](#uso)
- [Características](#características)
- [Dependencias](#dependencias)
- [Configuración](#configuración)
- [Documentación](#documentación)
- [Solución de Problemas](#solución-de-problemas)

## Instalación

Para instalar y ejecutar este proyecto localmente, sigue estos pasos:

1. Clona el repositorio:
    ```bash
    git clone https://github.com/baenat/todo-list-app.git
    ```
2. Navega al directorio del proyecto:
    ```bash
    cd todo-list-app
    ```
3. Instala las dependencias:
    ```bash
    npm install
    ```
4. Inicia la aplicación:
    ```bash
    ng serve
    ```
5. Abre tu navegador web y navega a `http://localhost:4200/`.

## Uso

Una vez que la aplicación esté en funcionamiento, puedes:

- Añadir una nueva tarea ingresando el nombre de la tarea y presionando "enter" .
- Editar una tarea existente haciendo doble clic en la descripción de la tarea.
- Eliminar una tarea haciendo clic en el ícono.
- Marcar una tarea como completada haciendo clic en la casilla de verificación junto a la tarea.

## Características

- Añadir, editar y eliminar tareas.
- Marcar tareas como completadas.
- Filtrar tareas por completadas y pendientes.
- Persistencia de datos en el almacenamiento local del navegador.

## Dependencias

- [Angular 18](https://angular.io/)
- [Angular CLI](https://cli.angular.io/)

## Solución de Problemas

Si encuentras problemas al ejecutar la aplicación, considera las siguientes soluciones:

- **Error de instalación de dependencias**:
    ```bash
    npm install --force
    ```

- **Error al iniciar la aplicación**:
    ```bash
    ng serve --open
    ```
