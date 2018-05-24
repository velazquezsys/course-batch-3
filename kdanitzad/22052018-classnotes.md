y 22 2018 - Martes - Centraal Academy

## First steps

1. git pull upstream master
2. trabajar en local
3. git add --all/. file/directorio
4. git commit -m "mi comentario"
5. git pull upstream master
6. 1 git push origin develop
6.2 hacer Pull request (solicitud de merge)
7 Resolver conflictos manuales (comparaciòn de componentes)

## Convención de Versionado
- x.y.z
    -  Z: (cambios que no percibe el usuario, no afecta en funcionalidad)
    - Y: Nuevas funcionalidades (funciones publicas nuevas y las anteriores no se ven afectadas)
    - X: Cambios mayores/publicos (cuando algo de la version anterior ya no hace sentido en la nueva)

### Fundamentals para versionado
  - README.md ()
  - CHANGELOG.md (cada cambio entre versiones debe ir aqui)

#### El workflow de Git se compone de lo siguiente
_rama o branch_: Puntos de control de cambios
_remote_: Versiones de un proyecto alojados en un servidor en Internet, el cual tiene un repositorio Upstream y un Fork.
_Local_: Versiones en la máquina donde se realizarán cambios al proyecto.
_Upstream_: Repositorio seguro, asignado a un sólo propietario, el cuál verifica los cambios y pruebas realizadas sean correctas, además de proveer el código que se debe mantener para todos los programadores.
_Fork_: Copia original del Upstream para contribuir a un proyecto de forma segura.








