---
lang: de-DE
title: 09 Arbeitsauftrag Projekttage - Cloud Migration Case Study
sidebar: auto
---

# {{ $frontmatter.title }}

## Aufgabenstellung
* Ausarbeitung der Case Studies (eine je Gruppe)
  * Details siehe Punkt "Was soll recherchiert werden?"
  * Links für mögliche Ansätze zur Recherche findet ihr bei den Case Studies
* Erstellung einer Präsentation der Punkte
* Länge Präsentation: mind. 20 Minuten
* Präsentation am 14.1.
* Abgabe der Präsentation auf Moodle


## Case Studies

### 1 Netflix - Bare Metal to Cloud
Der Anbieter von Online-Inhalten Netflix kann durch den Einsatz von **Amazon Web Services (AWS)** einen nahtlosen globalen Service unterstützen. AWS ermöglicht Netflix die schnelle Bereitstellung von Tausenden von Servern und Terabytes an Speicherplatz innerhalb von Minuten. Nutzer können Netflix-Sendungen und -Filme von überall auf der Welt streamen, auch im Internet, auf Tablets oder auf mobilen Geräten.

#### Links
[Completing the Netflix Cloud Migration](https://about.netflix.com/en/news/completing-the-netflix-cloud-migration)

[Case study of Netflix using AWS Cloud](https://www.linkedin.com/pulse/case-study-netflix-using-aws-cloud-abhinav-singh)

[Netflix Case Study](https://aws.amazon.com/de/solutions/case-studies/netflix-case-study/)

[Netflix auf AWS - Zusammenfassung](https://aws.amazon.com/de/solutions/case-studies/netflix/)

[Netflix: Multi-Regional Resiliency and Amazon Route 53 (VIDEO)](https://www.youtube.com/watch?v=WDDkLOT8SCk&list=PLhr1KZpdzukdeX8mQ2qO73bg6UKQHYsHb&index=12)

[Netflix & AWS Real World Example (VIDEO)](https://www.youtube.com/watch?v=uLGYO09eCzo)

### 2 Spotify - Bare Metal to Cloud
Spotify ist ein hervorragendes Beispiel für das neue Zeitalter der Unternehmensskalierung. Ende 2008 startete das Unternehmen seinen Musik-Streamingdienst, Anfang 2011 wurden 1 Million Kunden erreicht und heute gibt es in 79 Märkten 248 Millionen monatlich aktive Nutzer, die auf über 50 Millionen Songs und Podcasts zugreifen. Spotify kündigte bereits 2016 an, dass es ganz auf die **Google Cloud Platform (GCP)** setzen würde, und investierte über einen Zeitraum von drei Jahren 450 Millionen US-Dollar (343 Millionen Euro).

#### Links
[Customer Journey Spotify](https://cloud.google.com/customers/spotify)

[How Spotify migrated everything from on-premise to Google Cloud Platform](https://www.computerworld.com/article/3427799/how-spotify-migrated-everything-from-on-premise-to-google-cloud-platform.html)

[Shoot For The Clouds: How Spotify Dominates The Market](https://www.softwareadvisoryservice.com/en/case-studies/shoot-for-the-clouds-how-spotify-dominates-the-market/)

[Spotify's Journey to the Cloud (Cloud Next '18) VIDEO](https://www.youtube.com/watch?v=5aBORQim-KM)


### 3 Waze - Cloud to Multi-Cloud
Waze (gegründet 2006; 2013 von Google übernommen) ist eine GPS-fähige Navigationsanwendung, die anhand von Echtzeit-Standortdaten der Nutzer und von ihnen übermittelten Berichten optimierte Routen vorschlägt. Obwohl Waze sehr früh in die Cloud wechselte, führte das schnelle Wachstum schnell zu Produktionsproblemen, die schmerzhafte Rollbacks, Engpässe und andere Komplikationen verursachten. Das Unternehmen musste einen Weg finden, um schnelleres Feedback an die Benutzer zu erhalten und gleichzeitig die Produktionsprobleme zu mildern oder zu beseitigen. Waze entschied sich für eine Architektur über mehrere Cloud-Anbieter – **Google Cloud Platform und Amazon Web Services (AWS)** -, um die Ausfallsicherheit seiner Produktionssysteme zu verbessern…

#### Links
[Multi-Cloud continuous delivery using Spinnaker at Waze](https://cloud.google.com/blog/products/gcp/guest-post-multi-cloud-continuous-delivery-using-spinnaker-at-waze)

[Waze: migrating a multi million user app to Google Cloud Platform (Google Cloud Next '17) VIDEO](https://www.youtube.com/watch?v=woazNHiP-r0)


### 4 GitLab - Cloud to Cloud
GitLab (gegründet 2011) ist ein Open-Core-Unternehmen, das eine einzige Anwendung anbietet, die den gesamten DevOps-Lebenszyklus für mehr als 100.000 Unternehmen unterstützt.
Die Kernanwendung von GitLab ermöglicht es Software-Entwicklungsteams, in Echtzeit an Projekten zusammenzuarbeiten und dabei sowohl Übergaben als auch Verzögerungen zu vermeiden. GitLab wollte die Leistung und Zuverlässigkeit verbessern, die Entwicklung beschleunigen und sie gleichzeitig so nahtlos, effizient und fehlerfrei wie möglich gestalten. Obwohl sie **Microsoft Azure** als großartigen Cloud-Anbieter anerkannten, waren sie der festen Überzeugung, dass Kubernetes von **Google Cloud Platform** die Zukunft sei… 

#### Links
[GitLab’s journey from Azure to GCP](https://about.gitlab.com/blog/2019/05/02/gitlab-journey-from-azure-to-gcp/)

[GitLab: Helping customers accelerate digital transformation](https://cloud.google.com/customers/gitlab)

[Blog Beitrag - We’re moving from Azure to Google Cloud Platform](https://about.gitlab.com/blog/2018/06/25/moving-to-gcp/)

[GitLab's Journey From Azure to GCP and How We Made it Happen (Cloud Next '19) VIDEO](https://www.youtube.com/watch?v=Ve_9mbJHPXQ&t=267s)


## Was soll recherchiert werden?
* Hintergründe - Unternehmen 
  * Seit wann gibt es das Unternehmen?
  * Welche Dienstleistungen/Services/Produkte bietet das Unternehmen?
  * Marketshare? (ca.)
* Warum wurde der Schritt in die Cloud gewagt? Bzw. warum wurde eine andere Cloud Migration Strategie gewählt?
  * IST-Stand vor der Migration 
    * Datacenter
    * anderer Cloud Service Provider
    * Services
    * Daten 
    * …
  * Probleme? Herausforderungen? 
  * Erwartungen an die Cloud Migration Strategie? Was wollte das Unternehmen mit dem Schritt erreichen? Ziele?
* Wie wurde die Migration durchgeführt? Prozess?
* Welche Migrationsstrategie wurde verfolgt? (Lift & Shift, Replatforming, App Modernization, Rewriting, …)
* Welche Services der Cloud werden nun genutzt? (VPC, VPN, Container, Container Orchestrierung, VM, Storage, …)
* Architektur der genutzten Cloud Services
* Welche/s Deployment Modell/Modelle? (public, private, hybrid, multi)
* Lessons Learned des Unternehmens
* Eure Lessons Learned aus der Recherche


## Abgabe
* Abgabe der Präsentation auf [Moodle](https://moodle.fh-campuswien.ac.at/mod/assign/view.php?id=502148)