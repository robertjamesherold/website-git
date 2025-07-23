// components/casestudy/CaseStudy.jsx - Main Component
import { useState } from 'react'
import { CaseStudyHeader } from './components/CaseStudyHeader/CaseStudyHeader'
import { CaseStudyNav } from './components/CaseStudyNav/CaseStudyNav'
import { CaseStudyContent } from './components/CaseStudyContent/CaseStudyContent'
import { CaseStudyMeta } from './components/CaseStudyMeta/CaseStudyMeta'
import { CaseStudySidebar } from './components/CaseStudySidebar/CaseStudySidebar'
import { CaseStudyGallery } from './components/CaseStudyGallery/CaseStudyGallery'
import { CaseStudyRelated } from './components/CaseStudyRelated/CaseStudyRelated'
import styles from './_CaseStudy.module.scss'

import postproduction from '../../assets/images/concreteGold/Postproduktion.png';
import production from '../../assets/images/concreteGold/Produktion.png';
import preproduction from '../../assets/images/concreteGold/Vorproduktion.png';
import storyboard from '../../assets/images/concreteGold/Storyboard.jpg';
import moodboard from '../../assets/images/concreteGold/Moodboard.jpg';

const imageMap = {
  postproduction,
  production,
  preproduction,
  storyboard,
  moodboard
}

