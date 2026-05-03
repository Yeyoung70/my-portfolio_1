import { useState } from 'react';
import { works } from '../data/works';
import type { Work, Category } from '../data/works';

const categories: { label: string; value: Category }[] = [
  { label: 'ALL', value: 'all' },
  { label: 'FILM', value: 'film' },
  { label: 'PLANNING', value: 'planning' },
  { label: 'BRAND', value: 'brand' },
];

export default function WorkPage() {
  const [selected, setSelected] = useState<Work | null>(null);
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const filtered = activeCategory === 'all'
    ? works
    : works.filter(w => w.category === activeCategory);

  if (selected) {
    return (
      <div style={styles.container}>
        <span style={styles.back} onClick={() => setSelected(null)}>← BACK</span>

        {selected.images.length > 0 && selected.images.map((src, i) => (
          <div key={i} style={styles.detailImg}>
            <img src={src} alt="" style={{ width: '100%', display: 'block' }} />
          </div>
        ))}

        {selected.videoUrls && selected.videoUrls.map((url, i) => (
          <div key={i} style={styles.videoWrap}>
            <iframe
              src={url}
              style={styles.video}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        ))}

        <div style={styles.detailTitle}>{selected.title}</div>
        <div style={styles.detailSub}>{selected.desc.split('\n').map((line, i) => (
          <span key={i}>{line}<br /></span>
        ))}</div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <div style={styles.filter}>
        {categories.map(c => (
          <span
            key={c.value}
            style={{
              ...styles.filterBtn,
              color: activeCategory === c.value ? '#fff' : '#444',
              borderBottom: activeCategory === c.value ? '1px solid #fff' : '1px solid transparent',
            }}
            onClick={() => setActiveCategory(c.value)}
          >
            {c.label}
          </span>
        ))}
      </div>

      {filtered.map((w) => (
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
  filter: { display: 'flex', gap: '2rem', marginBottom: '3rem' },
  filterBtn: {
    fontFamily: "'IBM Plex Mono', monospace",
    fontSize: 11,
    letterSpacing: '1.5px',
    cursor: 'pointer',
    paddingBottom: '4px',
  },
  item: { marginBottom: 48, borderBottom: '1px solid #111', paddingBottom: 48, cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  thumb: { width: '60%', aspectRatio: '1', marginBottom: 14, overflow: 'hidden', alignSelf: 'center' },
  thumbEmpty: { backgroundColor: '#0d0d0d', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  title: { color: '#fff', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '1.5px', marginBottom: 4 },
  sub: { color: '#444', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '1.2px' },
  back: { color: '#444', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '1.5px', marginBottom: 32, display: 'inline-block', cursor: 'pointer' },
  detailImg: { width: '60%', margin: '0 auto 16px' },
  detailTitle: { color: '#fff', fontFamily: "'IBM Plex Mono', monospace", fontSize: 12, letterSpacing: '1.5px', marginTop: 24, marginBottom: 8 },
  detailSub: { color: '#444', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '1.2px', lineHeight: '20px' },
  videoWrap: { width: '100%', maxWidth: 600, aspectRatio: '16/9', margin: '0 auto 24px' },
  video: { width: '100%', height: '100%', border: 'none' },
  ph: { color: '#2a2a2a', fontFamily: "'IBM Plex Mono', monospace", fontSize: 11, letterSpacing: '2px' },
};