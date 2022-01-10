---
lang: de-DE
title: Azure Pass
description: Azure Pass einlösen
---

# Azure Pass aktivieren

## Neuen Account bei Microsoft anlegen
Es wird empfohlen den Azure Pass mit einem komplett frischen Account zu verwenden und nicht den eigenen Microsoft Account (Azure verhindert oft die Anmeldung mit Firmenaccounts).

1. Im Browser [Outlook](www.outlook.com) aufrufen
2. Auf **"Kostenloses Konto erstellen"** klicken
3. Neue E-Mail Adresse und Passwort merken (Achtung: wird dann für Azure benötigt)
4. Testet ob der Account funktioniert: sendet eine Mail an eine eurer anderen Adressen und umgekehrt

## Azure Pass einlösen
1. Im Browser: [Microsoft Azure Pass](https://www.microsoftazurepass.com/) öffnen - am Besten im **Inkognito** Modus, damit keine aktive Session überschrieben wird
2. Im rechten oberen Eck auf **"Sign In"** klicken
3. Mit neu erstelltem Account anmelden und überprüfen, ob die angezeigte E-Mail Adresse eh der neuen E-Mail Adresse entspricht
4. **"Confirm Account"** klicken
5. Promo Code eingeben -> **"Claim Promo Code"** klicken; **ACHTUNG! Button nur 1 mal klicken** (sonst kann es passieren, dass der Code ungültig wird)
6. Auf der "Azure Pass Sponsorship" Seite nochmals die E-Mail Adresse und Telefonnummer angeben
7. **"Next"** klicken
8. Checkbox **"I agree to the subscription agreement, offer details, and privacy statement"** selektieren und **"Sign Up"** klicken
9. Ihr solltet jetzt automatisch im Azure Portal angemeldet sein

[Schritt-für-Schritt Anleitung zum Azure Pass mit Screenshots](https://www.microsoftazurepass.com/Home/HowTo?Length=5)

## Azure Pass Rahmenbedingungen
* Der Pass ist ab Einlösedatum **30 Tage** gültig
* Es sollten zumindest 50$ zur Verfügung stehen; einsehbar unter [Sponsorship Balance](https://www.microsoftazuresponsorships.com/balance)
* Nach dem Ausprobieren immer alle Ressourcen wieder löschen, um freie Einheiten einzusparen (prinzipiell geht es hier immer um Cent-Beträge, bspw. beim Hosting von VMs, Containern etc.)

### Ressourcen Gruppen löschen
Um freie Einheiten einzusparen, bitte immer alle Ressourcen löschen, wenn diese nicht mehr genutzt werden! (Nicht vergessen, den Namen der Resource Group an den verwendeten anzupassen).
::: danger Ressourcen löschen
```shell
az group delete --name myResourceGroup --no-wait --yes
```
:::