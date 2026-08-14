---
type: article
id: 9
title: Lo que ninguna máquina puede calcular
slug: lo-que-ninguna-maquina-puede-calcular
lang: es
author: Rafael Piñera
author_username: rafa
category: tecnologia
category_name: tecnología
tags: []
series: null
reading_minutes: 10
word_count: 2104
is_featured: false
updated_at: '2026-08-14T23:01:41+00:00'
url: https://digital-federalism.org/articulos/lo-que-ninguna-maquina-puede-calcular
hreflang:
  es: https://digital-federalism.org/articulos/lo-que-ninguna-maquina-puede-calcular
published_at: '2026-08-14T23:01:41.954417+00:00'
date: '2026-08-14'
canonical: https://digital-federalism.org/articulos/lo-que-ninguna-maquina-puede-calcular
---

En 1936, un joven lógico matemático de veinticuatro años en Cambridge demostró que **había preguntas perfectamente formuladas** cuya respuesta **ninguna máquina podría calcular jamás**

La demostración tenía **cuatro páginas**. Con ellas terminó de derrumbarse el **proyecto más ambicioso de la matemática** moderna de ese entonces.

El joven se llamaba **Alan Turing**. El proyecto matemático que destruyó era liderado por **David Hilbert**, y llevaba treinta años en construcción.

## El sueño de Hilbert

A fines del siglo XIX las matemáticas estaban en crisis. Se habían descubierto paradojas inquietantes en la teoría de conjuntos (la famosa paradoja de Russell) y los cimientos teóricos de las matemáticas parecían temblar. 

Hilbert, el matemático más influyente de su tiempo, propuso un programa de rescate que consistía en **refundar toda la matemática sobre bases absolutamente sólidas.**

Quería demostrar tres cosas. 

\-PILAR 1-Que toda afirmación matemática verdadera podía probarse (**completitud**). 

\-PILAR 2-Que no podía probarse una contradicción (**consistencia**). 

\-PILAR 3-Y que había un **método mecánico** para **determinar si una afirmación (cualquiera) era demostrable** (**decidibilidad**). **Este último era el *Entscheidungsproblem*.**

Lo de "mecánico" no era metafísico. Hilbert lo entendía como un procedimiento tan claro y unívoco que un empleado de oficina sin formación matemática podía ejecutarlo siguiendo reglas. Como una receta de cocina, o una división larga hecha a mano. **La idea era quitarle el misterio a la matemática y reducirla a manipulación de símbolos según reglas fijas.**

## El duelo de Hilbert con Brouwer

Detrás del programa de Hilbert había una guerra personal. Un matemático holandés llamado **L.E.J. Brouwer** (***un místico, que vivía en una cabaña en el bosque y consideraba que el lenguaje era una forma de dominación***) venía sosteniendo desde hacía años que la matemática clásica estaba podrida en su núcleo.

**Brouwer** rechazaba las demostraciones por reducción al absurdo cuando se aplicaban a infinitos, rechazaba el principio del tercero excluido para conjuntos infinitos, y en general **quería reconstruir la matemática desde cero usando solo métodos constructivos**: métodos que produjeran efectivamente lo que afirmaban que existía.

Si Brouwer tenía razón, había que tirar a la basura partes enormes de la matemática moderna. Áreas completas del análisis, la topología y el álgebra se volvían mucho más difíciles o directamente desaparecían.

**Hilbert lo detestaba.** En una conferencia famosa de 1928 dijo, con desesperación evidente: "***prohibirle a un matemático usar el principio del tercero excluido sería como prohibirle a un astrónomo usar el telescopio o a un boxeador usar los puños***". 

Ese mismo año **Hilbert** expulsó a **Brouwer** del comité editorial de la revista *Mathematische Annalen*. El enfrentamiento era abierto, ácido y personal. Buena parte del programa formal de Hilbert era, además de matemática, un intento de derrotar intelectualmente a Brouwer de una vez por todas.

## Wir müssen wissen

Hilbert tenía una fe casi religiosa en el poder de la razón matemática. Su lema, grabado hoy en su tumba en Gotinga, es *Wir müssen wissen. Wir werden wissen*: "**debemos saber, sabremos**". Lo pronunció en un discurso público en septiembre de **1930**, en Königsberg, su ciudad natal.

## La caída de la completitud y consistencia (Kurt Gödel)

En exactamente los mismos días de las lecturas de Hilbert, en una conferencia adyacente, un joven austríaco de veinticuatro años y prácticamente desconocido llamado **Kurt Gödel** presentaba su primer **teorema de incompletitud.** 

El teorema demostraba que **en cualquier sistema formal suficientemente potente hay afirmaciones verdaderas que no pueden demostrarse dentro del sistema**, y que el sistema no puede demostrar su propia consistencia. 

