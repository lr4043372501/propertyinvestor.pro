import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>PropertyInvestor.pro — Trusted Real Estate Solutions</title>
        <meta name="description" content="Expert property investing and resources. Partner with leaders you can trust." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg,#1a237e 70%,#43a047 100%)',
        color: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{fontSize: '2.6rem', fontWeight: 'bold'}}>PropertyInvestor.pro</h1>
        <p style={{
          fontSize: '1.35rem',
          maxWidth: 500,
          textAlign: 'center',
          margin: '1.5rem 0'
        }}>
          Trusted Property Investment & Resources.
        </p>
        <a href="mailto:contact@propertyinvestor.pro" style={{
          background: '#43a047',
          padding: '0.9rem 2rem',
          borderRadius: '8px',
          color: '#fff',
          fontWeight: 'bold',
          textDecoration: 'none',
          boxShadow: '0 4px 24px rgba(67,160,71,0.08)'
        }}>
          Contact Us
        </a>
      </main>
    </>
  )
}
