import React, {useState} from 'react'
import styles from './UncontrolledOnOff.module.css'

type OnOffTypeProps = {
    onChange: (on: boolean) => void
}

export const UncontrolledOnOff = (props: OnOffTypeProps) => {
    let [on, setOn] = useState(false)

    const OnStyle = {
        marginTop: "50px",
        marginBottom: "50px",
        width: "40px",
        height: "20px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "white",
        display: "inline-block"
    }
    const OffStyle = {
        marginTop: "50px",
        marginBottom: "50px",
        width: "40px",
        height: "20px",
        border: "1px solid black",
        marginLeft: "2px",
        backgroundColor: on ? "white" : "red",
        display: "inline-block"
    }

    const IndicatorStyle = {
        marginTop: "50px",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: on ? "green" : "red",
        display: "inline-block"
    }

    const onClicked = () => {
        setOn(true)
        props.onChange(true)
    }
    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div>
            <div style={OnStyle} onClick={onClicked}>ON
            </div>
            <div style={OffStyle} onClick={offClicked}>OFF
            </div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}