import React, {useState} from 'react'
import styles from './OnOff.module.css'

type OnOffTypeProps = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff = (props: OnOffTypeProps) => {
    let [on, setOn] = useState(false)

    const OnStyle = {
        marginTop: "50px",
        marginBottom: "50px",
        width: "40px",
        height: "20px",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "white",
        display: "inline-block"
    }
    const OffStyle = {
        marginTop: "50px",
        marginBottom: "50px",
        width: "40px",
        height: "20px",
        border: "1px solid black",
        marginLeft: "2px",
        backgroundColor: props.on ? "white" : "red",
        display: "inline-block"
    }

    const IndicatorStyle = {
        marginTop: "50px",
        width: "20px",
        height: "20px",
        borderRadius: "50%",
        border: "1px solid black",
        marginLeft: "5px",
        backgroundColor: props.on ? "green" : "red",
        display: "inline-block"
    }
    return (
        <div>
            <div style={OnStyle} onClick={() => {
                props.onChange(true)
            }}>ON
            </div>
            <div style={OffStyle} onClick={() => {
                props.onChange(false)
            }}>OFF
            </div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}