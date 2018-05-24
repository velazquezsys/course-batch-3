# **[Centraal Academy](https://centraal.academy)**
-----------------------------------------------------
## Apuntes
_22-05-2018_

------------------------------------------------------
### [Git](https://git-scm.com)

#### El workflow de Git se compone de lo siguiente
_rama o branch_: Puntos de control de cambios  
_remote_: Versiones de un proyecto alojados en un servidor en Internet, el cual tiene un repositorio Upstream y un Fork.
_Local_: Versiones en la máquina donde se realizarán cambios al proyecto.
_Upstream_: Repositorio seguro, asignado a un sólo propietario, el cuál verifica los cambios y pruebas realizadas sean correctas, además de proveer el código que se debe mantener para todos los programadores.
_Fork_: Copia original del Upstream para contribuir a un proyecto de forma segura.

![GitWorkflow](https://i.stack.imgur.com/21oYz.png)

------------------------------------------------------------------------------
#### Flujo Git en pasos

1. Bajar los cambios del repositorio Upstream: git pull upstream master
2. Trabajar en local: realizar desarrollo y cambios necesarios
3. Agregar los cambios deseados: git add --all/. file/directory
4. Realizar confirmación de cambios: git commit -m "..." ó "git commit"
5. Validar nuevamente cambios en Upstream: git pull upstream master
6. En caso de Happy path (en caso contrario pasar al paso 7)
6.1 git push origin develop
6.2 Hacer Pull Request
7. En caso de conflictos
7.1 Resolver conflictos manuales y repetir desde paso 5.

--------------------------------------------------------------------------------
#### Archivos de descripción y versionamiento de un proyecto
 
> README.md     --- Archivo overview que presenta una descripción del proyecto
> CHANGELOG.md  --- Archivo para el registro de versionamiento del proyecto.
---------------------------------------------------------------------------------
#### Versionamiento

El versionamiento de los proyectos índica los cambios el nivel de cambios efecutados según sea el caso para:
> **_x.y.z_**

Según el tipo de cambio al que se someta un proyecto se encontraran los siguientes tipos de cambios y el aumento de versión dado el nivel de desarrollo al que es sometido el proyecto: 


> mayor (x): El proyecto presenta grandes cambios, como lo es cambio de tecnologías o implementación

> menor (y): El proyecto presenta pequeños cambios como adición de funcionalidades o resolución de errores.

> micro(z): El proyecto sufre correciones o muy pocos cambios que afecten los procesos ya implementados.

Esto a la vez no índica que un cambio de tipo y no pueda ser catalogado de tipo x, ya que va a depender del impacto del cambio al que se someta un proyecto.



