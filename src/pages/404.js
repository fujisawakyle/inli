import React from 'react'

const NotFoundPage = () => (
  <div style={styles.container}>
    <h1 style={styles.h1}>404</h1>
    <h3 style={styles.h3}>Page not found!</h3>
    <p style={styles.p}>Sorry, but the page you were trying to view does not exist.</p>
  </div>
)

const styles = {
  container: {
    background: 'rgb(230,230,230)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh'
  },
  h1: {
    color: '#222',
    fontSize: '7em',
  },
  h3: {
    marginBottom: '0',
    color: '#222',
    fontSize: '3em',
    textAlign: 'center',
  },
  p: {
    padding: '1em',
    color: '#222',
    fontSize: '1em',
  }
}

export default NotFoundPage
