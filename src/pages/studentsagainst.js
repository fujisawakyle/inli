import React from 'react';
import Gallery from '../components/Gallery';
import Header from '../components/Header/Header';

import "../styles/styles.css";

export default () => {
  return (
    <div>
      <Header header="root" />
      <div style={{ paddingTop: '4em', margin: '0 auto', width: '100%', maxWidth: '915px' }}>
        <Gallery />
      </div>
    </div>
  )
}