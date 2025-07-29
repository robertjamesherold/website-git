// Funktion um Text mit Listen und Bildern zu parsen
export function parseTextWithLists(text) {
  if (!text) return [];

  // Zuerst alle Arten von Zeilenumbrüchen normalisieren
  const normalizedText = text
    .replace(/\r\n/g, '\n')  // Windows Zeilenumbrüche
    .replace(/\r/g, '\n');   // Mac Zeilenumbrüche

  const lines = normalizedText.split('\n');
  const result = [];
  let currentParagraph = '';
  let currentList = [];
  let inList = false;

  lines.forEach((line) => {
    const trimmedLine = line.trim();
    
    // Check for images (![alt](src) oder [IMG:src:caption])
    const imageMatch = trimmedLine.match(/^!\[([^\]]*)\]\(([^)]+)\)$/) || 
                      trimmedLine.match(/^\[IMG:([^:]+):?([^:\]]*)\]$/);
    
    if (imageMatch) {
      // Speichere vorherige Inhalte
      if (inList && currentList.length > 0) {
        result.push({ type: 'list', items: [...currentList] });
        currentList = [];
        inList = false;
      } else if (currentParagraph) {
        result.push({ type: 'text', content: currentParagraph.trim() });
        currentParagraph = '';
      }
      
      // Füge Bild hinzu
      const isMdFormat = trimmedLine.startsWith('!');
      result.push({ 
        type: 'image', 
        src: isMdFormat ? imageMatch[2] : imageMatch[1],
        alt: isMdFormat ? imageMatch[1] : imageMatch[2] || '',
        caption: isMdFormat ? imageMatch[1] : imageMatch[2] || ''
      });
    }
    // Check for bullet points (• oder - oder *)
    else if (trimmedLine.match(/^[•\-\*]\s+(.+)/)) {
      // Wenn wir nicht in einer Liste waren, speichere den aktuellen Paragraph
      if (!inList && currentParagraph) {
        result.push({ type: 'text', content: currentParagraph.trim() });
        currentParagraph = '';
      }
      
      // Füge das Listenelement hinzu
      const listItem = trimmedLine.replace(/^[•\-\*]\s+/, '');
      currentList.push(listItem);
      inList = true;
    } 
    // Check for numbered lists (1. 2. etc.)
    else if (trimmedLine.match(/^\d+\.\s+(.+)/)) {
      if (!inList && currentParagraph) {
        result.push({ type: 'text', content: currentParagraph.trim() });
        currentParagraph = '';
      }
      
      const listItem = trimmedLine.replace(/^\d+\.\s+/, '');
      currentList.push(listItem);
      inList = true;
    }
    // Normale Textzeile
    else if (trimmedLine) {
      // Wenn wir in einer Liste waren, speichere sie
      if (inList && currentList.length > 0) {
        result.push({ type: 'list', items: [...currentList] });
        currentList = [];
        inList = false;
      }
      
      // Füge Text zum aktuellen Paragraph hinzu
      if (currentParagraph) {
        currentParagraph += ' ' + trimmedLine;
      } else {
        currentParagraph = trimmedLine;
      }
    }
    // Leere Zeile - Paragraph-Ende oder Listen-Ende
    else {
      if (inList && currentList.length > 0) {
        result.push({ type: 'list', items: [...currentList] });
        currentList = [];
        inList = false;
      } else if (currentParagraph) {
        result.push({ type: 'text', content: currentParagraph.trim() });
        currentParagraph = '';
      }
    }
  });

  // Am Ende noch offene Inhalte hinzufügen
  if (inList && currentList.length > 0) {
    result.push({ type: 'list', items: currentList });
  } else if (currentParagraph) {
    result.push({ type: 'text', content: currentParagraph.trim() });
  }

  return result;
}