export function ConcreteGold({ caseStudyData }) {
  const [activeSection, setActiveSection] = useState('')

  // Example case study data structure
  const defaultData = {
     title: "Concrete Gold - Imagefilm Konzeption",
    subtitle: "Fallstudie zur Entwicklung eines Imagefilms für ein Schmuck-Startup",
    client: "Concrete Gold",
    date: "November 2023",
    duration: "3 Monate",
    category: "Video & Motion Design",
    tags: ["Imagefilm", "Konzeption", "Produktion", "Branding"],
    coverImage: imageMap.moodboard,
    sections: [{
      id: 'einleitung',
      title: 'Einleitung',
      subsections: [
          {
        subtitle: '1.1 – Einführung in das Thema',
        text: 'Die folgende Fallstudie wird sich mit der Erarbeitung und Planung des Imagefilms für Concrete Gold befassen. Zu Beginn werden alle Informationen zusammentragen und analysiert, die für den im Anschluss folgenden Ablauf benötigt werden. Nachdem alle wichtigen Details über das Unternehmen und die Zielgruppe vorhanden sind, werden die Problemstellungen und die Herausforderungen, die der Imagefilm bestehen muss, betrachtet. Anschließend folgt die Entwicklung eines Konzeptes für den Imagefilm und die Planung der technischen Bedingungen und Anforderungen für die Umsetzung des Films. Auf die Vorproduktion folgt im Anschluss noch eine Beschreibung der Produktion, sowie der danach noch notwendigen Postproduktion. Im Fokus der gesamten konzeptionellen und technischen stehen die Wünsche und Ziele, die Concrete Gold mit dem Imagefilm erreichen will.'
      },
      {
        subtitle: '1.2 – Vorstellung des Unternehmens „Concrete Gold',
        text: 'Das junge Start-up-Unternehmen „Concrete Gold“ ist im Bereich des Schmuckdesigns tätig und kann mit einer außergewöhnlichen Ästhetik mit seinen Produkten dienen. Letzteres wird vor allem durch die außergewöhnliche Herstellung der Schmuckstücke erreicht. Concrete Gold benutzt in der Herstellung nämlich High-End-Beton in Kombination mit hochwertigem Gold & Edelsteinen. Im Angebot des aktuellen Sortiments befinden sich Ringe, Ohrstecker & Kettenanhänger mit Ketten aus Edelmetall. In ihrer Unternehmens-Philosophie steht klar die besondere Aufgeschlossenheit gegenüber neuen Dingen im Fokus. Eine zu konventionelle und konservative Ansichtsweise würde nicht mit der Einstellung, mit dem Zeitgeist gehen zu wollen, übereinstimmen. Neben dieser aufgeschlossenen Art kommt noch das Augenmerk auf das für die Herstellung angewendete Handwerk. Trotz, dass das Preissegment des Unternehmens im Hinblick auf die Branche, in der sie sich befinden, im „unteren“ Bereich bei 100–500 €, soll aber trotz dessen eine edle Ausstrahlung erzeugen.'
      },
      {
        subtitle: '1.3 – Problemstellung und Zielsetzung',
        text: 'In der heutigen Zeit sind der Wiedererkennungswert und die Bekanntheit, die eine Marke ausstrahlt und mit sich bringt, die ausschlaggebenden Einflüsse, die den Erfolg der Marke und des Unternehmens darstellen. Die visuellen Eindrücke, die auf uns jeden Tag, ununterbrochen einwirken, sind so gigantisch, dass der größte Teil dieser wahrgenommenen Informationen von uns ausgeblendet und gar nicht bewusst erlebt wird. Angesichts dessen hat sich das noch junge Start-up-Unternehmen „Concrete Gold“, dass im Bereich Schmuckdesign tätig ist und in der Herstellung der Schmuckstücke High-End-Beton in Kombination mit Gold und Edelsteinen verwendet, dazu entschieden einen Imagefilm zu produzieren. Das Besondere an 3 dem Design ihrer Schmuckstücke ist das Alleinstellungsmerkmal, nämlich die Verarbeitung von High End Beton in Kombination mit Edelsteinen und Gold, um so eine einzigartige Ästhetik zu erzeugen, die einen modernen und unkonventionellen Stil prägt. Trotz des noch jungen Alters aber konnte sich „Concrete Gold“ schon einmal den ersten Platz bei einem internationalen Award für Schmuckdesign erkämpfen. Um noch weitere Erfolge zu erreichen und eine stabile Marktpositionierung der Marke zu bekommen, benötigt Concrete Gold jedoch mehr als nur diese einzigartige Ästhetik, da in der heutigen Zeit der Markt stark umkämpft ist. Concrete Gold will mit der Entwicklung eines Imagefilms die Bekanntheit, der noch wenig bekannten Marke, auf eine positive und kraftvolle Art und Weise steigern. Der Film soll nicht einfach eine Produktwerbung sein, die eine Botschaft zur Kauf-Aufforderung darstellt, sondern soll die Werte und die Geschichte des Unternehmens wiedergeben. Durch die Verwendung dieses Imagefilms soll das Image und die Identität von Concrete Gold in ein Licht gerückt werden, das die modernen und zeitgenössischen Bedürfnisse der Zielgruppe erfüllt. Gleichzeitig aber nicht zu verspielt und naiv zu wirken, um somit den Wünschen und Vorlieben der etwas älteren Zielgruppe gerecht werden. Es ergeben sich somit mehrere Problemstellen, die der Imagefilm lösen soll. Zum einen ist der noch kleine Bekanntheitsgrad der Marke. Besonders in einer so auf Markenqualität gestützten Branche, ist der Name der Marke und das damit verbundene Gefühl, das die Marke auslöst, ein sehr hoher Einflussfaktor auf die Kaufentscheidungen der Kunden. Ein weiterer Punkt, der durch die Produktion und Veröffentlichung des Imagefilms einhergeht, ist die schon etwas größere Zielgruppe. Somit muss gut durchdacht sein, was der Film zeigen soll, um Personen im Alter von 16–40 Jahren gleichermaßen anzusprechen, wie die Zielgruppe der Personen im Alter von über 40. Mit diesen beiden Problemstellungen, würden sich definitiv einige Lösungsansätze erstellen lassen, die den Wert, die Bekanntheit und das Image, also die Brandawarness der Marke erhöht. Jedoch gibt es diesbezüglichen noch ein weiteres Problem, welches die Auswahl der richtigen Kommunikationskanäle erfordert. Heutzutage sind die Kommunikationskanäle, die zur Verfügung stehen, um einiges umfangreicher als vor noch 50 Jahren. Zudem ist es noch wichtig, die Tatsache zu berücksichtigen, dass neben diesen unzähligen Vertriebskanälen, noch der Nutzungsumfang dieser Kanäle bei jeweiligen Altersgruppen stark variieren. Der Imagefilm muss somit inhaltlich gut auf die Wünsche der Zielgruppen abgestimmt werden und gleichzeitig den vom Unternehmen gerne erzielten Eindruck hinterlassen. Der geeignete Kommunikationsweg muss definiert werden, um somit während der Dreharbeiten, schon bewusst mit dem Format und dem Anschnitt arbeiten zu können, um so noch zusätzlich die Wirkung des Films zu beeinflussen.'
      }
    ]
  },
  {
    id: 'marktanalyse',
    title: 'Marktdurchdringung & Reichweite',
    subsections: [
      {
        subtitle: '2.1 Zielgruppenanalyse',
        text: 'Eine gute Zielgruppenanalyse ist der erste Punkt, um einen guten Lösungsweg weg für die eben definierten Problemstellungen zu entwickeln. Die Zielgruppe von Concrete Gold besteht zu 70 % aus der Altersgruppe der 16–40-Jährigen und zu 30 % aus der Altersgruppe der über 40-Jährigen. Um sich nun ein Bild, davonzumachen, was die Zielgruppen für Ansprüche und Bedürfnisse haben, ist es wichtig sogenannte Lebensstildaten von der Zielgruppe zu sammeln, umso leichter die Denkweise und Ansichten nachvollziehen zu können (Werner Kroeber-Riel & Andrea Gröppel-Klein, 2019, S. 534). Das Konsumentenverhalten verschiedener Generationen variiert vor allem noch in den jüngeren Generationen stark (Werner Kroeber-Riel & Andrea Gröppel-Klein, 2019, S. 455–458). Um Concrete Gold für den Imagefilm einen guten Ansatz zu bieten, an dem man den Inhalt etwas orientieren kann, folgen im Anschluss 2 kurze fiktive Persona, die in die Zielgruppe passen könnten.'
      },
      {
        image: 'https://www.statista.com/graphic/1/272014/global-social-networks-ranked-by-number-of-users.jpg',
        name: 'Quelle: https://www.statista.com/',
      },
      {
        subtitle: '2.2 Konkurrenzvergleich',
        text: 'Der Distributionskanal spielt die zweite wichtige Rolle, um unsere Zielgruppe auf die bestmögliche Art und Weise zu erreichen. Aufgrund dessen, dass der Imagefilm 1 – 2 Minuten lang werden wird, ist die Wahrscheinlichkeit für einen Fernsehauftritt sehr gering. Ein wichtiger Punkt, der auch eine Rolle spielt, ist die Erkenntnis, welche schon durch mehrere Studien bewiesen wurde, dass der Content auf Social-Media-Plattformen nur bei 20 % aller Konsumenten wirklich eine Kaufentscheidung verursachen. Den Social Media Kanälen wird hingegen ein Einfluss auf die Markenbekanntheit und einer Zunahme der Word-of-Mouth-Aktivitäten zugeschrieben (Werner Kroeber-Riel & Andrea Gröppel-Klein, 2019, S.598). Somit ist klar, dass die sozialen Medien wahrscheinlich das größte Potenzial dazu haben, all unsere Zielgruppen zu erreichen und vor allem das gewünschte Ziel der Brandawarness und der größeren Bekanntheit der Marke zu bewirken. Unter den beiden wohl am stärksten konsumierten Social-Media-Plattformen zählen Facebook und Twitter, wobei Twitter noch den Vorteil der barrierefreien Erreichbarkeit besitzt, die bei Facebook leider nur mit einer Anmeldung oder Registrierung möglich ist (Fleischmann, 2015, S.80).'
      }
    ]
  },
  {
    id: 'konzeption',
    title: 'Inhaltliche Konzeption',
    content: 'Überblick über die geplante Umsetzung...',
    subsections: [
      {
        subtitle: '3.1 – Konzeption',
        text: 'Der inhaltliche Ablauf, den der Imagefilm beinhalten soll, sollte in erster Linie das Unternehmen in das gewünschte Licht rücken, sowie aber auch gleichzeitig die Brandawarness auf positive Weise verstärken. Da Concrete Gold wie schon zu Anfang erwähnt ein unkonventionelles Unternehmen ist, dass mit dem Zeitgeist geht, solle der Inhalt auf eine lockere, unbeschwerte, freie Art und Weise arrangiert werden. Auf diese Art und Weise sollte schneller das Interesse geweckt werden. Da sich die Zielgruppe zum größten Teil im Altersbereich der jungen Erwachsenen befindet, ist noch darauf zu achten der Marke eine gewisse Stabilität und Eigenständigkeit zu verleihen. Aus Kundensicht wird somit durch das Tragen solchen Schmucks das eigene Image und Selbstvertrauen gestärkt. Da die Identifikation von sich selbst mit einer Marke eine sehr hohe Bindung mit dem Kunden aufbaut, sollte gerade, weil auch Schmuck in den Bereich der Luxus-Artikel fällt und dementsprechend zur Selbstverwirklichung dient, auf die richtigen Darstellungswerte geachtet werden. Zudem soll der Imagefilm positiv wirken, indem vor allem glückliche Gesichter zu sehen sein sollten. Der Inhalt wird zudem eine Aneinanderreihung, sehr vieler kleiner Cut-Szenen.'
      },
       {
        subtitle: '3.2 – Ablauf',
        text: 'Die Szenen werden sich bis zum Finale in einem sprunghaften Wechsel von Aufnahmen mit Menschen zu Aufnahmen ohne Menschen, mit erhabenem und starkem Bildmaterial bewegen, das ein Gefühl von Freiheit und Stabilität vermitteln soll. Nach jeder Szene mit Natur oder Handwerk folgt eine kurze Szene mit einer glücklichen Person, entweder ein Kunde, der sich über sein neues Schmuckstück freut, oder ein Mitarbeiter, der stolz von der Herstellung der "High End Beton, mit Gold" kombinierten Schmuckstücke erzählt. Diese „Interview-Szenen“ sollten jeweils maximal nur 2 bis 3 aussagekräftige Sätze pro Person enthalten. Das Ziel des Imagevideos ist es, den edlen Charakter und die Ästhetik der Marke "Concrete Gold" auf subtile, aber spürbare Weise zu präsentieren. Die Szenen, die das Handwerk zeigen, sollen nicht nur Einblicke in die Herstellung bieten, sondern auch ein Gefühl von Stärke und Kraft vermitteln, welches die Marke ausstrahlt. Bis etwa 1:15 Minuten besteht das Video aus dieser Abfolge von Natur, Handwerk und Menschen. Die Musik wird während der Szenen ohne Menschen lauter und gewinnt kontinuierlich an Spannung. Die letzte Szene wird plötzlich von einer starken, spannungssteigernden Musik eingeleitet und von einer epischen Chor- und Orchestermischung begleitet. Zusätzlich zu den beschriebenen Szenen und Einstellungen sollte die Kamera so eingestellt werden, dass sie die Schönheit der Natur und die Präzision des Handwerks einfängt, während sie gleichzeitig die Emotionen und das Glück der Menschen authentisch wiedergibt.'
      },
      {
        subtitle: '3.3 – Szenen',
        sub: '1. Szene',
        text: 'Der Film beginnt mit einer glücklichen Frau, die den Ausdruck "Wahnsinn, es ist etwas Schönes, passiert" verbildlicht und sich freut. Der genaue Grund dafür wird nicht gezeigt. Die Szene sollte in einer leichten Unschärfe in den Schnitt laufen. Zudem ist direkt zu Beginn auch ihre Freude deutlich zu hören. Die Frau wird in einer halbnahen Aufnahme gezeigt.'
      },
      {
        sub: '2. Szene',
        text: 'Ab hier setzt auch die musikalische Tonuntermalung in Form eines noch leisen Orchesters, dass eine leichte, anregende und aufregende Melodie spielt. Die Lautstärke wird sich mit dem Musikspielstil kontinuierlich langsam bis zur finalen Szene etwas steigern. Der Stil der Musik erlebt dadurch eine immer spannendere Stimmung. Das visuelle Bewegtbild in dieser Szene knüpft an die Unschärfe von Szene 1 an. Diese Aufnahme zeigt eine steinige Klippe gegen die, die Wellen des Meeres peitschen. Der Bildausschnitt sollte hier in einer Totalen oder Supertotalen gedreht werden.'
      },
      {
        sub: '3. Szene',
        text: 'Diese Szene zeigt nun wieder glücklichen Menschen, die mit der Familie oder Freunden gemeinsam eine gute Zeit erleben. Nach etwa der Hälfte der Zeit, die diese Szene gezeigt wird, fängt eine ruhige freundliche Männerstimme an einzelne Phrasen, wie die aus einem Interview zu sagen. Inhaltlich wird sich das Gesagte mehr oder weniger als ein stolzer Mitarbeiter oder sogar Unternehmensinhaber anhören, der auf ganz verspielte Art und Weise von den Werten des Unternehmens schwärmt.'
      },
{
        sub: '4. Szene',
        text: 'Hier wieder ohne sprachliche Vertonung, nur mit dem energetisch klingenden Orchester. In dieser Szene werden kurze Ausschnitte der Herstellung und Produktion der Schmuckstücke gezeigt werden, im Idealfall zeigen diese Bilder die spannendsten Momente der Herstellung. Kurz vor Ende dieser Szene beginnt der Sprecher weiterzureden.'
      },
{
        sub: '5. Szene',
        text: 'Halb nahe Aufnahme von dem Sprecher, der scheinbar wirklich wie auf eine Art Interview antwortet, wichtig ist es hier, mit der Ausstrahlung und Überzeugung der glücklichen Gefühle, die der Mann verspürt so realistisch wie möglich zu sein, aber gleichzeitig nicht zu übertreiben.'
      },
{
        sub: '6. Szene',
        text: 'Diese Szene sollte wieder Freiheit und Klarheit erzeugen, indem wieder Bilder von Landschaften gezeigt werden. Die gezeigten Landschaftsbilder sollten immer in einer Supertotalen aufgenommen werden, um das Gefühl von Freiheit zu verstärken.'
      },
{
        sub: '7. Szene',
        text: 'Die vorletzte Szene zeigt noch einmal eine Frau, die strahlend einen sehr kurzen Aufruf wie: „Unvergleichbar einzigartig!“, von sich gibt. Ab dem Beginn dieser Szene fängt die musikalische Untermalung noch an einen kurzen und schnellen Spannungsbogen zu ziehen, der in der bildlichen Szene eines hellen Lichtes verstummt.'
      },
{
        sub: '8. Szene',
        text: 'In der letzten Szene werden neben dem Logo des Unternehmens einige beispielhafte Schmuckstücke gezeigt. Die Szene wirkt wie ein Standbild, bei dem die Schmuckstücke etwas im Hintergrund liegen, während das Logo im Fokus steht. Ein künstlerischer Leuchteffekt des Logos oder des Goldes könnte die Szene bereichern. Die Schmuckstücke könnten sich in einer langsamen, subtilen Kurve von links nach rechts bewegen, ohne das Bild zu verlassen, wie auf einer Art „Drehteller“. In dieser Szene wird der Markenname "Concrete Gold" von einer ruhigen Männerstimme noch einmal gesagt, um der dem ganzen einen Abschluss zu geben.'
      },


       {
        subtitle: '3.4 – Szenenbeschreibung',
        text: 'Die erste Szene soll sofort emotionale Neugier wecken und mit den darauffolgenden Szenen, die glückliche Menschen zeigen, weiter die Emotionen der Zuschauer ansprechen, Naturaufnahmen sollen die Beständigkeit und die Stabilität der Marke verstärken. Szenen, die das Handwerk und die Schmuckstücke zeigen, sollen die Authentizität und Seriosität der Marke unterstreichen. Die letzte Szene soll einen ruhigen und sicheren Abschluss mit dem Logo der Marke zeigen. Trotz der Vielzahl an verschiedenen Sequenzen ist es notwendig, dass der Imagefilm eine flüssige Abfolge aufweist, um zu vermeiden, dass der Zuschauer die Szenenwechsel als störend oder unpassend empfindet.'
      }
      ,
       {
        subtitle: '3.5 – Kommunikationsziel',
        text: 'Der Imagefilm soll mithilfe der genutzten Stilmittel und Techniken, einen Spannungsbogen erzeugen, der im Laufe des Films, mithilfe der sprachlichen Inhalte und der immer deutlicheren Bildinhalte dem Zuschauer den Hintergrund dieser Aufnahme nur langsam erahnen lässt. Die gezeigten Bilder sollen sehr selektiv wirken, was die bildlichen Inhalte betrifft, sollen aber den Zuschauer die Emotionen der Marke spüren lassen. Das Ziel der Bildausschnitte ohne Menschen ist es vorwiegend durch die Berge und steinige Strukturen, das Gefühl der Stabilität zu vermitteln. Die weiten Landschaftsaufnahmen geben der Marke das gewisse Maß an Freiheit, sowie die handwerkliche Präzision durch die detaillierten Nahaufnahmen der Schmuckstücke.'
      }
        ]
  },
 {
  id: 'umsetzung',
  title: 'Technische Umsetzung',
  subsections: [
    {
      subtitle: '4.1 – Vorproduktion',
      image: imageMap.preproduction,
      name: 'Quelle: Eigene Darstellung',
      text: 'Die Vorproduktion stellt einen der wichtigsten Teile des gesamten Ablaufs für den Imagefilm dar. Am Anfang jeder Vorproduktion steht das Briefing. Hier werden Budget und Wünsche in Absprache mit dem Kunden bzw. dem Auftraggeber besprochen. Nun folgt die Phase des Research und Developments, in der alle Informationen, die zu dem Thema passen, die es schon gibt, zusammengetragen werden, um sich so Inspirationen zu holen (Kamp, 2022, S. 227). Eine gute Methode für diese Phase ist es, mithilfe einer Brainstorming- Mindmap schnell und effizient Ideen zu erstellen, die im Anschluss als Ausgangspunkt dienen können (Jovy, 2021, S. 49). Nach der Research Phase beginnt die Ideenentwicklung, in der mit Moodboards die ersten Stimmungen für den Film gesammelt werden. Das Moodboard ist Collage aus Bildern und Schriftzügen, um, wie schon der Name herleiten lässt, eine gewisse Stimmung einzufangen (Heiser, 2020, S. 353). In dieser Phase sollen hauptsächlich viele unterschiedliche Eindrücke mithilfe der Moodboards festgehalten werden, die im Anschluss in Rücksprache mit Concrete Gold betrachtet und beurteilt werden können. Nachdem die ersten Ideen mit Concrete Gold besprochen sind, folgt der nächste Schritt. Meist werden die drei stärksten Ideen für die Weiterverarbeitung genommen und in den darauffolgenden Schritten weiter ausgearbeitet.',
    },
    {
      image: imageMap.moodboard,
      name: 'Quelle: Eigene Darstellung',

    text: 'Gefolgt auf die Ideenentwicklung, wird ein erstes Konzept des Films erstellt. In dieser Phase entsteht auch der aus Kapitel 3 beschriebene Plot, der für den nächsten Schritt eine entscheidende Rolle spielt. Der Plot beschreibt eine Szeneaneinanderreihung und dient mithilfe von Skizzen der Erstellung des Drehbuchs (Kamp, 2022, S. 215). Auf den Plot folgt dann die Ausarbeitung des Drehbuchs. Das Drehbuch ist jedoch nicht zwingend vor Produktionsstart fertigzustellen (Petzke & Graf, 2019, S. 76). Sobald das Drehbuch fertig ist, wird in Form eines Storyboards die erste Visualisierung des Imagefilms für Concrete Gold erstellt. Hier werden die Handlungen und Darstellungen, die das Drehbuch beschreibt, mithilfe von Skizzen visualisiert. Wichtig ist es hierbei mithilfe von Pfeilen und Anmerkungen schon der Regie eine gewisse Hilfestellung für die Kameraführung zu geben (David Harland Rousseau & Benjamin Reid Phillips, 2013, S. 14). Nachdem das Storyboard alle Szenen skizzenhaft in Darstellungen festgehalten hat, kann mithilfe eines Schnittprogramms der Inhalt so zusammengefügt werden, dass eine lückenlose inhaltliche Darstellung möglich ist. Dieser Schritt wird als Animatic bezeichnet. In diesem Schritt können mitunter auftretende Lücken somit schon erkannt und notfalls beseitigt werden.',
    },
    {
      image: imageMap.storyboard,
      name: 'Quelle: Eigene Darstellung',

      text: 'Da in diesem Projekt mehrere Arbeitsschritte von unterschiedlichen Personen bearbeitet werden, wie die Landschaftsaufnahmen mit der Drohne oder die Tonkomposition und Aufnahme mit dem Orchester und dem Tontechniker, ist es wichtig eine Pipeline aufzubauen. Die Pipeline ermöglicht es einen reibungslosen Übergang der einzelnen Projektphasen mit den jeweils unterschiedlichen Softwareprogrammen. Besonders wichtig wird der Aufbau der Pipeline ab der Verwendung von visuellen Effekten (Okun et al., 2015, S. 885), wie in der letzten Szene, in der das Concrete Gold Logo mit einem goldenen Schimmer glitzern soll. Nachdem der Pipelineaufbau steht, werden noch mithilfe von Produktionsskizzen wichtige Details für die spätere Produktion festgehalten. Unter anderem sollen die Produktionsskizzen die Hintergrundkulisse für die 5. Szene beschreiben. Zudem werden nun die Kulissen angefertigt und vorbereitet. Sonstige Requisiten wie die gezeigten Schmuckstücke werden von Concrete Gold zur Verfügung gestellt. Der vorletzte Schritt, bevor es mit der Produktion und den Dreharbeiten losgeht, ist das Casting für die Filmbesetzung. Benötigt werden etwa 4–5 junge Personen im Alter von ca. 20–40 Jahren für die Familien/Gruppenaufnahmen, zudem noch zwei junge Frauen für die 1. & 7. Szene sowie den authentisch wirkenden Mann mittleren Alters für die 5. Szene und die Sprachaufnahmen. Die Auswahl sollte immer vor Ort und in realer Begegnung erfolgen, da eine Auswahl lediglich über Fotos zu unerwarteten Komplikationen führen kann (Petzke & Graf, 2019, S. 68). Jetzt wird die entstandene noch einmal, falls nötig eingewiesen, um so eine reibungslose und gut funktionierende Teamarbeit zu gewährleisten (Petzke & Graf, 2019, S. 37).'
    },
     {
      subtitle: '4.2 – Produktion',
      image: imageMap.production,
      name: 'Quelle: Eigene Darstellung',
      text: 'Die Produktion ist der kosten intensivste Teil des gesamten Verlaufs. Neben den technischen Notwendigkeiten, die die Vorproduktion zuvor ermittelt und festgelegt hat, sind auch die Leistungen der Schauspieler und die Gegebenheiten wie das Wetter ausschlaggebend und wichtig. Gerade bei der Arbeit mit vielen Menschen ist deshalb das Wohlbefinden der Mitarbeiter und der Schauspieler ein ausschlaggebender Parameter, wie schnell und wie gut die Dreharbeiten vonstattengehen (Petzke & Graf, 2019, S. 100). Die Dreharbeiten für den Imagefilm von Concrete Gold teilen sich in zwei Teile auf, die einen Ressourcen optimierten Ablauf verfolgen, der mithilfe des Drehbuchs erstellt wird. Zuerst werden die Aufnahmen im Studio mit den Schauspielern erstellt. Wichtig ist es zudem, die Anfänge jeder Szene und das Ende jeder Szene nie aus den Augen zu verlieren. Die Post-Produktion soll zwar erst die flüssige Abfolge der Szenen gewährleisten, benötigt aber trotzdem passendes Bildmaterial, um dies zu erreichen. Der Ablaufplan wird dementsprechend zuerst die 1. Szene mit der glücklichen Frau aufnehmen, im Anschluss die Gruppenaufnahme, gefolgt von der 5. Szene. Die letzten Aufnahmen, bei denen die Schauspieler mitwirken, sind die handwerklichen Nahaufnahmen, bei denen der Schauspieler aber nur eine nebensächliche Rolle spielt, da die Aufnahmen ihren Fokus auf den Schmuckstücken haben. Die einzelnen Aufnahmen werden mithilfe von Takes nummeriert und in einem direkten Online-Backup gespeichert, somit werden Datenverluste direkt vermieden (Petzke & Graf, 2019, S. 191ff.). Der zweite Teil der Dreharbeiten findet on Location statt, jedoch mit einer kleineren Crew, da keine Schauspieler benötigt werden. Die Aufnahmen erfolgen mithilfe einer Drohne, um so gute Luftaufnahmen zu gewährleisten. Auch hier werden die Aufnahmen mit Takes nummeriert & durch ein sofortiges Backup gesichert.'
    },
      {
      subtitle: '4.3 – Post-Produktion',
      image: imageMap.postproduction,
      name: 'Quelle: Eigene Darstellung',
      text: 'Die Post-Produktion erfolgt als letzter Teil auf die zuvor durchgeführten Dreharbeiten. In diesem Teil werden die Aufnahmen zuerst während der Sichtung ausgewählt. Der Schnitt erfolgt zuerst in Form eines Rohschnittes, bei dem alle ausgewählten Aufnahmen in die richtige Reihenfolge gelegt werden, um somit schon einmal den groben Ablauf zu visualisieren und auch die Übergänge der Aufnahmeschnitte besser im Blick zu haben. Nach dem Rohschnitt erfolgt das Compositing, um die letzte Szene überhaupt erst komplett zu visualisieren, da diese Szene mehrere VFX beinhaltet. Außerdem werden mithilfe des Compositings die Szenenübergänge so nahtlos wie möglich gemacht. Der Feinschnitt passt die jetzt vorliegenden Aufnahmen der einzelnen Szenen bestmöglich aufeinander an, um eine für den Zuschauer flüssig ablaufende Filmeinheit zu erschaffen. Sobald die einzelnen Bilder des Filmes komplett sind, erfolgt der sogenannte Picture Lock. Der Picture Lock ist der Punkt in der Post-Produktion, ab dem sich nichts mehr am vorhandenen Bildmaterial ändern sollte. Das Grading ermöglicht es im Anschluss dem Film ein einheitliches Licht und Farbstimmung zu geben. Somit verschmelzen die einzelnen Szenen noch mehr miteinander und optimieren den gewünschten Effekt einer homogenen Bildsprache (Jovy, 2021, S. 551). Der letzte Teil vor der Fertigstellung des Filmes erfolgt mit der Vertonung. Die Akustik dient dazu, die emotionale Wahrnehmung der Zuschauer zu beeinflussen, um somit den visuellen Eindrücken eine noch prägendere Wirkung zu verleihen und dem Imagefilm von Concrete das gewünschte Image zu verleihen.'
    }
  ] // <-- das fehlte
}, // <-- das fehlte
  {
    id: 'fazit',
    title: 'Fazit',
    content: 'Der Inhalt dieser Fallstudie dreht sich um die Erstellung eines Imagefilms für das Startup-Unternehmen Concrete Gold und sollte den Effekt einer Steigerung der Markenbekanntheit und Reichweite erzielen. Die Umsetzung erfolgte mithilfe einer Ausarbeitung und umfangreichen Planung der technischen Inhalte und der inhaltlichen Konzeption und führte zu guter Letzt auch zum gewünschten Resultat. Der mit dieser Fallstudie produzierte Imagefilm konnte Concrete Gold in das von Ihnen gewünschte Licht rücken und auf eine nicht zu aufdringlich wirkende Art und Weise der Look & Feel der Marke Stabilität, Freiheit, Unabhängigkeit und den gegenwärtigen Zeitgeist verleihen. Der Film fesselt vorrangig durch den Spannungsbogen die Zuschauer und erhöht somit schon die Zahlen der Zuschauer, gleichzeitig werden aber die Emotionen auf eine subtile, aber wirkungsvolle Art und Weise angesprochen, um der Marke einen unvergesslichen Wiedererkennungswert zu geben.',
    
  }
],

  }

  const data = caseStudyData || defaultData

  return (
    <div className={styles.caseStudy}>
      <CaseStudyHeader 
        title={data.title}
        subtitle={data.subtitle}
        coverImage={data.coverImage}
      />

      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <CaseStudyMeta 
            client={data.client}
            date={data.date}
            duration={data.duration}
            category={data.category}
            tags={data.tags}
          />
          <CaseStudyNav 
            sections={data.sections}
            activeSection={activeSection}
            onSectionClick={setActiveSection}
          />
        </aside>

        <main className={styles.mainContent}>
          <CaseStudyContent 
            sections={data.sections}
            onSectionVisible={setActiveSection}
          />
          
          {data.images && data.images.length > 0 && (
            <CaseStudyGallery images={data.images} />
          )}
        </main>
      </div>

      {data.relatedStudies && data.relatedStudies.length > 0 && (
        <CaseStudyRelated studies={data.relatedStudies} />
      )}
    </div>
  )
}
