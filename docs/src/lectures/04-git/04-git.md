---
lang: de-DE
title: 04 Version Control Systeme (GIT) - CI und CD
sidebar: auto
---

# {{ $frontmatter.title }}

## VCS
*Version Control*, auch bekannt als *Source Control*, ist die Praxis des Trackings und der Verwaltung von Änderungen am Software Sourcecode. Versionskontrollsysteme sind Software-Tools, die Softwareentwicklungsteams dabei helfen, Änderungen am Quellcode im Laufe der Zeit zu verwalten. Version Control Systeme helfen Softwareteams, schneller und intelligenter zu arbeiten. Sie sind besonders nützlich für **DevOps-Teams**, da sie ihnen helfen, die Entwicklungszeit zu verkürzen und die erfolgreiche Bereitstellung von Code zu erhöhen.

![Version Control](./img/version_control1.png)

Das Version Control System zeichnet jede Änderung am Code in einer speziellen Datenbank auf. Wird ein Fehler gemacht, können die Entwickler:innen "die Uhr zurückdrehen" und frühere Versionen des Codes vergleichen, um den Fehler zu beheben und gleichzeitig die Unterbrechung für alle Teammitglieder zu minimieren.

Softwareentwicklungsteams, schreiben ständig neuen Code und ändern bestehenden Code. Der Code für ein Projekt, eine Anwendung oder eine Softwarekomponente ist normalerweise in einer Ordnerstruktur oder einem *"Tree"* organisiert. Ein Teammitglied arbeitet vielleicht an einer neuen Funktion, während ein anderes einen nicht damit zusammenhängenden Fehler behebt, indem der Code geändert wird, wobei jeder Entwickler seine Änderungen an verschiedenen Stellen des *Trees* vornehmen kann.

Die Versionskontrolle hilft Teams bei der Lösung solcher Probleme, indem sie jede einzelne Änderung jedes Mitwirkenden verfolgt und verhindert, dass sich gleichzeitige Arbeiten überschneiden. Änderungen, die an einem Teil der Software vorgenommen werden, können mit denen eines anderen Teammitglieds, das zur gleichen Zeit arbeitet, unvereinbar sein (oder in Konflikt stehen). Dieses Problem sollte entdeckt und in geordneter Weise gelöst werden, ohne die Arbeit des restlichen Teams zu behindern. Außerdem kann bei jeder Softwareentwicklung jede Änderung neue Fehler mit sich bringen, und neue Software ist erst dann vertrauenswürdig, wenn sie getestet wurde. Daher werden Tests und Entwicklung gemeinsam durchgeführt, bis eine neue Version (bspw. Release) fertig ist.

### Vorteile
1. **Schnelleres Development durch effiziente Kollaboration**
2. **Reduzierung von Fehlern und Konflikten** (siehe "Nachvollziehbarkeit")
3. **Ortsunabhängiges Arbeiten** (Code kann von überall in das Repository gepusht werden)
4. **Eine vollständige langfristige Änderungshistorie** für jede Datei. Das heißt, jede Änderung, die im Laufe der Jahre von vielen Personen vorgenommen wurde. Zu den Änderungen gehören die Erstellung und Löschung von Dateien sowie die Bearbeitung ihres Inhalts. Verschiedene VCS-Tools unterscheiden sich darin, wie gut sie das Umbenennen und Verschieben von Dateien handhaben. Diese Historie sollte auch den Autor, das Datum und schriftliche Notizen über den Zweck jeder Änderung enthalten. Die vollständige Historie ermöglicht es, auf frühere Versionen zurückzugreifen, um die Ursachen von Fehlern zu analysieren, und ist von entscheidender Bedeutung, wenn es darum geht, Probleme in älteren Softwareversionen zu beheben. Wenn aktiv an der Software gearbeitet wird, kann fast alles als eine "ältere Version" der Software betrachtet werden.

5. **Branching (Verzweigung) und Merging (Zusammenführung)**. Die gleichzeitige Arbeit von Teammitgliedern ist eine Selbstverständlichkeit, aber auch Einzelpersonen, die alleine arbeiten, können von der Möglichkeit profitieren, an unabhängigen Änderungsströmen zu arbeiten. Das Erstellen eines "Zweigs" in VCS-Tools hält mehrere Arbeitsströme unabhängig voneinander und bietet gleichzeitig die Möglichkeit, diese Arbeit wieder zusammenzuführen, so dass Entwickler:innen überprüfen können, ob die Änderungen in den einzelnen Zweigen nicht miteinander in Konflikt stehen. Viele Software-Teams branchen für jedes Feature oder für jede Version oder beides. Es gibt viele verschiedene Arbeitsabläufe, aus denen Teams wählen können, wenn sie entscheiden, wie sie die Branching- und Merging Funktionen in VCS nutzen wollen.

6. **Nachvollziehbarkeit**. Wenn man in der Lage ist, jede an der Software vorgenommene Änderung nachzuvollziehen und sie mit Projektmanagement- und Fehlerverfolgungssoftware zu verbinden, und wenn man in der Lage ist, jede Änderung mit einer Nachricht zu versehen, die den Zweck und die Absicht der Änderung beschreibt, kann das nicht nur bei der Ursachenanalyse und anderen forensischen Untersuchungen helfen. Die kommentierte Historie des Codes zur Hand zu haben, wenn man den Code liest und versucht zu verstehen, was er tut und warum er so konzipiert ist, kann es den Entwicklern ermöglichen, korrekte und harmonische Änderungen vorzunehmen, die im Einklang mit dem beabsichtigten langfristigen Design des Systems stehen. Dies kann besonders wichtig sein, um effektiv mit altem Code zu arbeiten, und ist von entscheidender Bedeutung, wenn es darum geht, dass Entwickler zukünftige Arbeiten genau einschätzen können.


## Best Practices
> Regelmäßige Commits
> 
> Regelmäßiges Fetching der Letztversion
> 
> Aussagekräftige Commit Messages
> 
> Branches verwenden
> 
> Workflow festlegen


## Typen von VCS

### Lokales VCS

### Zentrales VCS

### Dezentrales VCS