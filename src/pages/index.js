import React from "react";
import { Link } from 'gatsby';
import Header from '../components/Header';
import Layout from '../components/Layout';

export default () => (
  <Layout>
    <Link to='/contato/'>Contato</Link>
    <Link to='/about-css-modules/'>CSS Modules</Link>
    <Header headerText='Hello Gatsby!'/>
    <p>What a world.</p>
    <img src="https://source.unsplash.com/random/400x200" alt="" />
  </Layout>
)