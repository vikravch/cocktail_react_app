import {AppContext} from "./contextCreator";
import React from "react";

// Higher order component
export default function withContext(Component) {
    return (props) => {
        return (
            <AppContext.Consumer>
                {value =>
                    // 1. Copy all props to the component
                    // 2. Add context to the component as a prop context
                    <Component {...props} context={value}/>}
            </AppContext.Consumer>
        );
    };
}