import React from "react";
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Site from './layout/Site'
import Header from './layout/Header'
import Content from './layout/Content'
import Router from './layout/Router'

const Layout = ({ children }) => (
  <Site>
    <Helmet
      title="Hayoung Yoo"
      meta={[
        { name: 'description', content: 'Ms. Yoo\'s personal website' },
        { name: 'keywords', content: 'teacher, school, education' },
        { name: 'msapplication-TileColor', content: '#da532c' },
        { name: 'theme-color', content: '#ffffff' },
      ]}
      script={[
        { 'src': 'https://use.fontawesome.com/releases/v5.0.4/js/all.js'},
      ]}
      link={[
        {'rel':'stylesheet', 'href': 'https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css'},
        {'rel':'apple-touch-icon', 'sizes':'180x180', 'href': '/apple-touch-icon.png'},
        {'rel':'icon', 'type':'image/png', 'sizes':'32x32','href': '/favicon-32x32.png'},
        {'rel':'icon', 'type':'image/png', 'sizes':'16x16','href': '/favicon-16x16.png'},
        {'rel':'manifest', 'href': '/site.webmanifest'}
      ]}
    />
    <Header />
    <Content>
      <Router />
    </Content>
  </Site>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout