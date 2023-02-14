import { useState } from "preact/hooks";
import cn from "classnames";

import viteLogo from "./assets/vite.svg";
import preactLogo from "./assets/preact.svg";
import styles from "./app.module.scss";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} class={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank" rel="noreferrer">
          <img
            src={preactLogo}
            class={cn(styles.logo, styles.preact)}
            alt="Preact logo"
          />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class={styles.card}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p class={styles.read_the_docs}>
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
