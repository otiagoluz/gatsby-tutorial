import React from "react";
import Header from '../components/Header'
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <div style={{ color: 'teal' }}>
      <Header headerText='About Hatsby' />
      <Header headerText='Such wow. Very React.'/>
    </div>
  </Layout>
)