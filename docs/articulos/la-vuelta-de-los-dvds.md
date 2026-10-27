---
type: article
id: 25
title: La vuelta de los DVDs - Almacenamiento local persistente y barato
slug: la-vuelta-de-los-dvds
lang: es
author: Rafael Piñera
author_username: rafa
category: tecnologia
category_name: tecnología
category_url: https://digital-federalism.org/categorias/tecnologia/
tags:
- cypherpunk
series: null
reading_minutes: 6
word_count: 1391
is_featured: false
updated_at: '2026-10-27T19:03:16+00:00'
url: https://digital-federalism.org/articulos/la-vuelta-de-los-dvds
hreflang:
  es: https://digital-federalism.org/articulos/la-vuelta-de-los-dvds
published_at: '2026-10-27T18:49:59.215458+00:00'
date: '2026-10-27'
cover_image: https://digital-federalism.org/media/2e/2eece0d570a3b99c235871109ed8bf9d0eb471c291b12ff622ee29dfc4fede9a.medium.png
canonical: https://digital-federalism.org/articulos/la-vuelta-de-los-dvds
---

Un pendrive, una tarjeta SD o un SSD guardan la información como electricidad. Cada bit es una carga diminuta encerrada en una celda.

Esa carga se escapa con el tiempo, aunque el aparato esté desenchufado en un cajón. Más rápido si hace calor o si el chip es barato.

Por eso un pendrive guardado cinco años puede aparecer con archivos corruptos sin que nadie lo haya tocado. No se rompió: se descargó. La norma de la industria (JEDEC JESD218) solo le exige a un SSD de consumo que conserve los datos un año apagado, y eso a 30 °C. A los SSD de servidor, apenas tres meses a 40 °C. El calor es parte del problema.

Un disco óptico no tiene nada que se descargue. El láser quema una marca física y la marca queda. Se guarda en una caja, sin enchufar nada, y un disco de buena calidad se lee igual veinte años después. La aclaración de "buena calidad" importa, y más abajo explicamos por qué.

Como no se puede volver a escribir, tampoco lo cifra un ransomware ni lo borra un clic equivocado.

Y es más barato. Un Blu-ray grabable de 25 GB cuesta alrededor de un dólar: la mitad por gigabyte que un pendrive.

## Qué disco comprar

Hay dos familias de discos grabables:

- **De una sola escritura** (la letra R: CD-R, DVD-R, BD-R). El láser quema una marca y no hay vuelta atrás. Son los que sirven para archivo.
- **Regrabables** (RW o RE: DVD-RW, BD-RE). Se pueden borrar y volver a grabar unas mil veces. Usan una aleación que cambia de estado, menos estable con los años. Sirven para ir y venir, no para guardar.

Precios aproximados por unidad, en discos de marca, y en memoria flash para comparar:

- CD-R — 700 MB, US$ 0,25 (0,36 por GB)
- DVD-R — 4,7 GB, US$ 0,40 (0,09 por GB)
- BD-R (Blu-ray) — 25 GB, US$ 1 (0,04 por GB)
- BD-R doble capa — 50 GB, US$ 3 (0,06 por GB)
- M-DISC DVD — 4,7 GB, US$ 3 (0,64 por GB)
- M-DISC Blu-ray — 25 GB, US$ 5 (0,20 por GB)

Para uso diario:

- DVD-RW — 4,7 GB, US$ 1 (0,21 por GB)
- BD-RE — 25 GB, US$ 4 (0,16 por GB)
- Pendrive — 64 GB, US$ 7 (0,11 por GB)
- Pendrive — 256 GB, US$ 20 (0,08 por GB)
- Tarjeta SD — 128 GB, US$ 12 (0,09 por GB)
- SSD externo — 1 TB, US$ 80 (0,08 por GB)
- Disco duro externo — 2 TB, US$ 65 (0,03 por GB)

Por gigabyte, el BD-R sale la mitad que un pendrive y parecido a un disco duro. La diferencia es que el disco duro se puede sobrescribir, tiene partes mecánicas, y hay que enchufarlo cada tanto.

La contra es el tamaño: 25 GB obliga a repartir. Conviene decidir de entrada cómo se organiza la colección (por año, por proyecto) y grabar dos copias de cada disco, idealmente de lotes de fabricación distintos.

## Por qué fallaron los DVDs de hace veinte años

Dentro de los de una sola escritura, no da lo mismo cuál. Mucha gente grabó DVDs hace veinte años y hoy no los puede leer. Casi siempre la culpa es del disco.

Los CD-R y DVD-R baratos graban sobre un tinte orgánico. El tinte se decolora con la luz y la humedad, como una foto al sol.