Hay algo trágicamente shakespeariano en la coincidencia. El viejo maestro proclamando "sabremos" mientras el joven desconocido, en la sala de al lado, demostraba, literalmente, en el sentido matemático del término, que hay cosas que no vamos a poder saber nunca.

## Tres golpes al mismo objetivo

Gödel había **noqueado dos** de los tres pilares del programa de Hilbert. 

Su primer teorema mató la completitud: hay verdades matemáticas indemostrables. 

Su segundo teorema mató la posibilidad de una prueba de consistencia interna: **un sistema no puede probar que no se contradice a sí mismo.** 

Faltaba el tercer pilar, el ***Entscheidungsproblem***. Y para voltearlo hacía falta algo que Gödel no había hecho: definir con precisión matemática qué era, exactamente, un "**método mecánico**".

## Ahí entra Turing.

En 1935, Alan Turing tenía veintitrés años y acababa de ser elegido Fellow del King's College de Cambridge. Había leído a Gödel. Había entendido perfectamente que Hilbert había perdido dos pilares.

Todos hablaban de procedimientos, algoritmos, recetas, empleados de oficina siguiendo reglas. Nadie había puesto por escrito, matemáticamente, qué significaba eso.

Turing decidió hacerlo. Y para hacerlo, se imaginó una máquina.

## **La máquina que no era una máquina**

La máquina de Turing no fue diseñada para construirse. Fue diseñada para “pensarse”. 

Es deliberadamente absurda: 

- **una cinta infinita de papel dividida en casilleros**, 
- **un cabezal que se mueve un casillero a la vez,** 
- **un puñado de símbolos, una tabla de reglas que dice "si ves esto, escribí aquello y moveté a la izquierda".** 
- **Nada más.**

La apuesta de Turing era la siguiente: “si algo puede calcularse mecánicamente, por un empleado de oficina, por una regla de tres, por cualquier receta finita imaginable; entonces puede calcularlo esta máquina ridícula”. 

Y a la inversa: “lo que esta máquina no puede calcular, no lo puede calcular nada ni nadie”.

Se llama tesis de Church-Turing y hasta hoy nadie logró refutarla. Alonzo Church, en Princeton, había llegado casi simultáneamente al mismo resultado por otro camino —el cálculo lambda, antecesor de los lenguajes funcionales como Lisp o Haskell—, y después se demostró que ambos formalismos eran equivalentes. Todo lo que puede calcular una máquina de Turing lo puede calcular el cálculo lambda, y viceversa.

Un detalle que suele pasarse por alto: en 1936 las computadoras no existían. Colossus se construyó en 1943, ENIAC en 1945. Turing inventó la teoría de la computación casi una década antes de que existiera una sola computadora física. No estaba pensando en programar nada. Estaba atacando un problema puramente matemático. Cuando después llegaron las máquinas de verdad, resultaron ser, esencialmente, implementaciones físicas de lo que él había imaginado en abstracto.

## **Casi todo**

Con esa máquina definida, Turing tenía por fin una regla clara para separar lo calculable de lo no calculable. Un problema es calculable si existe una máquina de Turing que lo resuelva. Cualquier otro sistema que quiera calcular algo tiene que poder, en principio, simular una máquina de Turing. A eso se le llama, hoy, **ser *Turing completo*.**

En la práctica, esto se traduce en tres capacidades: 

    -**leer** 

    **-escribir en memoria**

    **-tomar decisiones condicionales y,** 

    **-ejecutar bucles o recursión.** 

Con esos ingredientes, un sistema puede correr cualquier “receta finita” o en otras palabras “algorítmo”.

Python es Turing completo. C también. Excel con fórmulas. El sistema de tipos de TypeScript. El juego de cartas Magic: The Gathering, técnicamente. La lista es larga y a veces cómica.

Ahora bien. Turing no inventó su máquina para celebrar lo que las computadoras iban a poder hacer. La inventó para demostrar lo que ninguna de ellas iba a poder hacer nunca.

Un sistema es Turing completo cuando puede simular una máquina de Turing universal, esto es, cuando puede, en teoría, calcular cualquier función computable, dado tiempo y memoria suficientes.

## **El problema de la parada**

El ejemplo canónico de un problema sin receta se llama el problema de la parada. La pregunta es limpia: dado un programa P y una entrada X, ¿P termina en algún momento, o corre para siempre?

Para muchos programas la respuesta es obvia. Un bucle que cuenta del uno al diez, termina. Un bucle infinito, no termina nunca. El problema es construir un algoritmo H(P, X) que responda con certeza para cualquier par posible del universo. Turing demostró que ese algoritmo no puede existir, y lo demostró con una jugada elegante.

Supongamos que H existe. Entonces podríamos construir un programa perverso D(P) que hace lo siguiente: corre H(P, P) para preguntar "¿P se detiene si se recibe a sí mismo como entrada?". Si H responde "sí, se detiene", D entra en un bucle infinito. Si H responde "no, no se detiene", D se detiene inmediatamente. Un programa que hace, sistemáticamente, lo contrario de lo que H predice.

