---
type: article
id: 19
title: La ofensiva contra la privacidad en todos los niveles del stack tecnológico
slug: la-ofensiva-contra-la-privacidad-en-todos-los-niveles-del-stack-tecnologico
lang: es
author: Rafael Piñera
author_username: rafa
category: tecnologia
category_name: tecnología
category_url: https://digital-federalism.org/categorias/tecnologia/
tags:
- blockchain
- codigo-abierto
- cypherpunk
- federalismo-digital
- legal
- politica
- sociedad
- transparencia
series: null
reading_minutes: 15
word_count: 3234
is_featured: false
updated_at: '2026-09-23T14:27:16+00:00'
url: https://digital-federalism.org/articulos/la-ofensiva-contra-la-privacidad-en-todos-los-niveles-del-stack-tecnologico
hreflang:
  es: https://digital-federalism.org/articulos/la-ofensiva-contra-la-privacidad-en-todos-los-niveles-del-stack-tecnologico
published_at: '2026-09-23T14:27:16.778676+00:00'
date: '2026-09-23'
subtitle: Cómo gobiernos, corporaciones y reguladores están cerrando, uno a uno, los espacios donde todavía era posible mover dinero, comunicarse o simplemente existir sin ser observado. Un mapa del cerco — y de quienes lo resisten.
canonical: https://digital-federalism.org/articulos/la-ofensiva-contra-la-privacidad-en-todos-los-niveles-del-stack-tecnologico
---

*Cómo gobiernos, corporaciones y reguladores están cerrando, uno a uno, los espacios donde todavía era posible mover dinero, comunicarse o simplemente existir sin ser observado. Un mapa del cerco — y de quienes lo resisten.*

Imaginate **un billete de cien pesos**. Lo tenés en el bolsillo. **Nadie sabe cuántos tenés, de dónde salieron, ni a quién se los vas a dar.** Si mañana se lo pagás al verdulero, ni tu banco ni el estado ni tu vecino se enteran. 

Ese anonimato del efectivo lo damos por descontado. Es tan natural que ni pensamos en él.

Ahora **imaginate que cada billete de cien pesos tuviera un número de serie visible en tiempo real por cualquier persona con acceso a internet.** 

Cada vez que cambia de manos, se registra en una base pública. Quién lo tuvo, cuándo, cuánto tiempo. 

Todo el mundo puede saber que hoy le pagaste al kiosquero, que ayer fuiste al bar, que la semana pasada mandaste plata a tu primo en el exterior.

Eso, básicamente, es Bitcoin. Y contra la creencia popular, es todo lo contrario a un sistema privado.

**Este artículo trata de lo que sigue**. De cómo, **en los últimos cinco años**, **la privacidad financiera y digital se ha convertido en la batalla silenciosa más importante de nuestro tiempo.** 

Y de por qué **quienes te van a decir que "no tenés nada que ocultar" son los mismos que están construyendo, pieza por pieza, un sistema donde la privacidad va a ser un privilegio** de los que sepan cómo defenderla.

# Primer nivel: qué son las cripto y por qué importan

Antes de entrar al fondo, algunas definiciones básicas para no perdernos.

**Una criptomoneda es dinero digital** que **no depende de un banco central**. 

En vez de que un banco lleve la cuenta de quién tiene cuánto, la cuenta la lleva una red de computadoras distribuidas por todo el mundo. Esa red usa criptografía (matemática avanzada) para asegurar que nadie pueda tramposear.

**Una blockchain es el libro contable de esa red.** Es público, permanente y — en el caso de Bitcoin — completamente transparente. Cualquiera puede consultarlo. Es como si el libro mayor del banco estuviera pegado en la puerta del banco, a la vista de todos.

**Un exchange** es **una empresa donde comprás y vendés criptomonedas.** **Similar a una casa de cambio**, pero para cripto. Los más famosos son Binance, Coinbase y Kraken. Ahí depositás pesos o dólares, y a cambio te dan bitcoins o lo que quieras.

**KYC (Know Your Customer, "conocé a tu cliente") es el proceso por el cual esos exchanges te piden documento, foto, comprobante de domicilio, y a veces prueba del origen de los fondos**, antes de dejarte operar. Es una obligación regulatoria contra el lavado de dinero.

Con esto en mente, entremos a lo interesante.

Bitcoin no es privado. Nunca fue anónimo, era pseudónimo: en vez de tu nombre, aparece una dirección larga de letras y números. Pero cada transacción queda registrada para siempre.

Con el tiempo, aparecieron empresas dedicadas específicamente a desanonimizar Bitcoin. **La más grande, Chainalysis**, hoy vale aproximadamente **ocho mil millones de dólares**. 

