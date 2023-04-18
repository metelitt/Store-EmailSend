import React from 'react';
import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import PriceList from '../PriceList/PriceList';
import SaitCategories from '../SaitCategories/SaitCategories';
import Section from '../Section/Section'
import SaitMenu from '../SaitMenu/SaitMenu';
import Sultan from '../Sultan/Sultan';
import styles from "./Footer.module.scss";
import Contacts from '../Contacts/Contacts';

function Footer(props) {
    return (
        <div className={styles.Footer}>
            <Section>
                <Row>
                    <Col xs={3}>
                    <Sultan/>
                    </Col>
                    <Col>
                    <SaitMenu/>
                    </Col>
                    <Col>
                    <SaitCategories/>
                    </Col>
                    <Col>
                    <PriceList/>
                    </Col>
                    <Col>
                    <Contacts/>
                    </Col>
                </Row>
                </Section>
        </div>
    );
}

export default Footer;