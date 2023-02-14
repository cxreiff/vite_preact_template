import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import styles from "./app.module.scss";

export function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" class={styles.logo} alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank" rel="noreferrer">
          <img
            src={preactLogo}
            class={`${styles.logo} ${styles.preact}`}
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
