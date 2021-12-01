---
lang: de-DE
title: Einführung in Cloud Computing
sidebar: auto
---

<h1>Einführung in Cloud Computing</h1>

Oft wird die Cloud wie folgt beschrieben:

> "The cloud is just somebody else's computer." (Quelle unbekannt)

Die Cloud funktioniert nicht mit Magie - Cloud Computing löst nicht automatisch alle Probleme, die sich durch traditionelle Infrastrukturen ergeben. In dieser Einheit erfahren Sie, wie eine Cloud aufgebaut ist und welche typischen Services sie anbietet, aber auch, welche Fallstricke mit solchen Einrichtungen verbunden sein können.

## Was ist ein Server?

::: tip Zusammenfassung
- Heutzutage entweder x86 or ARM Architektur
- Redundante Hardware
- Flache Formprofile für Server-Racks
- Out-Of-Bounds Management Interface zum Monitoring und Remote Management.
- Energieverbrauch muss berücksichtigt werden
- Der Kauf eines Servers kann lange dauern und stellt eine Vorabinvestition dar.
:::

Der Begriff **Server** hat in der Informatik zwei unterschiedliche Ausprägungen:
- **Server als Software**: ein Computerprogramm, das mit einem Clientprogamm (Client-Server-Architektur) kommuniziert und dabei bestimmte Services zur Verfügung stellt (bspw. Netzwerkverbindung, Auslesen von Files, Verarbeitung von Daten)
- **Server als Hardware**: ein Computer, auf dem ein oder mehrere Serverprogramme laufen