Cuando el NIST y la Biblioteca del Congreso de Estados Unidos probaron distintas marcas de CD-R y DVD-R (Slattery y otros, 2004), unas aguantaban décadas y otras fallaban a los tres años con el mismo trato. La diferencia era la marca.

Tres opciones que funcionan:

- **BD-R HTL Verbatim o Panasonic.** Graban sobre una capa inorgánica de metal, no sobre tinte. Es la opción para casi todo. Ojo: existen BD-R "LTH" que sí usan tinte; si la caja dice LTH, no.
- **M-DISC.** Graba sobre un material inorgánico que el fabricante compara con la piedra. La promesa de mil años no está verificada de forma independiente, pero es lo más estable que se vende. Para lo que no se puede perder.
- **DVD-R Verbatim de la línea AZO**, si ya tenés lectora de DVD y poco para guardar.

Los packs de cien sin marca, no.

## La grabadora y la caja

Las computadoras ya no traen grabadora. Una externa USB de Blu-ray cuesta 80 o 100 dólares.

Guardala en la misma caja que los discos. Dentro de diez años conseguir una va a ser difícil.

El disco también se degrada si se guarda mal. Cuatro reglas:

- En su caja, parados en vertical, no apilados.
- Lejos de la luz directa, el calor y la humedad: un placard interior, no el garaje ni el altillo.
- Sin etiquetas adhesivas: el pegamento ataca la capa de datos. Se escribe con marcador de base de agua en el centro transparente.
- Se agarra por el borde y el agujero, nunca por la cara de lectura.

## Verificar

El otro error de hace veinte años: grabar y no comprobar.

Antes de grabar, dentro de la carpeta, se genera una huella de cada archivo. En Windows, abrí PowerShell en la carpeta y escribí:

```powershell
Get-FileHash * -Algorithm SHA256 | Format-Table Hash, Path -AutoSize > SUMAS.txt
```

En Mac o Linux, en la terminal:

```bash
shasum -a 256 * > SUMAS.txt
```

Eso crea un archivo de texto, `SUMAS.txt`, con una cadena de 64 caracteres por cada archivo. Es como una firma: si cambia un solo bit del archivo, cambia la firma entera. Ese archivo se graba en el disco junto con el resto.

Después de grabar, se vuelve a leer el disco y se comparan las firmas. En Mac o Linux, parado en el disco:

```bash
shasum -a 256 -c SUMAS.txt
```

Cada archivo tiene que decir `OK`. Si alguno dice `FAILED`, el disco va a la basura y se graba otro. En Windows se corre `Get-FileHash` de nuevo sobre el disco y se comparan las dos listas.

La misma comprobación se repite cada dos o tres años, en diez minutos. Si un disco empieza a fallar, hay tiempo para copiarlo a otro antes de perderlo.

Para ir un paso más allá, la herramienta `par2` genera archivos de paridad: con un 10 % de espacio extra en el disco, se puede reconstruir cualquier archivo dañado. Es más técnica, pero para guardar veinte años vale la pena.

## Lo que no es nuestro

Todo esto parece una nota de hobby. No lo es. Es una nota sobre quién tiene nuestras cosas.

Nos acostumbramos a alquilar la vida digital. La música está en Spotify, las películas en Netflix, las fotos de los chicos en Google, el trabajo en un Drive. Nada de eso es nuestro: pagamos cada mes por el permiso de mirarlo. El permiso se renueva mientras paguemos, mientras la empresa exista y mientras no cambie los términos. Las tres cosas pasan.

Y cuando uno quiere salir de la nube y guardar algo en un cajón, se encuentra con que el hardware tampoco está pensado para durar. Un pendrive se descarga. Un SSD tiene fecha de vencimiento escrita en una norma industrial. El teléfono de hace cuatro años ya no actualiza. El software, acostumbrado a que la memoria y el ancho de banda son gratis, crece sin parar, y los archivos crecen con él, y hacen falta más gigas en la nube, y vuelta a pagar.

El disco óptico es feo, lento y chico. Pero tiene una propiedad que ningún servidor ni ninguna memoria flash ofrece: una vez grabado, nadie lo puede cambiar. Ni un ransomware, ni un empleado con un clic de más, ni una empresa que decide que ese contenido ya no está disponible en tu región. Lo que está quemado en el plástico, queda.

Por eso el que vuelve al DVD no es nostálgico. Es alguien que miró la cuenta y la letra chica y decidió que, al menos para lo que importa, prefiere un soporte que se pueda sostener en la mano. Pasó con el vinilo y pasó con la fotografía en película: un nicho que elige el soporte físico no por mejor, sino por propio.

No se trata de reemplazar la nube para el trabajo de todos los días. Se trata de que, pase lo que pase con los servidores del otro lado del mundo, las fotos de los chicos sigan en una caja en el placard. Frías, intactas y al alcance de la mano.
