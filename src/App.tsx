import { useState } from 'react';
import WorkPage from './pages/Work';
import InfoPage from './pages/Info';

type Page = 'work' | 'info';

export default function App() {
  const [page, setPage] = useState<Page>('work');

  return (
    <div style={styles.root}>
      <div style={styles.content}>
        {page === 'work' ? <WorkPage /> : <InfoPage />}
      </div>

      <nav style={styles.nav}>
        <span
          style={{ ...styles.navLink, color: page === 'work' ? '#fff' : '#444' }}
          onClick={() => setPage('work')}
        >
          YOUR NAME
        </span>
        <span
          style={{ ...styles.navLink, color: page === 'info' ? '#fff' : '#444' }}
          onClick={() => setPage('info')}
        >
          INFO
        </span>
      </nav>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  root: { backgroundColor: '#000', minHeight: '100vh' },
  content: { paddingBottom: 56 },
  nav: {
    position: 'fixed',
    bottom: 0, left: 0, right: 0,
    display: 'flex',
    gap: '2rem',
    padding: '1.2rem 2rem',
    backgroundColor: '#000',
    borderTop: '1px solid #111',
    zIndex: 100,
  },
  navLink: {
    fontFamily: 'monospace',
    fontSize: 14,
    letterSpacing: '1.5px',
    cursor: 'pointer',
  },
};