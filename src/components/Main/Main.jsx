import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../Footer/Footer';
import Section from "../Section/Section"
import MainImg from '../MainImg/MainImg';
import Sales from '../Sales/Sales';
function Main() {
    return (
        <div>
            <Header/>
            <MainImg/>
            <Section>
                <Sales/>
            </Section>
            <Footer/>
        </div>
    );
}

export default Main;