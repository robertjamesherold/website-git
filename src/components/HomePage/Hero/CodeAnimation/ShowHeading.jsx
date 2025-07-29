import { useState } from "react";

export default function HelloComponent() {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <button onClick={() => setVisible(!visible)}>
        {visible ? "Ausblenden" : "Zeige \"Hello\""}
      </button>
      {visible && <h1>Hello</h1>}
    </div>
  );
}