Ahora la pregunta trampa: ¿qué pasa cuando corremos D(D)? Si se detiene, es porque H dijo que no se detendría. Si no se detiene, es porque H dijo que sí. Contradicción en los dos casos. La única salida lógica es que H no puede existir.

No es que la lógica se rompa. Al contrario: funciona perfectamente y nos dice que hay preguntas bien definidas cuya respuesta ninguna máquina puede calcular en general.

Alguien podría sospechar que el problema de la parada es una pregunta trucada, del tipo "¿de qué color es el número siete?" o "esta oración es falsa". No lo es. Los programas son objetos finitos, cadenas de símbolos. La ejecución es un proceso determinista. Detenerse tiene un significado matemático preciso. Para cada par concreto de programa y entrada, la respuesta es objetivamente sí o no.

De hecho, para cualquier programa específico, una persona con tiempo suficiente puede analizarlo y decidir. Lo que Turing demostró es más sutil: no existe ningún método general y mecánico que funcione para todos los casos.

Hay una analogía útil con los irracionales. Cuando los griegos descubrieron que la raíz cuadrada de dos no podía expresarse como fracción, muchos lo vivieron como un error o un defecto. Pero los irracionales resultaron perfectamente legítimos: revelaban, simplemente, que los racionales eran más limitados de lo que parecía. Con los incomputables pasa lo mismo. No son errores. Son evidencia de que el cálculo mecánico es más limitado de lo que uno esperaría.

## **Una isla en un océano**

Y no son excepciones marginales. Henry Rice, en un teorema posterior, demostró algo brutal: cualquier propiedad no trivial del comportamiento de un programa es incomputable. No existe algoritmo general para decidir si un programa cualquiera "hace X", para casi cualquier X interesante. La equivalencia entre dos programas es incomputable. La detección general de bugs, incomputable. El décimo problema de Hilbert —dado un polinomio con coeficientes enteros, ¿tiene soluciones enteras?— resultó también incomputable cuando Yuri Matiyasevich lo resolvió en 1970. La lista sigue.

Hay una manera precisa de decir cuán vasto es el océano. Los programas posibles son numerables: se pueden enumerar uno por uno, 1, 2, 3. Los problemas posibles, no: hay tantos como números reales. Por pura aritmética de infinitos, la mayoría de los problemas no tienen algoritmo que los resuelva. Lo computable es una isla en un mar de incomputabilidad. Que casi todo lo que nos interesa en la práctica caiga adentro de esa isla es una suerte, no una ley.

## **Cinco años**

En cinco años —de 1931 a 1936— el programa de Hilbert quedó completamente destruido. Fue uno de los momentos más traumáticos de la historia de la matemática. Y, paradójicamente, uno de los más fértiles: de ese derrumbe nacieron la teoría de la computabilidad, la lógica moderna y, eventualmente, las computadoras que hoy usamos.

Los tres resultados —Gödel 1931, Turing y Church 1936— no son coincidencias independientes. Son manifestaciones del mismo fenómeno. Turing usó en su demostración una técnica muy parecida a la de Gödel. Gödel había inventado un truco llamado numeración de Gödel, para que las fórmulas matemáticas pudieran hablar de sí mismas de manera controlada. Turing hizo lo análogo con programas: programas que reciben otros programas como entrada, lo que habilita la autorreferencia que aparece en el argumento de D(D). Se puede derivar el teorema de Gödel del de Turing y viceversa. Son, en un sentido matemáticamente preciso, equivalentes.

La estructura lógica de fondo es la misma que la de la paradoja del mentiroso —"esta oración es falsa"—, pero domesticada matemáticamente para producir teoremas en lugar de paradojas. En sistemas formales lo bastante expresivos, la autorreferencia produce límites intrínsecos. No es un defecto reparable. Es una propiedad estructural.

## **El regreso del hereje**

Uno podría pensar que después del colapso los matemáticos habrían dicho "bueno, Brouwer tenía razón, volvamos a él". No pasó. Los teoremas de Gödel no vindicaban a Brouwer: mostraban que la matemática clásica tenía límites, no que fuera incorrecta. La matemática clásica seguía siendo consistente hasta donde sabíamos, y seguía produciendo resultados. 

Además, hacer matemática constructivista es mucho más incómodo. Sin el principio del tercero excluido, sin reducción al absurdo en muchos casos, áreas enormes del análisis se vuelven inabordables. Los matemáticos, pragmáticamente, no quisieron pagar el precio.

Pero las ideas de Brouwer resurgieron desde un lugar completamente inesperado: la computación.

De este místico se trata la próxima entrega…. “La estructura mística del pensamiento riguroso”.
