import React from 'react';
import HeaderInfo from '../HeaderInfo/HeaderInfo';
import Navbar from '../Navbar/Navbar';
import Section from '../Section/Section';
import LogInLogOut from '../LogInLogOut/LogInLogOut'
import { FaMapMarkerAlt,FaRegEnvelope } from "react-icons/fa";
import HeaderBottom from '../HeaderBottom/HeaderBottom';
import styles from "./Header.module.scss"
import Line from '../Line/Line';
function Header(props) {
    return (
        <section className={styles.header}>
            <Section>
            <section className={styles.headerTop}>
                <section className={styles.headerLeft}>
                    <HeaderInfo
                    fontAwesome={<FaMapMarkerAlt/>}
                    link={"г. Кокчетав, ул. Ж. Ташенова 129Б"}
                    text={"(Рынок Восточный)"}
                    />
                    <HeaderInfo
                    fontAwesome={<FaRegEnvelope/>}
                    link={"opt.sultan@mail.ru"}
                    text={"На связи в любое время"}
                    />
                    <LogInLogOut/>
                </section>
                <section className='header-right'>
                        <Navbar/>
                </section>
            </section>
            </Section>
            <Line></Line>
            <Section>
            <section className='header-bottom'>
                <HeaderBottom/>
            </section>
            </Section>
            <Line></Line>
        </section>
    );
}

export default Header;