**Chainalysis** existe para: mirar la blockchain, seguir los rastros, y vincular las direcciones con identidades reales. **Le vende ese servicio a gobiernos, bancos, exchanges y agencias de seguridad.**

¿Cómo lo hacen? Si en algún momento tu Bitcoin pasó por un exchange donde hiciste KYC (mostraste tu documento), ese exchange sabe que esa dirección es tuya. Y desde ese momento, todo lo que haga esa dirección puede ser rastreado hacia vos. Para siempre.

(*En 2023, el exchange más grande del mundo, Binance, congeló los fondos de un usuario porque los tokens que había recibido habían tocado, tres transacciones atrás, una dirección sancionada por el gobierno de Estados Unidos. El usuario no tenía nada que ver. Pero como la moneda llevaba "mancha" según los sistemas de análisis, le bloquearon la cuenta*).

En Bitcoin, **no todos los bitcoins valen lo mismo**. Hay bitcoins "**limpios**" (con historial impecable) y bitcoins "**sucios**" (que en algún momento tocaron algo sospechoso). Y algunos exchanges los tratan distinto. Esto se llama **pérdida de fungibilidad** — la propiedad por la cual todo billete de cien vale como cualquier otro billete de cien. El dinero en efectivo es fungible. Bitcoin no.

## Monero: el intento de arreglar esto

Alrededor de 2014, un grupo de desarrolladores lanzó Monero. La idea era construir lo que Bitcoin no había logrado: **dinero digital realmente privado**, funcionalmente equivalente al efectivo.

**Monero usa tres técnicas** al mismo tiempo, en cada transacción, siempre:

**Firmas de anillo**: cuando mandás Monero, tu firma se mezcla con las de otros usuarios elegidos al azar de la blockchain. Nadie puede saber cuál fue el que efectivamente mandó.

**Direcciones sigilosas**: la dirección que ve la red no es tu dirección real. Es una dirección de un solo uso, generada matemáticamente para esa transacción específica.

**Montos ocultos**: la red sabe que hubo un movimiento, pero no cuánto.

En el explorador público de Monero podés ver que hubo una transacción, con fecha y tamaño, y básicamente nada más. No sabés quién mandó, quién recibió, ni cuánto.

**Todas las monedas Monero son iguales entre sí. No hay Monero "limpio" ni "sucio".** Un Monero recibido en un mercado ilegal es indistinguible de uno recién minado, porque nadie puede rastrear el origen. Es fungible, como el efectivo.

**Esto lo convirtió**, previsiblemente, **en el enemigo público número uno de los reguladores del mundo.**

## La guerra regulatoria: el caso europeo

**En 2023**, la Unión Europea aprobó **MiCA** (**Markets in Crypto-Assets Regulation**), la ley más ambiciosa del mundo para regular las criptomonedas. Se implementó en etapas:

**Diciembre 2024**: entra en vigor el grueso de la ley.\
**1 de julio de 2026**: fecha límite máxima. Cualquier empresa que ofrezca servicios cripto en la Unión Europea sin licencia MiCA queda por fuera de la ley.\
MiCA no menciona a Monero por su nombre, pero establece requisitos que hacen imposible listarlo en un exchange licenciado europeo: transferencias identificadas, imposibilidad de operar con cuentas anónimas, y verificación obligatoria de todas las partes de cualquier transacción.

Para completar el cerco, **en julio de 2027 entra en vigor la AMLR (Anti-Money Laundering Regulation)**, que va más allá: **prohíbe explícitamente las criptomonedas de privacidad en instituciones financieras europeas**, además de vedar cuentas anónimas y wallets no identificadas para operaciones superiores a mil euros.

El resultado en la práctica es que los europeos que quieran usar Monero legalmente van a tener cada vez menos opciones. Los exchanges licenciados no lo listan. Los servicios que sí lo listan operan desde fuera de la Unión Europea, en zona gris legal.

## El caso Binance: cuando el gigante se estrella contra la pared

En **julio de 2026** pasó lo impensado. **Binance**, el **exchange de criptomonedas más grande del mundo**, con aproximadamente el 45% del volumen global de trading, **perdió el acceso al mercado europeo.**

La historia es un pequeño drama corporativo. Binance había apostado a licenciarse en Grecia, donde una vez obtenida la autorización podía pasarla al resto de la Unión Europea. Pero cuando la Presidenta del Banco Central Europeo, Christine Lagarde, levantó objeciones fuertes semanas antes del deadline, todo se desmoronó. El 24 de junio de 2026, Binance retiró su solicitud en Grecia, justo antes de que fuera rechazada oficialmente.

