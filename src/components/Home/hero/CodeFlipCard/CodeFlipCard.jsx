import { useState } from 'react';
import styles from './_CodeFlipCard.module.scss';
import { CodeAnimation } from '../CodeAnimation/CodeAnimation'

export function CodeFlipCard() {
  const [flipped, setFlipped] = useState(false);

  const flipCardCode = `
import { useState } from 'react';
import './_CodeFlipCard.module.scss';

export default function CodeFlipCard() {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className="wrapper">
      <div className={\`card \${flipped ? 'flipped' : ''}\`}>
        <div className="front">
          {/* Code hier */}
        </div>
        <div className="back">
          <img src="..." />
        </div>
      </div>
    </div>
  );
}
  `.trim();

  return (
 
 <CodeAnimation>  </CodeAnimation>
   
  );
}