# Sistema de Gestión de Asesorías Académicas – IUDigital

## Descripción

Este proyecto implementa una aplicación backend para la gestión de asesorías académicas en la Institución Universitaria IUDigital.

El sistema permite administrar:

* Clientes
* Universidades
* Tipos de proyecto
* Etapas del proyecto
* Proyectos

Cada asesoría es considerada un proyecto que contiene información sobre el cliente, universidad, tipo de proyecto y etapa en la que se encuentra.

---

# Arquitectura del Proyecto

El proyecto se desarrolló en dos fases:

## 1. Arquitectura Monolítica

Inicialmente se construyó una aplicación monolítica utilizando:

* Node.js
* Express
* MongoDB
* Mongoose
* Docker

Módulos incluidos:

* Client
* University
* ProjectType
* Stage
* Project

Imagen Docker:

```
TU_USUARIO/iudigital-monolith:1.0
```

---

## 2. Arquitectura de Microservicios

Posteriormente se analizó el sistema y se identificó que el módulo **Project** es el componente con mayor demanda debido a que centraliza la gestión de las asesorías y se relaciona con todos los demás módulos.

Por esta razón se desacopló en un microservicio independiente.

### Core Service

Gestiona:

* Clientes
* Universidades
* Tipos de proyecto
* Etapas

Imagen Docker:

```
TU_USUARIO/iudigital-core-service:1.0
```

---

### Project Service

Gestiona:

* Proyectos

Imagen Docker:

```
TU_USUARIO/iudigital-project-service:1.0
```

---

# Despliegue con Docker

Para ejecutar los microservicios:

```bash
docker compose up --build
```

Servicios disponibles:

Core Service

```
http://localhost:3001
```

Project Service

```
http://localhost:3002
```

---

# Tecnologías utilizadas

* Node.js
* Express
* MongoDB
* Mongoose
* Docker
* Docker Compose

---

# Autor

Carlos P
