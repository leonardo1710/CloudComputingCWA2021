---
lang: de-DE
title: 07.1 Arbeitsauftrag - Service Monitoring
sidebar: auto
---

# {{ $frontmatter.title }}

## Aufgabenstellung
* Setup von Prometheus Monitoring-Tool
* Mit Prometheus Docker Container analyisieren
* Prometheus kennenlernen (Funktionen ausprobieren)

## Tutorial
Folgendes Tutorial ist zu machen: [Docker Setup mit Prometheus](https://docs.docker.com/config/daemon/prometheus/)

### Hinweise zum Tutorial
**Start von Prometheus**
::: warning Start von Prometheus
Darauf achten, dass folgendes Snippet korrekt eingegeben wird:
``` shell
docker service create --replicas 1 --name my-prometheus --mount type=bind,source=/tmp/prometheus.yml,destination=/etc/prometheus/prometheus.yml --publish published=9090,target=9090,protocol=tcp prom/prometheus
```
:::

Alternativ kann in dem Folder, in dem ihr das `prometheus.yml` File erstellt habt, ein `Dockerfile` angelegt werden mit folgendem Inhalt:
``` dockerfile
FROM prom/prometheus
ADD prometheus.yml /etc/prometheus/
```
Welches anschließend wie gewohnt mittels Docker ausgeführt wird:

``` shell
docker build -t my-prometheus .
docker run -p 9090:9090 my-prometheus
```

## Abgabe
* Learning Diary auf Moodle
* Inhalte: Setup-Schritte und Erkenntnisse beim Ausprobieren von Prometheus (Text, Screenshots, Lessons learned) 