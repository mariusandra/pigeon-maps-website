import './styles.scss'

import React from 'react'
import { Route } from 'react-router'

import Header from '~/components/header'

import bundles from './bundles'

export default () => (
  <div>
    <Header />
    <div>
      <Route exact path='/' component={bundles.homepage} />
    </div>
  </div>
)
