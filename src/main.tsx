import React from 'react'
import ReactDOM from 'react-dom/client'

import Navbar from './components/navbar'
import Preview from './components/preview'
import Flowers from './components/flowers'
import NftItems from './components/nft-items'
import Footer from './components/footer'

import './assets/styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Navbar />
    <Preview />
    <Flowers />
    <NftItems />
    <Footer />
  </React.StrictMode>
)
