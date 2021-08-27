import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import data from "./data";

function App() {
    const [count, setCount] = useState(0);
    return (
        <div className='App'>
            {data.map(v => {
                return (
                    <div className='flex-item'>
                        <ComponentChild data={v} />
                    </div>
                );
            })}
        </div>
    );
}

export default App;

function ComponentChild(props) {
    const [count, setCount] = useState("block");

    console.log(props.data.span, "props.data.span ");
    return (
        <div
            className='item'
            style={{ display: props.show }}
            onClick={e => {
                e.stopPropagation();
                count === "none" ? setCount("block") : setCount("none");
            }}>
            {Array(props.data.span)
                .fill("")
                .map(v => {
                    return <span className='tags' />;
                })}
            <span>{props.data.name}</span>
            <span>{props.data.size}</span>
            <span>{props.data.file}</span>

            {props.show}
            {props.data.childrn &&
                props.data.childrn.map(v => {
                    return (
                        <div>
                            <ComponentChild data={v} show={count || "block"} />
                        </div>
                    );
                })}
        </div>
    );
}
