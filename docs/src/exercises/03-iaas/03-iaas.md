---
lang: de-DE
title: 03 Arbeitsauftrag - IaaS und Vorbereitung VCS
sidebar: auto
---

# {{ $frontmatter.title }}

## Test Images

1
![An image](./img/create_vm.png)

2
<img :src="$withBase('./img/create_vm.png')" alt="foo">


## 1. Prerequisites
- [Studierenden Account](https://azure.microsoft.com/de-de/free/students/) bei Microsoft Azure anlegen

## 2. [Lernpfad](https://docs.microsoft.com/de-de/learn/paths/cmu-cloud-computing-how-cloud-works/) zu Virtualisierung von Microsoft
In Gruppen:
- Modul [Grundlegendes zur Virtualisierung](https://docs.microsoft.com/de-de/learn/modules/cmu-virtualization-developer/) abschließen
- (Optional) [Freigabe von Cloudressourcen](https://docs.microsoft.com/de-de/learn/modules/cmu-share-cloud-resources/) abschließen
- Je Gruppe:
  - [Virtualisieren der Rechenleistung](https://docs.microsoft.com/de-de/learn/modules/cmu-virtualize-computing-power/) - Gruppe 1
  - [Virtualisieren von Arbeitsspeicher](https://docs.microsoft.com/de-de/learn/modules/cmu-virtualize-memory/) - Gruppe 2
  - [Virtualisieren der E/A](https://docs.microsoft.com/de-de/learn/modules/cmu-virtualize-input-output/) - Gruppe 3
  - [Speicher- und Netzwerkvirtualisierung](https://docs.microsoft.com/de-de/learn/modules/cmu-storage-network-virtualization/) - Gruppe 4
- Jede Gruppe stellt in der kommenden Einheit (**10.12.2021**) ihr Lernmodul vor

## 3. VMs in Azure

### Azure Command Line Interface (CLI) öffnen
Zuerst auf Azure einloggen. 

Entweder:
- übers Webinterface öffnen (rechts oben "Cloud Shell")
![CLI öffnen](/img/open_cli.png)
- oder in eigenem [Tab](https://shell.azure.com/bash)

Danach `Bash Shell` auswählen und ggf. `Speicher erstellen` klicken. 

### Resource Group erstellen

Eine Resource Group wird über das Azure CLI mit dem Command `az group-create` erstellt. Mittels `--name` wird ein Name für die Ressourcen Gruppe vergeben und mittels `--location` kann eine bestimmte Availability Zone ausgewählt werden. Theoretisch kann hier jede Availability Zone von Azure gewählt werden, es macht aber Sinn, eine Zone so nah wie möglich zu wählen, um **Latenzzeiten** vorzubeugen.

In der Shell:
``` shell
az group create --name myResourceGroup --location westeurope
```

![Created Resource Group](/img/create_resource_group.png)


::: tip Liste Availability Zones

Eine Liste möglicher Zonen von Azure findet man bspw. hier: [Location Shortnames Azure](https://azuretracks.com/2021/04/current-azure-region-names-reference/)
:::

### VM erstellen
Zum Erstellen einer **VM** in einer bestimmten **Resource Group** wird im Azure CLI der `az vm create` Command verwendet. 

``` shell
az vm create \
  --resource-group leonsResourceGroup \
  --name leonsVM \
  --image UbuntuLTS \
  --admin-username leon \
  --generate-ssh-keys
```
  * `--resource-group` = Name der vorher erstellten Resource Group
  * `--name` = Name der VM
  * `--image` = gewünschtes OS Image
  * `--admin-username` = Admin User (bspw. für SSH wichtig)
  * `--generate-ssh-keys` = automatisch SSH Keys generieren und in die Default Location speichern (~/.ssh)


![Create VM](/img/create_vm.png)

Wurde die VM erfolgreich angelegt, sollte das Ergebnis in der Shell ca. so aussehen:

![VM created](/img/create_vm_success.png)

::: tip VM IP-Adresse
  Mit der **publicIpAddress** kann später auf die VM zugegriffen werden. Diese muss man sich jedoch nicht merken. Sie kann auch mit dem Command:
  ``` shell
  az vm list-ip-addresses --resource-group myResourceGroup --name myVM --output table
  ``` 
  Command abgerufen werden.
:::

### VM starten und stoppen

Auch der Start und Stop von virtuellen Maschinen geht relativ einfach mittels einer Commandozeile.

**Der Start:**
```shell
az vm start --resource-group leonsResourceGroup --name leonsVM
```

**Der Stop:**
``` shell
az vm stop --resource-group leonsResourceGroup --name leonsVM
```

### Installation [Nginx](https://nginx.org/) Server
Als nächstes installieren wir einen Nginx Server auf der VM und öffnen einen Port, um den Server über das Internet zugänglich zu machen.

Um Applikationen auf der VM installieren zu können, ist als erstes eine **SSH Verbindung** notwendig. 

**Hier muss der zuvor festgelegte Admin-Username und die publicIpAddress entsprechend angepasst werden**:
```shell
ssh leon@20.107.87.178
```

Sobald man mit SSH verbunden ist, werden Updates sowie Nginx installiert:

```shell
sudo apt-get –y update
sudo apt-get –y install nginx
exit
```
`Exit` beendet die SSH Session.

Danach muss nur mehr der Port 80 für den Webserver geöffnet und die VM gestartet werden:

```shell
az vm open-port --port 80 --resource-group rg --name leonsVM
```
In einem Browser kann nun die IP-Adresse der VM aufgerufen werden. 

![Running Nginx](/img/nginx_preview.png)

## 4. Automatische Konfiguration einer VM mit Cloud-init

## 5. Video zu VCS und GIT
Als Vorbereitung für die kommende Einheit bitte folgendes Video zu Version Control Systemen und GIT anschauen: 

[![GIT Intro Video](https://img.youtube.com/vi/8JJ101D3knE/0.jpg)](https://www.youtube.com/watch?v=8JJ101D3knE)