El 1 de julio, la fecha límite pasó. Binance quedó sin licencia europea.

Las razones que dieron los reguladores fueron duras. Preocupaciones sobre los **antecedentes de los ejecutivos senior** (*el fundador, Changpeng Zhao, se había declarado culpable en Estados Unidos en 2023 por violaciones anti-lavado y pasó unos meses preso*). **Estructura corporativa opaca**. Récord inadecuado de controles anti-lavado. Y una bomba filtrada: **documentos internos mostraban que entidades vinculadas a Irán habían recibido más de mil millones de dólares a través de Binance** entre marzo de 2024 y agosto de 2025, en potencial violación de sanciones.

Aproximadamente dos millones de usuarios franceses perdieron acceso al día siguiente. Otros países siguieron: Italia, España, Polonia. Los usuarios pueden retirar su plata, pero no operar.

Pero la historia no terminó ahí. En vez de retirarse ordenadamente, **Binance sigue operando en zona gris. Utiliza una excepción de MiCA llamada "reverse solicitation"** — pensada para casos raros donde un cliente contacta por propia iniciativa a una empresa extranjera — como paraguas legal para atender clientes europeos. Y rutea algunas operaciones a través de su entidad en Abu Dhabi.

En agosto de 2026, un estudio independiente comprobó que se podían seguir abriendo cuentas Binance nuevas en cinco países de la Unión Europea, sin advertencia visible sobre la falta de autorización. ESMA, el regulador europeo, envió cartas formales pidiendo explicaciones. Nadie sabe qué va a pasar cuando ese enforcement realmente llegue.

Es el test case más grande sobre si MiCA tiene dientes o es tigre de papel.

De las aproximadamente tres mil empresas que aplicaron a **licencia MiCA, solo 244 fueron aprobadas al 29 de junio de 2026. Ratio de éxito: 8%**. La regulación europea está filtrando duro.

## El caso americano: Tether en la mira

Del otro lado del Atlántico, **Estados Unidos aprobó en 2025 el GENIUS Act (Guiding and Establishing National Innovation for U.S. Stablecoins Act)**, el primer marco regulatorio serio del país para stablecoins.

Antes de seguir, aclaración para quien no maneja el término: **una stablecoin es una criptomoneda diseñada para valer siempre lo mismo que una moneda tradicional, típicamente el dólar. La más famosa es Tether (USDT), con aproximadamente 140 mil millones de dólares en circulación. Por cada USDT que existe, Tether teóricamente tiene un dólar guardado en algún banco.** Se usa masivamente en América Latina como sustituto digital del dólar, especialmente en países con controles cambiarios como Argentina.

**Tether** tiene un problema con la nueva ley. Está **registrada en El Salvador y las Islas Vírgenes Británicas**, nunca hizo una auditoría completa (solo "attestations" limitadas), y sus reservas históricamente incluyeron activos raros como bonos comerciales chinos, préstamos, oro y hasta Bitcoin. **En 2021 fue multada por la Comisión de Comercio de Futuros de Commodities estadounidense** por engañar sobre sus reservas.

**El GENIUS Act exige reservas 100% en efectivo o bonos del Tesoro estadounidense, auditorías mensuales públicas, licencia federal**, y — clave para nuestra historia — **capacidad de congelar direcciones ante órdenes de autoridades**.

## ¿Por qué importa esto para Monero? 

Porque el circuito más común hoy para "sacar" plata de Monero hacia el mundo real es:

**Monero** → intercambio **anónimo** → **USDT** (que se ve como dólar) → **transferencia a wallet** → **venta por pesos o dólares reales**.

USDT es el puente. Si Tether termina obligada a cumplir totalmente con el régimen americano — y todo indica que va en esa dirección — cualquier USDT que provenga de un intercambio anónimo vinculado a Monero podría ser congelado automáticamente en la wallet del receptor.

**Tether ya congeló históricamente más de dos mil millones de dólares en direcciones diversas. La capacidad técnica existe. Solo hace falta que la usen sistemáticamente.**

Sería el golpe más duro imaginable al ecosistema Monero-to-fiat. Y podría llegar entre 2026 y 2028.

## Los que resisten: exchanges offshore y [NonKYC.io](http://NonKYC.io)

Mientras esto pasa, existe un ecosistema paralelo de exchanges que operan fuera de las jurisdicciones reguladas. La palabra clave es **offshore** (registrados en países que no cooperan con los grandes reguladores occidentales).

Los más grandes con presencia de Monero son:

