import React from 'react';
import styles from "./Catalog.module.scss"
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Header from '../../components/Header/Header';
import Section from '../../components/Section/Section'
import Breadcrumbs from '../BreadCrumbs/BreadCrumbs'
import Categories from '../Categories/Categories';
import Cosmetic from '../Cosmetic/Cosmetic';
import FilterPrice from '../FilterPrice/FilterPrice';
import Types from '../Types/Types';
import Manufacturer from '../Manufacturer/Manufacturer';
import Brand from '../Brand/Brand';
import Footer from '../Footer/Footer';
import Item from '../Item/Item';
function Catalog(props) {
    return (
        <div className={styles.Catalog}>
      <Header/>
      <Section>
      <Breadcrumbs/>
      <Cosmetic/>
      <Types/>
      <Row>
        <Col xs={3}>
        <FilterPrice/>
        <Manufacturer/>
        <Brand/>
        <Categories/>
        </Col>
        <Col xs={9}><Item/></Col>
      </Row>
    </Section>
    <Footer/>
        </div>
    );
}

export default Catalog;