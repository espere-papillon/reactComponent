import React from 'react';

type AccordionPropsType = {
    titleValue: string
    onChange: () => void
    collapsed: boolean
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    return (
        <h3 onClick={props.onChange}>{props.title}</h3>
    );
}

function AccordionBody() {
    return (
        <ul>
            <li>html</li>
            <li>css</li>
            <li>ts</li>
        </ul>
    );
}

export default Accordion;
