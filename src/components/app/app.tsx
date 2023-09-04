import styles from "./app.module.scss";

const categories = [
  "all",
  "art",
  "biography",
  "computers",
  "history",
  "medical",
  "poetry",
];

export const App = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.main__title}>Search for books</h1>
      <input type="search" />
      <datalist>
        <option value="all"></option>
      </datalist>
    </main>
  );
};