In den 1980er Jahren war der Unterschied zwischen Servern und den typischen Arbeitscomputern noch enorm. Einerseits durch ihr Äußeres (Gewicht, Form), aber auch durch ihre Architektur ([SPARC](https://en.wikipedia.org/wiki/SPARC), [Power](https://en.wikipedia.org/wiki/IBM_POWER_microprocessors)). 
Bei PCs kam vorwiegend die [x86](https://en.wikipedia.org/wiki/X86) Architektur zur Anwendung.

![Der erste Server des WWW am CERN](https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/First_Web_Server.jpg/800px-First_Web_Server.jpg)
*Der erste Server des WWW am CERN. Source: [Wikipedia](https://de.m.wikipedia.org/wiki/Datei:First_Web_Server.jpg)*

Über die Jahre konnte sich die x86 Architektur jedoch auch in der Server-Landschaft durchsetzen. Dadurch wurden die Architekturen von PCs und Servern immer ähnlicher. In der Theorie heißt das, dass eine Kopie einer Maschine erstellt werden kann und auch (ohne aufwendige Anpassungen) auf einem Server laufen könnte.

Eine Ausnahme unter den Architekturen stellt nur die [ARM](https://en.wikipedia.org/wiki/ARM_architecture) Architektur dar, die ab Mitte der 90er Jahre mehr Verwendung fand. Die ARM Architektur ist heute vor allem am Smartphone und Tablet Markt weit verbreitet, da sie energiesparender ist.

> **Energieverbrauch** 
> 
> Aus der Perspektive der Home-PCs Nutzung macht es wahrscheinlich keinen großen Unterschied, ob ein Computer 200 oder 300 Watt verbraucht. Aus der Sicht eines Datacenters, mit mehreren hunderten bis tausenden Servern, kann das Einsparen von wenigen Prozent jedoch enorme Auswirkungen auf die Kosten haben.

Der äußerliche Unterschied von PCs und Servern blieb über die Jahre aber bestehen. Während die meisten Home-PCs als eine Art &ldquo;tower&rdquo; gebaut werden, wird bei Servern eines Datacenters eine flache Form bevorzugt. Das dient dazu, dass mehrere Server in sogenannten **Server-Racks** gestapelt werden können. 

![HP Proliant G5 Server](/docs/src/lectures/01-cloud-intro/g5_server.png)
*HP Proliant G5 Server, der aus dem Rack gezogen wurde. Source: [Wikipedia](https://en.wikipedia.org/wiki/ProLiant#/media/File:Proliant380g5_3.jpeg)*

Server-Racks sind so konzipiert, das ganze Server oder Teile dieser, ausgetauscht werden können, ohne den Betrieb einzuschränken.

Server verfügen auch über ein hohes Maß an **Redundanz**. Während ein Heimcomputer vielleicht nur ein einziges Netzteil hat, verfügen Server in der Regel über zwei, die von verschiedenen Stromeingängen gespeist werden können. Dadurch wird sichergestellt, dass der Server auch dann weiterläuft, wenn eines der beiden Netzteile ausfällt oder einer der beiden Stromeingänge nicht funktioniert.

Meist können Server auch **remote** gewartet werden, selbst wenn die Server ausgeschaltet sind. Diese Funktion wird von unterschiedlichen Herstellern meist unterschiedlich bezeichnet (u.a. Out-of-Bounds-Management Interface, Dell Remote Access Control). Dabei dient das OOBM Interface auch der Überwachung mehrerer tausend Maschinen.

Auch der **Server-Kauf** muss gut geplant werden. Meist neigen größere Unternehmen dazu, dieselbe Hardware über längere Zeiten zu nutzen. Weiters wird auch der Support meist zusätzlich gekauft. Der Kauf eines bestimmten Komponentensatzes oder die Bestellung größerer Mengen von Servern stellt eine logistische Herausforderung dar und kann manchmal bis zu 3-4 Monate dauern. Der Kauf von Hardware ist außerdem eine Vorabinvestition, die bei sich schnell ändernden Anforderungen schwer zu rechtfertigen ist.

## Aufbau eines Datacenter
Da es sich bei der Cloud um das Hosting von Maschinen auf der Hardware von jemand anders handelt, wird in diesem Abschnitt der Aufbau solcher Infrastrukturen genauer beleuchten.

Wie bereits erwähnt, werden Server normalerweise in Server-Racks gestapelt. Die Server in einem Rechenzentrum sind meist in Reihen angeordnet. Dies dient auch der **einfacheren Verkabelung** (meist versteckt in den Bodenplatten). 

Da Server eine große Menge an Wärme erzeugen, darf auch ein **Kühlungssystem** nicht fehlen. Für die Kühlung gibt es eine Vielzahl von Möglichkeiten, einige sind umweltfreundlicher als andere. Einige Rechenzentren entscheiden sich zum Beispiel für die Installation von Kaltluftschächten, bei denen kalte Luft zwischen zwei Rackreihen gepumpt und durch die Racks gepresst wird, um die Server zu kühlen.

![Datacenter in CERN](https://cds.cern.ch/images/CERN-CO-1207154-01/file?size=large)
*CERN Datacenter. Source: [CERN](https://home.cern/science/computing/data-centre)*

Neben der Kühlung ist auch die **Sicherheit** von großer Bedeutung. Je nach Umfeld ergeben sich unterschiedliche Sicherheitsanforderungen. So wird u.a. der Zutritt zu den Server Räumen kontrolliert. Je sicherheitskritischer desto mehr Vorkehrungen werden getroffen. Beispielsweise werden manche Server auch in Bunkern untergebracht, die Druckwellen, Hitze und Strahlung fernhalten sollen.

Auch dem **Brandschutz** wird ein besonderer Stellenwert eingeräumt. Dabei werden Löschanlagen bzw. Brandabschottungen zum Minimieren von Hardwareschäden installiert.

Alle **kritischen Systeme** in einem Rechenzentrum (Stromversorgung, Kühlung, Brandbekämpfungssysteme) sind in der Regel **redundant** ausgelegt, da der Ausfall eines dieser Systeme einen vollständigen Ausfall des Rechenzentrums bedeuten kann. Die Betreiber von Rechenzentren verfügen in der Regel auch über weitere Notfallpläne (z. B. ein USV-System (Batterie), Dieselgeneratoren, Tankwagen in Bereitschaft, eine Hotline für die Feuerwehr), um sicherzustellen, dass das Rechenzentrum die erforderliche Betriebszeit einhalten kann.

## Aufbau der Netzwerkinfrastruktur (Verbindung zum Internet)

Sobald die physische Infrastruktur eingerichtet ist, stellt sich auch die Frage, wie eine Verbindung zum Internet hergestellt werden kann. Wie bereits erwähnt, können Netze sehr kompliziert sein, und es gibt keine Einheitslösung für alle. 

![Diagramm eines Rechenzentrum Netzwerkaufbaus](https://electronicspost.com/wp-content/uploads/2016/05/5.3.png)
*Möglicher Aufbau einer Netzwerkinfrastruktur im Rechenzentrum Source: [Electronicspost](https://electronicspost.com/what-does-a-data-center-do/)*

Normalerweise werden Server-Racks mit einem Top-of-Rack (ToR) Switch ausgestattet [Layer 2 (Ethernet)](https://en.wikipedia.org/wiki/Data_link_layer) um eine Verbindung zwischen den Servern zu gewährleisten. Mehrere ToR Switches können dabei entweder an weitere Switches oder an einen Router geschalten werden. Der sogenannte Border Router [Layer 3 (IP)](https://en.wikipedia.org/wiki/Network_layer) ermöglicht dabei die Verbindung von externen Kunden mit internen Hosts über bspw. das Internet.

> **Netzwerktechnik Grundlagen**
> 
> Die Grundlagen der Netzwerkinfrastruktur werden in der
<a href="/CloudComputingCWA2021/lectures/02-networking-intro/02-networking-intro" class="nav-link action-button">Einheit 2 →</a> noch im Detail besprochen.


## Software Stack

## Die Cloud

## Service Modelle

### Infrastructure as a Service (IaaS)

### Managed Services (PaaS)

## Business Models

### On-off usage

### Growth usage

### Sudden spike usage

### Periodic spike usage

### Per-request billing

### Kostenplanung in der Cloud

### Vergleich On-Premises und Cloud

## Deployment Modelle

## Automation
