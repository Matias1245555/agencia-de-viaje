# Guia de Colaboracion - ViajesApp

## Flujo de Trabajo

### 1. Configuracion Inicial

```bash
git clone <url-del-repositorio>
cd travel-agency-web
```

### 2. Crear una Rama Nueva

Siempre crea una rama nueva antes de trabajar en una funcionalidad:

```bash
git checkout -b feature/nombre-funcionalidad
```

Nomenclatura de ramas:
- `feature/` - Nuevas funcionalidades
- `fix/` - Correccion de bugs
- `hotfix/` - Correcciones urgentes
- `docs/` - Documentacion

### 3. Hacer Cambios y Commit

```bash
git add .
git commit -m "Descripcion clara del cambio"
```

Mensajes de commit:
- `feat: Agregar busqueda de vuelos`
- `fix: Corregir fechas en el formulario`
- `docs: Actualizar README`
- `style: Mejorar estilos del header`

### 4. Push y Pull Request

```bash
git push origin feature/nombre-funcionalidad
```

Luego crea un Pull Request en GitHub para que el equipo revise tu codigo.

### 5. Revision de Pull Requests

- Revisa el codigo de al menos un companero
- Comenta sugerencias constructivas
- Aprueba los cambios antes de hacer merge

## Situaciones Comunes

### Conflictos de Diseno UI/UX

Si hay desacuerdos sobre el diseno:
1. Discutan las opciones en los comentarios del PR
2. Prueben ambas soluciones
3. Lleguen a un consenso basado en la experiencia del usuario

### Integracion de Servicios Externos

Al integrar APIs de vuelos o hoteles:
1. Crear una rama especifica: `feature/api-integration`
2. Documentar la integracion en el README
3. Manejar errores apropiadamente

### Cambios Frecuentes de Requisitos

Para manejar cambios:
1. Mantener el README actualizado
2. Usar branches feature para cada cambio
3. Comunicar cambios al equipo via PR o Issues

## Contacto

Para dudas, abre un Issue en el repositorio.