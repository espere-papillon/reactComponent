import React, {useState} from 'react';
import './App.css';
import Rating, {RatingValueType} from "./Rating/Rating";
import Accordion from "./Acordion/Accordion";
import {OnOff} from "./OnOff/OnOff";
import UnControlledAccordion from "./UnControlledAcordion/UnControlledAcordion";
import UnControlledRating from "./UnControlledRating/UnControlledRating";
import {UncontrolledOnOff} from "./UncontrolledOnOff/UncontrolledOnOff";

function App() {

    let [ratingValue, setRaringValue] = useState<RatingValueType>(0)
    let [accordionValue, setAccordionValue] = useState<boolean>(true)
    let [onValue, setOnValue] = useState<boolean>(false)

    return (
        <div className={"container"}>
            <AppTitle title={"This is APP component"}/>
            <UnControlledAccordion titleValue={"Menu uncontrolled"}/>
            <UnControlledRating/>
            <OnOff on={onValue} onChange={setOnValue}/>
            <Accordion titleValue={"Menu uncontrolled"} collapsed={accordionValue} onChange={() => {setAccordionValue(!accordionValue)
            }} />
            <Rating value={ratingValue} onClick={setRaringValue}/>
            <UncontrolledOnOff onChange={setOnValue}/>{onValue.toString()}
        </div>
    );
}

type AppTitlePropsType =
    {
        title: string
    }

function AppTitle(props: AppTitlePropsType) {
    return (
        <h1>{props.title}
        </h1>
    )
        ;
}

export default App;
