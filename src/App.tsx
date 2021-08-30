import React, { useState } from "react";
import * as _ from "lodash";
import "./App.css";
import { data, IData, IFileGroup, ECompare, EFileTyps, IParams } from "../src/data";

interface IProps {
    selfData: IParams;
    children: Array<IFileGroup>;
    show: boolean;
}
const getChildren = (fileData: IFileGroup, pagename: string) => {
    const cloneData = _.cloneDeep(fileData[pagename]);
    delete cloneData.params;
    const keys = Object.keys(cloneData);
    return keys.map(v => cloneData[v]);
};
function App() {
    const [count, setCount] = useState(0);
    const keys = Object.keys(data);
    return (
        <div className='content'>
            <h1>文件比对页面</h1>
            <div className='App'>
                {keys.map(item => {
                    const fileData: IFileGroup = data[item];
                    if (item === "submit") {
                        return (
                            <div className='submit'>
                                <h3>提交的代码</h3>
                                <ComponentChild
                                    selfData={fileData["pages"]["params"]}
                                    children={getChildren(fileData, "pages")}
                                    show={true}
                                />
                            </div>
                        );
                    } else {
                        return (
                            <div className='release'>
                                <h3>对比的代码</h3>
                                <ComponentChild
                                    selfData={fileData["pages"]["params"]}
                                    children={getChildren(fileData, "pages")}
                                    show={true}
                                />
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
}
export default App;

function ComponentChild(props: IProps) {
    const [componentShow, setComponentShow] = useState(true);
    const { children, show, selfData } = props;
    const { size, fileType, space, pageName } = selfData;
    return (
        <div
            className='item'
            style={{ display: show ? "block" : "none" }}
            onClick={e => {
                e.stopPropagation();
                //  syncClick(currentData.params?.filePath);
                componentShow ? setComponentShow(false) : setComponentShow(true);
            }}>
            <div className='line'>
                {Array(space)
                    .fill("")
                    .map((v, index) => (
                        <span key={index} className='space' />
                    ))}
                {fileType === EFileTyps.dir && (
                    <img
                        className='fileImage'
                        src='http://pic.616pic.com/ys_img/00/08/21/YFrLTxFeDC.jpg'
                    />
                )}

                <span className='fileName'>{pageName}</span>
                {/* {children.length > 1 && <span className='plus'> {componentShow ? "+" : "-"}</span>} */}

                <span className='size'>{size}KB</span>
            </div>
            {children.map((v: IFileGroup) => {
                const pageName: string = v.params?.pageName;
                debugger;
                const children = getChildren({ [pageName]: v }, pageName);
                console.log(children);
                return (
                    <ComponentChild selfData={v.params} children={children} show={componentShow} />
                );
            })}
        </div>
    );
}
