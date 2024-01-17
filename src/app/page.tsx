import Button from '@mui/material/Button';
import styles from './page.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Button variant="contained">Hello world</Button>
      </div>
      <div className={styles.description}>
        <div>
          <a
            href="https://github.com/juanmguzmann"
            target="_blank"
            rel="noopener noreferrer"
          >
            By
            {' '}
            Juan
          </a>
        </div>
      </div>
    </main>
  );
}
