export default function InfoPage() {
    return (
      <div style={styles.container}>
        <div style={styles.wrap}>
          <div>
            <div style={styles.photo}>
              {/* 사진 있으면: <img src="/images/photo.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> */}
              <span style={styles.ph}>PHOTO</span>
            </div>
          </div>
  
          <div>
            <div style={styles.name}>Yeyoung Lee</div>
            <div style={styles.contact}>
              <a href="mailto:your@email.com" style={styles.link}>doqhd2@gmail.com</a>
              <a href="https://www.instagram.com/__yeyoun/" target="_blank" style={styles.link}>INSTAGRAM</a>
            </div>
  
            <div style={styles.bio}>
              I AM A GRAPHIC DESIGNER<br />
              WORKING WITH TYPOGRAPHY AND<br />
              IMAGE. I COLLABORATE WITH<br />
              BRANDS, ARTISTS, FILMMAKERS,<br />
              MUSICIANS, AND CULTURAL<br />
              INSTITUTIONS.
            </div>
  
            <div style={styles.clientsLabel}>SELECTED CLIENTS</div>
            {[
              'CLIENT ONE',
              'CLIENT TWO',
              'CLIENT THREE',
              'CLIENT FOUR',
              'CLIENT FIVE',
              'CLIENT SIX',
            ].map((c) => (
              <div key={c} style={styles.client}>{c}</div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  
  const styles: Record<string, React.CSSProperties> = {
    container: { padding: '3rem 2rem 100px' },
    wrap: {
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: '2rem',
        maxWidth: 500,
      },
  
      photo: {
        width: '100%',
        aspectRatio: '1',
        backgroundColor: '#0d0d0d',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 28,
        overflow: 'hidden',
      },
    ph: { color: '#2a2a2a', fontFamily: 'monospace', fontSize: 11, letterSpacing: '2px' },
  
    name: { color: '#fff', fontFamily: 'monospace', fontSize: 13, letterSpacing: '1.5px', marginBottom: 8 },
    contact: { display: 'flex', flexDirection: 'column' },
    link: { color: '#444', fontFamily: 'monospace', fontSize: 11, letterSpacing: '1.2px', lineHeight: '2', textDecoration: 'none' },
  
    bio: { color: '#888', fontFamily: 'monospace', fontSize: 12, letterSpacing: '1px', lineHeight: '22px', marginTop: 28, marginBottom: 28 },
  
    clientsLabel: { color: '#333', fontFamily: 'monospace', fontSize: 11, letterSpacing: '2px', marginBottom: 12 },
    client: { color: '#666', fontFamily: 'monospace', fontSize: 12, letterSpacing: '1px', lineHeight: '2.2' },
  };