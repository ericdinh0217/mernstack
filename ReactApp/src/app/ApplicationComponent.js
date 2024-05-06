import React, { Component } from "react";

export default class ApplicationComponent extends Component {

    render(){
        let name = "Mayuri!!!"
        return(
            <div>
                <h4>This is main react application component</h4>
                <b>{name}</b>
            </div>
        )
    }
}