**Kraken**, en jurisdicciones donde todavía puede.\
**MEXC**, con sede en Seychelles.\
**HTX** (ex-Huobi), asiática.\
**KuCoin**, en Seychelles.\
**Bitfinex**.\
Todos requieren algún nivel de identificación, aunque en algunos podés operar montos pequeños sin verificar.

Pero hay una categoría más extrema. 

**Exchanges específicamente diseñados para NO pedir identificación**, y que operan como puertos de última instancia para quienes quieren evitar el sistema. El más notable en esta categoría es [NonKYC.io](http://NonKYC.io).

Fundado en 2023, registrado en Seychelles, [NonKYC.io](http://NonKYC.io) ofrece 176 monedas y 230 pares de trading, se especializa en tokens que ningún otro exchange se anima a listar, y su volumen diario ronda los 38 millones de dólares. No pide documento, no pide selfie, no pide comprobante de nada. Depositás cripto, tradés cripto, retirás cripto.

Es uno de los pocos lugares donde se pueden trader tokens muy pequeños como Tari (XTM) — una criptomoneda relacionada al ecosistema Monero — o hacer directamente XTM por Monero, un par que casi nadie ofrece.

**En mayo de 2025**, la Autoridad de Mercados Financieros de Francia (AMF) puso a [NonKYC.io](http://NonKYC.io) en su lista negra oficial de entidades no autorizadas. No es scam — es simplemente que no tienen licencia, no piden documento, y por lo tanto operan fuera del régimen europeo. Para el usuario de a pie: si algo sale mal, no hay protección legal a la que recurrir.

Esto ilustra la tensión. Cada vez que un regulador aprieta, aparecen alternativas más marginales. 

[NonKYC.io](http://NonKYC.io) es el ejemplo de la próxima generación. Menos glamoroso, menos regulado, más funcional para lo que hace, más peligroso si algo sale mal.

## Instant swaps

También floreció una categoría de servicios llamados **instant swaps** — intercambios rápidos que funcionan sin cuenta ni identificación. Los más conocidos son **FixedFloat, ChangeNOW, SimpleSwap, StealthEX**. 

Junto a ellos existen agregadores como **Trocador** que comparan tasas entre docenas de intercambios en tiempo real, permitiendo al usuario elegir el mejor precio del momento.

Ninguno de estos servicios tiene un edificio, un número de teléfono ni un CEO conocido. **Operan desde jurisdicciones como Panamá, Belice, Emiratos Árabes. Son la infraestructura sombra del sistema cripto no vigilado.**

## Zcash: el otro camino

En este panorama vale la pena mencionar a **Zcash**, la otra gran criptomoneda privada. Zcash **nació alrededor de 2016** y se diferencia de Monero en algo fundamental: la privacidad es opcional, no obligatoria.

Un usuario de Zcash puede hacer transacciones "transparentes" (visibles, como Bitcoin) o "shielded" (privadas, como Monero). 

Esa flexibilidad la hace más aceptable para reguladores e instituciones. Podés compartir una "view key" con tu contador o el exchange para probar que la transacción fue legítima, sin perder custodia.

El resultado es que Zcash está teniendo un boom explosivo en 2026. Subió más del 400% desde septiembre de 2025. El fondo Grayscale tiene un producto financiero regulado con más de 123 millones de dólares en activos bajo gestión. 

Multicoin Capital, uno de los fondos cripto más grandes del mundo, reveló una posición fuerte en Zcash, presentándolo como "protección contra impuestos a la riqueza y vigilancia estatal". Robinhood lo listó. Hay un ETF pendiente de aprobación.

Pero hay una trampa. En 2025, **la firma de análisis Arkham Intelligence desanonimizó más del 53% de las transacciones de Zcash.** No rompió la criptografía — simplemente aprovechó que la mayoría de los usuarios operaban con transacciones transparentes.

# El segundo frente: sistemas operativos y hardware

Hasta acá contamos la ofensiva regulatoria contra los servicios cripto. Pero hay otro frente, más profundo y menos visible, que va contra la infraestructura misma en la que se corre el software.

**Windows 11 obligó a que todas las computadoras nuevas tengan un chip llamado TPM 2.0 (Trusted Platform Module).** 

El chip permite verificar que el sistema no fue "modificado". En teoría, es una función de seguridad. En la práctica, es también una función de control: Microsoft y los fabricantes pueden certificar qué software es "confiable" y cuál no.

**En 2024, Microsoft anunció Windows Recall, una función que hace capturas de pantalla continuas de todo lo que hacés en tu computadora, con inteligencia artificial que indexa el contenido para que sea buscable después.** 

La reacción pública fue tan negativa que Microsoft pausó el lanzamiento, pero la relanzó como opción activable. La infraestructura ya está en tu computadora.

**Apple** ya había implementado en **2021** una función similar, planeada para escanear fotos en el iPhone en busca de material de abuso infantil. **Se llamaba "CSAM detection"**. Retrocedieron por presión pública. Pero la tecnología existe, y quedó lista para reactivarse. 

**Google** puede **desinstalar apps remotamente de cualquier teléfono Android vía Play Protect.** Su API Play Integrity hace que cada vez más apps se nieguen a correr en teléfonos con root o sistemas operativos alternativos.

En **Europa** hay una **propuesta** llamada **Chat Control** que, si se aprueba, **obligaría a todas las apps de mensajería a escanear el contenido antes de encriptarlo**. 

Signal ya anunció que se retiraría de la Unión Europea antes de aceptarlo. WhatsApp lo mismo. Fue rechazada dos veces en el Parlamento Europeo, pero **la Comisión Europea la sigue reimpulsando.**

*(La implicancia para Monero es directa: en un mundo donde el sistema operativo puede negar la ejecución de software "no autorizado", una wallet de Monero podría literalmente no poder abrirse en un iPhone o una Windows del futuro).*

Todos los procesadores modernos, además, tienen áreas seguras que el usuario no puede inspeccionar: **Intel Management Engine, AMD Platform Security Processor, Apple Secure Enclave. Son firmware** corriendo dentro del CPU que teóricamente podrían hacer cualquier cosa. **Nadie sabe exactamente qué hacen. Confiamos porque no hay opción.**

## La resistencia: Linux, hardware libre y comunidades técnicas

Frente a esto, hay una contra-cultura técnica que sigue construyendo alternativas.

Linux es el sistema operativo libre por excelencia. Es código abierto: cualquiera puede auditarlo, modificarlo, compilarlo. No podés prohibir Linux sin destruir la infraestructura básica de internet. 

## Distribuciones específicas orientadas a privacidad:

**Tails**: un Linux que corre desde un pendrive, sin dejar rastros en la computadora. Usado por periodistas, activistas y disidentes en todo el mundo.\
**Qubes OS**: sistema que separa cada aplicación en una máquina virtual distinta, para limitar el daño en caso de compromiso.\
**Whonix**: enruta todo el tráfico a través de Tor.\
**GrapheneOS**: versión de Android sin Google, corriendo en teléfonos Pixel (paradojicamente). 

### Del lado del hardware:

**RISC-V**: arquitectura de procesador abierta, alternativa a Intel/AMD/ARM. Todavía chica y experimental.\
**Talos II y Blackbird de Raptor Computing**: computadoras basadas en procesadores IBM Power sin Management Engine, completamente auditables.\
**Purism Librem**: laptops con interruptores físicos para desconectar cámara y micrófono.\
**Framework**: laptops modulares, reparables por el usuario, con soporte oficial para Linux.

Son mercados chicos, más caros que el mainstream.

# Al final, todo este debate tiene una pregunta filosófica de fondo que evitamos hacernos como sociedad.

**¿Debe existir un espacio donde una persona pueda mover dinero, comunicarse, o simplemente pensar, sin que un tercero — sea un estado, una corporación o un algoritmo — pueda observar?**

Durante los últimos siglos, la respuesta fue sí. El efectivo era privado. Las cartas iban selladas. Las conversaciones en el bar no quedaban grabadas. El derecho a la privacidad estaba inscrito en la infraestructura misma del mundo.

En las últimas dos décadas, esa infraestructura cambió. Cada correo, cada mensaje, cada pago, cada búsqueda, cada paso está registrado en alguna base de datos. Y quienes controlan esas bases están, cada vez más, obligados a compartir su contenido.

Lo que se está definiendo, silenciosamente, en batallas de licencias, actualizaciones de software, propuestas de regulación y sanciones a desarrolladores, es qué tipo de sociedad vamos a habitar en veinte años. 

Una donde la privacidad es un derecho que ejercen los que saben, o una donde es un lujo del pasado.

La gran mayoría de la gente no se está enterando.

Este artículo se escribe para que, al menos, podamos elegir con información. 

Nota: este artículo es divulgativo y no constituye asesoramiento financiero ni legal. La regulación cripto y las tecnologías descritas cambian rápidamente. Verificá el estado actual antes de tomar cualquier decisión operativa. Las herramientas mencionadas tienen usos legítimos e ilegítimos; cada quien es responsable del uso que le dé y de las leyes aplicables en su jurisdicción.
