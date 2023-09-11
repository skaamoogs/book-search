import styles from './loader.module.scss';

export const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
      <span className={styles.loaderContainer__loader}></span>;
    </div>
  );
};
