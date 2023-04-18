import React from 'react';
import ShowItems from '../../ShowItems/ShowItems';
import Section from "../Section/Section"

function ShowItem(props) {
    return (
        <div>
            <Section>
            <ShowItems/>
            </Section>
        </div>
    );
}

export default ShowItem;