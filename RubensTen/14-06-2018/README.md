# Browser Performance

## Network
Profile custom : Configuraciones de latencia personalizadas en network

Factores:
* latencia
* velocidad de subida y bajada
* peso de los files
* peticiones inecesarias

## Service Workers
## Shell app

## Tools
Lighthouse

## Webcomponents
## Solo la primera carga debe ser lenta
## Patron purple (push first)
### Mejoras Fiu 
* Cache de carousel mientras este en sesion
* CDN
* Cache
* Imagenes de catalogos en service worker




# Browsers

### Objetivos del browser
- Conectar, descargar, comunicar datos
- Render UI
- Acceso a la información
- Almacenamiento
- Interprete HTML
- HTTP
- Seguridad en la comunicación

## Componentes del browser

### User interface
Interfaz visual del browser (barra de navegacion, botones, extensiones, etc...)
### Browser engine
Solicita recursos y/o descargas
### Render engine (Ojo por performance)
Generador del DOM (Arboles)
Layout y painting
### Networking (Ojo por bloqueo de contenido)
Protocolos, Seguridad y proveer recursos
### Interpreter JS (Ojo por performance)
Ejecucion de scripts e interpretacion
### UI Backend layer
Modelo de datos en el DOM


Expresion es 
termino operacion termino

https://www.html5rocks.com/en/tutorials/internals/howbrowserswork/#The_browsers_we_will_talk_about




# Unit Test Clase 2

## Objetos de simulación

### Mock
Emulación o comportamiento de un objeto (propiedades, metodos y objectos)
### Dummy
Representa un objeto de prueba exactamente un hardcode de un objecto, se usa para comparar con algo esperado
### Spy
Observa el comportamiento de una función, nos permite conocer el numero de llamadas a una función, quien la llamo, parametros utilizados, etc...
### Stub
Cuando existe una conexión externa que está acoplada a nuestra función.


Sintaxis es la diferencia entre las diferentes librerias por ejemplo
	
	setup/before/beforeEach
	teardown/after/afterEach

setup/before/beforeEach

teardown/after/afterEach
```
	suite('', {
	    before() {
	        Inicializar stub.
	    }
	    after() {
	        Destruir stub
	    }
	    test() {
	        before() {
	            Inicializar dummy.
	        }
	        after() {
	            Destruir dummy.
	        }
	        // Assertions o expects
	    }
	});
```






# Unit Test
## ¿Que es unit test?
Es el código que nos permite garantizar el correcto funcionamiento de un elemento atómico. Esto garantiza la lógica de negocio.

## Desarrollo Tradicional

 - Análisis del problema
 - Qué funciones, propiedades y componentes visuales necesito para resolver el problema
 - Desarrollamos y vamos calando como funciona la propuesta de solución.
 - Arreglamos detalles estéticos y posteriormente lo liberamos.
 - Escribo un par de pruebas porque me las pidieron y las más difíciles las ignoro de la cobertura.

    
## TDD (Test Driven Development)
La definición dice que al menos debe invertirse un 80% generando la prueba unitaria y 20% desarrollo del código.

Malas prácticas de pruebas unitarias es generar primero funciones y despues acoplar la prueba a la funcion generada, esto se vuelve una limitante.

Escribir código mínimo necesario para que las pruebas pasen.
- No tenemos que pensar cómo resolver el problema, porque ya está automatizado.
-  Comprender la lógica de negocio.
- Plasmar los casos en los cuales se pueden interactuar basado en la lógica de negocio.
- Anticipar los posibles comportamientos del usuario con el sistema.
- Desarrollo el código mínimo necesario para que las pruebas pasen.

    test() {
        let a = 'a';
        let b = 'b';
    
        asssert(sum(a,b), {
            code: 'MATH001',
            message: 'You can not add strings in this calculator'
        });
    }
    
    function sum(a,b) {
        if(isNaN(a) || isNaN(b)) {
            return {
                code: 'MATH001',
                message: 'You can not add strings in this calculator'
            };
        } else {
            // @todo
        }
    }


Seleccionar un algoritomo matematico y generar el pseudocodigo
