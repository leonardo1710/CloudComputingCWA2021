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

!!! tldr "In a hurry?"
    **Datacenter components:**
    
    - Server werden in Racks und Reihen angeordnet
    - Redundante Kühl-, Brandschutz- und Energieversorgungssysteme
    - Some datacenters provide internet connectivity.
    - Eco friendliness is becoming a factor.

Wie bereits erwähnt, werden Server normalerweise in Server-Racks gestapelt. Die Server in einem Rechenzentrum sind meist in Reihen angeordnet. Dies dient auch der **einfacheren Verkabelung** (meist versteckt in den Bodenplatten). 

Da Server eine große Menge an Wärme erzeugen, darf auch ein **Kühlungssystem** nicht fehlen. Für die Kühlung gibt es eine Vielzahl von Möglichkeiten, einige sind umweltfreundlicher als andere. Einige Rechenzentren entscheiden sich zum Beispiel für die Installation von Kaltluftschächten, bei denen kalte Luft zwischen zwei Rackreihen gepumpt und durch die Racks gepresst wird, um die Server zu kühlen.

![Datacenter in CERN](https://cds.cern.ch/images/CERN-CO-1207154-01/file?size=large)
*CERN Datacenter. Source: [CERN](https://home.cern/science/computing/data-centre)*

Neben der Kühlung ist auch die **Sicherheit** von großer Bedeutung. Je nach Umfeld ergeben sich unterschiedliche Sicherheitsanforderungen. So wird u.a. der Zutritt zu den Server Räumen kontrolliert. Je sicherheitskritischer desto mehr Vorkehrungen werden getroffen. Beispielsweise werden manche Server auch in Bunkern untergebracht, die Druckwellen, Hitze und Strahlung fernhalten sollen.

Auch dem **Brandschutz** wird ein besonderer Stellenwert eingeräumt. Dabei werden Löschanlagen bzw. Brandabschottungen zum Minimieren von Hardwareschäden installiert.

Alle **kritischen Systeme** in einem Rechenzentrum (Stromversorgung, Kühlung, Brandbekämpfungssysteme) sind in der Regel **redundant** ausgelegt, da der Ausfall eines dieser Systeme einen vollständigen Ausfall des Rechenzentrums bedeuten kann. Die Betreiber von Rechenzentren verfügen in der Regel auch über weitere Notfallpläne (z. B. ein USV-System (Batterie), Dieselgeneratoren, Tankwagen in Bereitschaft, eine Hotline für die Feuerwehr), um sicherzustellen, dass das Rechenzentrum die erforderliche Betriebszeit einhalten kann.

## Aufbau der Netzwerkinfrastruktur (Verbindung zum Internet)


!!! tldr "In a hurry?"
    **Internet:**
    
    - IP ranges are advertised using BGP.
    - Providers connect direcly or using internet exchanges.
    - 16 global providers form the backbone of the internet (tier 1).

Sobald die physische Infrastruktur eingerichtet ist, stellt sich auch die Frage, wie eine Verbindung zum Internet hergestellt werden kann. Wie bereits erwähnt, können Netze sehr kompliziert sein, und es gibt keine Einheitslösung für alle. 

![Diagramm eines Rechenzentrum Netzwerkaufbaus](https://electronicspost.com/wp-content/uploads/2016/05/5.3.png)
*Möglicher Aufbau einer Netzwerkinfrastruktur im Rechenzentrum Source: [Electronicspost](https://electronicspost.com/what-does-a-data-center-do/)*

Normalerweise werden Server-Racks mit einem Top-of-Rack (ToR) Switch ausgestattet [Layer 2 (Ethernet)](https://en.wikipedia.org/wiki/Data_link_layer) um eine Verbindung zwischen den Servern zu gewährleisten. Mehrere ToR Switches können dabei entweder an weitere Switches oder an einen Router geschalten werden. Der sogenannte Border Router [Layer 3 (IP)](https://en.wikipedia.org/wiki/Network_layer) ermöglicht dabei die Verbindung von externen Kunden mit internen Hosts über bspw. das Internet.

> **Netzwerktechnik Grundlagen**
> 
> Die Grundlagen der Netzwerkinfrastruktur werden in der
<a href="/CloudComputingCWA2021/lectures/02-networking-intro/02-networking-intro" class="nav-link action-button">Einheit 2 →</a> noch im Detail besprochen.


## Software Stack

<audio preload="none" controls src="audio/Software%20Stack.mp3"></audio>

!!! tldr "In a hurry?"
    **Software stack:**
    
    - Virtualization.
    - Operating system.
    - Application runtime.
    - Application.

The purpose of all this is, of course, to run an application. Each server hosts an operating system which is responsible for managing the hardware. Operating systems provide a simplified API for applications to do hardware-related operations such as dealing with files or talking to the network. This part of the operating system is called the kernel. Other parts form the userland. The userland includes user applications such as a logging software. Specifically on Linux and Unix systems the userland also contains a package manager used to install other software.

Modern x86 server CPUs (and some desktop CPUs) also have a number of features that help with virtualization. Virtualization lets the server administrator run multiple guest operating systems efficiently and share the server resources between them.

!!! tip "Did you know?"
    You can find out if an Intel CPU supports hardware virtualization by looking for the `VT-x` feature on the [Intel ARK](https://ark.intel.com/content/www/us/en/ark.html#@Processors). Unfortunately AMD does not have an easy to use list but you can look for the `AMD-V` feature on AMD CPUs.

!!! note "Note"
    Virtualization is different from containerization (which we will talk about later) in that with virtualization each guest operating system has its own kernel whereas containers share a kernel between them.
    
    ![An image showing the difference between containers and virtual machines. At the bottom of the image there is a box labeled "Hardware". On top of the hardware there is a colored box symbolizing the virtual machine. Inside the virtual machine there is another box labeled "Kernel", and on top of that there are two boxes labeled "Application. On the other side there is a similar setup on top of "Hardware", but in this case only the "Application" box is highlighted symbolizing a container.](/lectures/1-cloud-intro/virtualization-containers.svg)

There is one more important aspect of finally getting an application to run: the runtime environment. Except for a few rare occasions applications need a runtime environment. If the application is compiled to machine code they still need so-called shared libraries. Shared libraries are common across multiple applications and can be installed and updated independently from the application itself. This makes for a more efficient update process, but also means that the right set of libraries need to be installed for applications.

If the applications are written higher level languages like Java, Javascript, PHP, etc. they need the appropriate runtime environment for that language.

One notable exception to the runtime environment requirement is the programming language [Go](https://golang.org/). Go compiles everything normally located in libraries into a single binary along with the application. This makes it exceptionally simple to deploy Go applications into containers.

## The Cloud

<audio preload="none" controls src="audio/The%20Cloud.mp3"></audio>

!!! tldr "In a hurry?"
    **Typical cloud features:**
    
    - API
    - Dynamic scaling
    - Can be classified into IaaS, PaaS and SaaS
    - IaaS service offerings typically include: 
        - Virtualization.
        - Network infrastructure.
        - Everything required to run the above.
    - PaaS service offerings typically include a managed service ready to be consumed by a developer.
    - SaaS service offerings typically include a managed service ready to be consumed by a non-technical end user.

All of the previously discussed things were available before the &ldquo;cloud&rdquo;. You could pay a provider to give you access to a virtual machine where you could run your applications. What changed with the cloud, however, is the fact that you no longer had to write a support ticket and everything became self service.

The cloud age started with an infamous e-mail from [Jeff Bezos](https://en.wikipedia.org/wiki/Jeff_Bezos) to his engineers in 2002 forcing them to use APIs to exchange data between teams. The exact e-mail is no longer available but it went along these lines:

> 1) All teams will henceforth expose their data and functionality through service interfaces.
> 
> 2) Teams must communicate with each other through these interfaces.
>
> 3) There will be no other form of interprocess communication allowed: no direct linking, no direct reads of another
> team’s data store, no shared-memory model, no back-doors whatsoever. The only communication allowed is via service
> interface calls over the network.
> 
> 4) It doesn’t matter what technology is used. HTTP, Corba, Pubsub, custom protocols — doesn’t matter.
> 
> 5) All service interfaces, without exception, must be designed from the ground up to be externalizable. That is to
> say, the team must plan and design to be able to expose the interface to developers in the outside world. No exceptions.
>
> 6) Anyone who doesn’t do this will be fired.

This marked the beginning of Amazon Web Services the first and also the most successful public cloud offering. The first public release of AWS was in 2004 with SQS their message queue service, and got completely overhauled in 2006 where the
Elastic Compute (EC2) and the Simple Storage Service (S3) service made its first public appearance.

The APIs provided by cloud providers allow for a large amount of flexibility. If new servers are needed, they can be launched within a few minutes. If there are too many servers, they can be deleted. The same goes for other services: with the API (and the appropriate billing model) comes flexibility to adapt to change.

The other factor that makes it easy to adapt to change is of course the fact that these services are managed. The cloud customer doesn't need to hire a team of engineers to build a database service, for example, it can be consumed without knowing how exactly the database is set up.

If you want a consice description of what cloud computing is the US National Institute for Standards and Technologies has described cloud computing in [publication 800-145](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-145.pdf) as follows:

> Cloud computing is a model for enabling ubiquitous, convenient, on-demand network access to a shared pool of configurable computing resources (e.g., networks, servers, storage, applications, and services) that can be rapidly provisioned and released with minimal management effort or service provider interaction.

In more detail, NIST has defined the following characteristics:

1. On-demand self-service.
2. Broad network access.
3. Resource pooling.
4. Rapid elasticity.
5. Measured service.

Generally speaking, cloud services can be classified into three categories: Infrastructure as a Service (IaaS) providing virtual machines and network infrastructure, Platform as a Service (PaaS) offering services for developers to use, and Software as a Service (SaaS) offering end-user services. This is also described in the above NIST publication.

![A comparison of different cloud models. With self-managed the customer needs to take care of the application, runtime, operating, system, virtualization, hardware, network, power, cooling, fire suppression, and housing. With IaaS onl the application, runtime, and the operating system. With PaaS the customer only takes care of the application. With SaaS the customer takes care of nothing and only consumes the service.](/lectures/1-cloud-intro/cloud-comparison.svg) 

!!! note
    SaaS will not be discussed in this course.


### Infrastructure as a Service (IaaS)

<audio preload="none" controls src="audio/IaaS.mp3"></audio>

The most basic of cloud service offerings is IaaS. IaaS means that the cloud provider will manage the infrastructure used by the customer. Infrastructure in this sense means the ability to manage (provision, start,stop) virtual machines. In very rare cases some providers also offer &ldquo;bare metal&rdquo; machines in this fashion. However, most bare metal providers do not offer a true IaaS as machines cannot be ordered using an API, have an up-front fee and are billed on a monthly basis.

IaaS also includes the network connectivity to the Internet. Almost all IaaS providers also offer a built-in firewall, virtual private networks (VPC) that can be used to connect virtual machines together without sending the traffic over the Internet, and other network services.

Note that network services can differ greatly. For example, some providers implement private networks on a regional basis while other providers offer private networks that can be used to connect virtual machines that are located in different regions.


### Managed Services (PaaS)

<audio preload="none" controls src="audio/PaaS.mp3"></audio>

!!! tldr "In a hurry?"
    **Managed services:**
    
    - The provider is typically responsible for provisioning, backups, monitoring and restoring the service if needed.
    - Low entry cost.
    - Little in-house know-how required.
    - Vendor lock-in for non-standard services.
    - If problems arise they can be hard to debug.

Apart from offering virtual machines and network infrastructure as a service many cloud providers also offer additional services that are typically used by developers such as managed databases. These services are managed in the sense that the developer does not need to run the operating system and the database software itself. However, the developer has to configure the database such that it works according to the needs of the application. The provider takes over duties like installing the service, making backups, monitoring, and restoring the service in case of an outage.

!!! tip "Did you know?"
    There are purely PaaS providers that do not offer IaaS, only a developer-friendly platform to run software on. Your run of the mill average PHP web hosting provider does qualify if you can order the service using an API. One notable example that rose to prominence is [Heroku](https://www.heroku.com/).
    
The pricing of these managed services varies greatly but they usually follow the cloud model. Most cloud providers offer at least a low cost or even free entry version that has a small markup on top of the IaaS costs. 

The massive benefit of using these managed services is, of course, that you do not need to have in-house knowledge about how to operate them. You don't need an in-house database operator, you *&ldquo;just&rdquo;* need to know how to set up the database in the cloud. This lets your company focus on the core business they are trying to build and outsource the know-how required to build these services on top of the IaaS layer.

As you might imagine managed services also have downsides. Most importantly they present a clear vendor lock-in. This means that if you want to move to a different cloud provider you will have a hard time doing so if you are using one of the more specialized services. In other words the level of standardization across providers matters.

It is also worth mentioning that managed services tend to work well for a large number of customers but a few number of customers can run into hard to debug problems. This debugging difficulty arises out of the inherent opacity of the services: you, the customer, don't see what's happening on the IaaS layer. If a database, for example, fills the available bandwidth may not be notified and are left guessing why your database misbehaves.


## Business Models

<audio preload="none" controls src="audio/Business%20Models.mp3"></audio>

!!! tldr "In a hurry?"
    **Billing models:**
    
    - IaaS is typically priced per-second based on the instance size.
    - PaaS can be priced similar to IaaS but also per-request or data volume.
    - Data volume is typically priced based on usage. Some providers charge for data volume even for internal traffic.

The flexibility of cloud providers comes from their usage-based pricing. This can vary depending on the type of service used. For example, virtual machines (IaaS) is typically priced on a per-second basis. When you start a virtual machine for only 5 minutes you will only pay for 5 minutes of runtime. This lets you optimize the usage costs of the cloud *if* you use **automation** to start and stop machines or services on demand.

Typically the cost savings are realized in these scenarios:

### On-off usage

![A graph showing zero usage with two spikes when the service is used.](/lectures/1-cloud-intro/scaling-on-off.svg)

This usage type is typical for batch processing. Machines are only started when there is a workload (e.g. video conversion, machine learning training job, etc.) 

### Growth usage

![A graph showing exponential growth.](/lectures/1-cloud-intro/scaling-growth.svg)

Projects that see a growth curve often opt to use a cloud provider as well since buying hardware in larger quantities typically takes 2-4 months.

### Sudden spike usage

![A graph showing a sudden usage spike.](/lectures/1-cloud-intro/scaling-spike.svg)

Cloud providers can also be useful if a service encounters a sudden load spike. This is typically the case for webshops around Black Friday and other sales events.

### Periodic spike usage

![A graph showing periodic spikes.](/lectures/1-cloud-intro/scaling-periodic.svg)

Almost every service has usage spikes depending on the time of day. This can be used to scale the service up and down.

### Per-request billing

IaaS services are typically priced based on an allocated amount of resources determined at the start of the virtual machines. Some PaaS services also use this billing model. (Typically Databases as a Service.) Other PaaS services often opt for a per-request or a data volume-based billing approach.

### Cost planning with the cloud

Cost planning is an important part of the job of a cloud architect. Depending on the billing model the cloud provider adopts this can be fairly simple to almost impossible. As a rule of thumb the billing model of larger cloud providers (AWS, Azure, Google Cloud) is more complex than smaller cloud providers (DigitalOcean, Exoscale, Upcloud, etc).

It is worth noting that data transfer is typically charged based on volume. Some cloud providers even charge for internal traffic between availability zones.

### Cost-comparison with on premises systems

One of the most important cases for cost analysis will be the comparison with on premises architecture. It is quite common to create a cost comparison where the investment required for a hardware purchase is compared with the cloud cost over 3 or 5 years.

These comparisons can be quite misleading because they often don't contain any cost attribution for the required work and they also do not use the advantages of the cloud in terms of scaling. Without these factors a hardware purchase will almost always be cheaper when calculated over 5 years and be roughly equal when compared over 3 years. 

## Private vs. Public Cloud

<audio preload="none" controls src="audio/Public%20vs%20Private.mp3"></audio>

!!! tldr "In a hurry?"
    **Private cloud:**
    
    - Hosted on-premises or in the public cloud using only private connections.
    - Large cloud providers offer their services &ldquo;in a box&rdquo; to host yourself.

Most cloud applications will reside on a **public cloud** and be accessible from the Internet. However, for some use cases access over the public Internet is not desirable or even strictly forbidden by laws or regulations. In other cases companies may decide that it is their policy that certain systems must never be connected to the public Internet, or only connect via a self-hosted gateway.

In these cases a **private cloud** is desirable to minimize the risk of cross-contamination or data exposure due to other tenants being on the same infrastructure. Such cross-contamination is not uncommon, for example in recent years there have been a litany of CPU bugs such as [Meltdown and Spectre](https://meltdownattack.com/).

A special form of a private cloud is a cloud offering that is dedicated to a special set of consumers, such as a research cloud with special hardware, or discounted rates for several research organizations or universities. The NIST classifies this as a **community cloud**.

Public cloud providers have extended their offers to address these concerns. Their service offerings now include dedicated hypervisors to mitigate CPU bugs, the ability to [connect the cloud over a non-Internet connection (e.g. MPLS tunnel)](https://aws.amazon.com/directconnect/), or [accessing the cloud API's from a private network](https://aws.amazon.com/blogs/compute/introducing-amazon-api-gateway-private-endpoints/). Some cloud providers even went as far offering a [self-hosted setup](https://aws.amazon.com/outposts/) where the public cloud offering can be brought on-premises.

These features, especially the connectivity-related features, also allow for the creation of a **hybrid cloud** where a traditional infrastructure can be connected to the cloud. This gives a company the ability to leverage the flexibility of the cloud but also keep static / legacy systems for financial or engineering reasons.

While the definitions outlined by NIST and other organizations in this matter are clear, real life rarely is. In a real-world scenario you will find a wide range of mixes comprised from all of the above. To you as a cloud engineer it is more important to understand the benefits and drawbacks of each so you can make a good recommendation depending on the use case.


## Automation

<audio preload="none" controls src="audio/Automation.mp3"></audio>

!!! tldr "In a hurry?"
    **Automation:**
    
    - Documents how a cloud is set up.
    - Gives a reproducible environment.
    - Allows for spinning up multiple copies of the same environment.
    - Not all tools are equal. Some tools allow for manual changes after running them (e.g. Ansible), others don't
      (e.g. Terraform).

As you can see from the previous sections cloud computing doesn't necessarily make it simpler to deploy an application. In this regard setting up a server and not documenting it is the same as setting up a cloud and not documenting it. In the end in both cases modifications will be hard to carry out later since details of the implementation are lost.

It will also be hard to create a near-identical copy of the environment for development, testing, etc. purposes. This is partially due to the lack of documentation, and partially because of the manual work involved. In the past this problem was addressed by *cloning* virtual machines which was an approach with limited success as customizations were hard to make.

The rise of API's brought a much welcome change: automation tools such as Puppet, Ansible and Terraform not only *automate* the installation of a certain software but also *document* how the setup works.

When engineers first go into automation, they tend to reserve a part of the work to be done manually. For example they might use Ansible to create virtual machines and install some basic tools and install the rest of the software stack by hand. This approach is workable where the software stack cannot be automated but should be avoided for software where this is not the case as the lack of automation usually also means a lack of documentation as described above.

Automation tools are also not equally suited for each task. Terraform, for example, expects full control of the infrastructure that is created by it. Manual installation steps afterwards are not supported. This approach gives Terraform the advantage that it can also *remove* the infrastructure it creates. Removing the infrastructure is paramount when there are multiple temporary environments deployed such as a dev or testing environment.

Ansible, on the other hand, allows for manual changes but does not automatically implement a tear-down procedure for the environment that has been created. This makes Ansible environments, and Ansible code harder to test and maintain, but more suited for environments where traditional IT is still a concern.    

## Regulation

!!! tldr "In a hurry?"
    **GDPR:**
    
    - Applies to all companies, world-wide, that handle personal data of EU citizens.
    - Companies must keep track of why and how data is handled.
    - Data subjects have wide ranging, but not unlimited rights to request information, correction and deletion of data.
    - Data breaches have to be reported and may carry a fine.
    - The right of deletion means that backups have to be set up in such a way that data can be deleted.
    
    **CLOUD Act:**
    
    - US authorities can access data stored by US companies in Europe.
    
    **DMCA:**
    
    - Copyright infringements can be solved by sending a DMCA takedown notice to the provider. 
    - Providers have to restore the content if the uploader sends a counter-notification.
    
    **CDA Section 230:**
    
    - Shields providers from liability if their systems host illegal content which they don't know about.
    
    **Privacy Shield and SCC:**
    
    - Privacy Shield was recently abolished and instead cloud providers must now add Standard Contract Clauses to their Terms of Service.
    - The SCC favored by most cloud providers puts the legal liability for any data braches due to US law enforcement requests on the cloud customer (you).

### General Data Protection Regulation (G.D.P.R., EU)

<audio preload="none" controls src="audio/GDPR.mp3"></audio>

The GDPR (or DSGVO in German-speaking countries) is the general overhaul of privacy protections in the EU. The GDPR replaces much of the previously country-specific privacy protections present in the EU.

#### Jurisdiction

The GDPR applies to all companies that deal with the data of EU citizens around the globe. This is made possible by trade agreements previously already in place. All companies that handle the data of EU citizens even if the companies are not located in the EU.

#### Structure

- **Data subject:** the person whose data is being handled.
- **Personal identifiable data:** (PI) data that makes it possible to uniquely identify a data subject. PI can also be
  created when previously non-PI data is combined to build a profile.
- **Data controller:** The company that has a relationship with the data subject and is given the data for a certain
  task.
- **Data processor:** A company that processes data on behalf of the data controller. The data processor must have a
  **data processing agreement** (DPA) with the data controller. IaaS and PaaS cloud providers are data processors.
  
#### Purposes of data processing

One new limitation the GDPR brings to privacy regulation is the fact that there are fundamental limits to data processing. You, the data controller, cannot simply collect data for one purpose and then use that same data for another purpose. The purposes to which data is collected have to be clearly defined and in several cases the data subject has to provide their explicit consent. (In other words it is not enough to add a text to the signup form that says that they agree to everything all at once.)

Legal grounds to data processing are detailed in
[Article 6 of the GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e1888-1-1).
These are:

1. If the data subject has **given their explicit consent** to process their data for a specific purpose.
2. If the processing is necessary to **perform a contract** with the data subject. In other words you do not need additional consent if you are processing data in order to fulfill a service to the data subject.
3. To perform a **legal obligation**. For example, you have to keep an archive of your invoices to show in case of a tax audit.
4. To protect the **vital interests of the data subject or another natural person**.
5. To perform a task which is in the **public interest**, or if an official authority has been vested in the data controller.
6. For the purposes of a **legitimate interest** of the data controller (with exceptions). This might seem like a catch-all but courts have defined legitimate interests very narrowly. The data controller must show that the legitimate interest exists and cannot be achieved in any other way than with the data processing in question. One good example for the legitimate interests clause would be a webshop that is collecting data about their visitors in order to spot fraudulent orders.

#### Data subjects' rights

[Chapter 3 of the GDPR](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e2161-1-1)
deals with the rights of the data subject. These are:

1. **The right to be informed.**
   This right lets the data subject request several pieces of information:
     - The purposes of processing.
     - The categories of personal data concerned.
     - Who received their data, in particular recipients in third countries or international organisations.
     - How long the data will be stored.
     - The right to request modification, deletion or restricting the processing of the personal data in question.
     - The right to log a complaint.
     - The source of the personal data if not provided by the data subject themselves.
     - If and how automated decision-making, profiling is taking place.
2. **The right to fix incorrect data.**
3. **The right of deletion.** *&ldquo;The right to be forgotten.&rdquo;* This right puts several architectural limits on cloud systems as, for example, backups must be built in such a way that deletion requests are repeated after a restore. Note that this right is not without limits, legal obligations, for example, override it.
4. **The right to restrict processing.** If a deletion cannot be requested the data subject can request that their data should only be processed to the purposes that are strictly required.
5. **The right to data portability.** The data subject has to be provided a copy of their data in a machine-readable form.
6. **The right to object automated individual decision-making and profiling.**

#### Data breaches

[Chapter IV Section 2](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e3373-1-1) is probably the first legislation around the world that explicitly requires security of data processing from companies that handle personal data. [Article 33](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32016R0679&from=EN#d1e3434-1-1) of this chapter specifically requires that data breaches must be disclosed to the supervisory authorities. Supervisory authorities in turn have the right to impose fines up to 4% or 20.000.000 &euro; of the global revenue of a company.

This means that companies can no longer sweep data breaches under the rug and must spend resources to secure their data processing. In the scope of the cloud this means that our cloud environment has to be set up in a secure way to avoid data breaches.

### Clarifying Lawful Overseas Use of Data Act (C.L.O.U.D., 2018, USA)

<audio preload="none" controls src="audio/CLOUD-act.mp3"></audio>

The CLOUD Act, or House Rule 4943 is the latest addition to the US legislation pertaining to cloud providers. This act says that **a cloud provider must hand over data to US authorities if requested even if that data is stored in a different country.**

This act has been widely criticized and is, according to several legal scholars, in contradiction of the GDPR. The large US cloud providers have opened up subsidiaries in the EU in order to try and shield their european customers from this act and a few purely EU cloud providers have also capitalized on this. It remains to be seen how effective this move is. 

### Digital Millennium Copyright Act (D.M.C.A., 1998, USA)

<audio preload="none" controls src="audio/DMCA.mp3"></audio>

The Digital Millenium Copyright Act clarifies how copyright works in the USA. Since the USA is part of the WIPO copyright treaty and a significant amount of providers are based in the USA nowadays all countries align themselves with the DMCA when it comes to dealing with online copyright infringement.

Title II of the DMCA creates a safe harbor for online service providers against copyright infringement committed by their users. However, they have to remove infringing content as soon as they are properly notified of it via a DMCA takedown notice. The author of a DMCA takedown notice must swear by the penalty of perjury that they are or are acting on behalf of the copyright owner. (If they were to make this pledge in bad faith they could end up in prison.)
 
If the DMCA takedown notice has been sent erroneously the original uploader is free to send a counter-notification, also swearing under the penalty of perjury. In this case the provider notifies the original sender and restores the content. The original sender then has to take the uploader to court to pursue the matter further.

### Communications Decency Act, Section 230 (C.D.A., 1996, USA)

<audio preload="none" controls src="audio/CDA.mp3"></audio>

This section of of the CDA is very short:

> No provider or user of an interactive computer service shall be treated as the publisher or speaker of any information provided by another information content provider.

To someone not well versed in US legal lingo this may be sound like gibberish, but it is, in fact, one of the most important pieces of legislation pertaining to operating platforms in the cloud.

In US legal history the speaker or publisher of certain information is responsible for the information being provided. Before the CDA any provider hosting illegal content would be responsible for said content. The CDA changed that by shielding providers from liability. This included web hosting providers as well as newspapers that had a user content section.

The CDA is not limitless, providers still have to remove infringing content if notified. They may also employ moderation
proactively.

### The fall of Privacy Shield and Standard Contract Clauses (2020, EU-US)

<audio preload="none" controls src="audio/Privacy%20Shield.mp3"></audio>

The Privacy Shield agreement (2016) was the successor to the failed International Safe Harbor Privacy Principles framework and was intend to protect the privacy of EU citizens when using US services or their data is transferred to the USA.

The Privacy Shield has been enhanced in 2017 by the EU–US Umbrella Agreement which fixed many of the issues with the Privacy Shield.

Unfortunately for cloud users, Privacy Shield has been [invalidated by the CJEU](https://noyb.eu/en/cjeu). This decision means that you, as a European cloud user, can no longer *automatically* use a US-governed cloud provider without accepting liability.

Instead, US data processors have to use one of three standard contract clauses approved by the EU.

The first SCC is [Decision 2001/497/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/HTML/?uri=CELEX:32001D0497&from=en) which states that both parties (you as the cloud user, and the cloud provider) are both jointly and severely liable for any data breaches.

The second SCC is [Decision 2004/915/EC](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A32004D0915) is more business friendly and merely makes sure that both the European party and the non-European party uphold their obligation to handle data with due care and implement protection measures. Shared liability would only apply if the terms of the SCC were breached. While this is a step forward, it is worth noting that this puts the responsibility **on the cloud customer** if the cloud provider breaches the terms by, for example, handing over data to US authorities covertly.

The third SCC is [Decision 2010/87/EU](https://eur-lex.europa.eu/legal-content/en/TXT/?uri=CELEX%3A32010D0087) and was **adopted by Google and AWS**, for example. It creates a safety net for the cloud provider by only requiring them to disclose requests by law enforcement if that would not put criminal liability on them. It also puts any liability for damages on the *cloud user* unless they, for example, went bankrupt. In that case the cloud provider is only responsible for their own operations, not those of the cloud user. In order words, **you the cloud user are responsible for any breaches of data due to US law enforcement requests**.
