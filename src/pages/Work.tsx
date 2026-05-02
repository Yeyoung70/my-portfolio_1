import { useState } from 'react';
import { works } from '../data/works';
import type { Work } from '../data/works';

export default function WorkPage() {
  const [selected, setSelected] = useState<Work | null>(null);

  if (selected) {
    return (
      <div style={styles.container}>
        <span style={styles.back} onClick={() => setSelected(null)}>← BACK</span>

        {selected.images.length > 0 ? (
          selected.images.map((src, i) => (
            <div key={i} style={styles.detailImg}>
              <img src={src} alt="" style={{ width: '100%', display: 'block' }} />
            </div>
          ))
        ) : (
          <div style={styles.placeholder}><span style={styles.ph}>IMAGE</span></div>
        )}

        <div style={styles.detailTitle}>{selected.title}</div>
        <div style={styles.detailSub}>{selected.desc.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      {works.map((w) => (
        <div key={w.id} style={styles.item} onClick={() => setSelected(w)}>
          {w.images.length > 0 ? (
            <div style={styles.thumb}>
              <img src={w.images[0]} alt={w.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
          ) : (
            <div style={{ ...styles.thumb, ...styles.thumbEmpty }}>
              <span style={styles.ph}>IMAGE</span>
            </div>
          )}
          <div style={styles.title}>{w.title}</div>
          <div style={styles.sub}>{w.sub}</div>
        </div>
      ))}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
    container: { padding: '3rem 2rem 100px', maxWidth: 800, margin: '0 auto' },

  item: { marginBottom: 48, borderBottom: '1px solid #111', paddingBottom: 48, cursor: 'pointer' },
  thumb: { width: '60%', aspectRatio: '1', marginBottom: 14, overflow: 'hidden' },
  thumbEmpty: { backgroundColor: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center' },

  title: { color: '#fff', fontFamily: 'monospace', fontSize: 12, letterSpacing: '1.5px', marginBottom: 4 },
  sub: { color: '#444', fontFamily: 'monospace', fontSize: 11, letterSpacing: '1.2px' },

  back: { color: '#444', fontFamily: 'monospace', fontSize: 11, letterSpacing: '1.5px', marginBottom: 32, display: 'inline-block', cursor: 'pointer' },
  detailImg: { width: '60%', marginBottom: 16 },
  detailTitle: { color: '#fff', fontFamily: 'monospace', fontSize: 12, letterSpacing: '1.5px', marginTop: 24, marginBottom: 8 },
  detailSub: { color: '#444', fontFamily: 'monospace', fontSize: 11, letterSpacing: '1.2px', lineHeight: '20px' },

  placeholder: { width: '60%', aspectRatio: '1', backgroundColor: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 },
  ph: { color: '#2a2a2a', fontFamily: 'monospace', fontSize: 11, letterSpacing: '2px' },
};