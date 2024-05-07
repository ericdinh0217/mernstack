import React, { Component } from "react";

export default class ApplicationComponent extends Component {

    render(){
        let name = "Mayuri!!!"
        return(
            <div className="topdiv">
                <h4>This is main react application component</h4>
                <b id="name_element">{name}</b>
                <form>
                <div className="col-md-12">
                    <label className="col-md-4">User Name</label>
                    
                    <input type="text" className="col-md-6" maxLength={14} placeholder="Please type here ..."></input>
                    <hr/>
                    <input className="col-md-6" type="email" maxLength={14}
                        placeholder="Please type here for email"></input>
                    <hr/>
                    <input className="col-md-6" type="tel" maxLength={10}
                        placeholder="Please type here for telephone"></input>
                    <hr/>
                    <input className="col-md-6" type="date" maxLength={14}
                        placeholder="Please type here for email"></input>
                    <hr/>
                    <input className="col-md-6" type="checkbox" maxLength={14}
                        placeholder="Please type here for email"></input>
                    <hr/>
                    <input className="col-md-6" type="color" maxLength={14}
                        placeholder="Please type here for email"></input>
                    <hr/>
                    <button type="submit">Submit</button>
                </div>
                </form>
            </div>
        )
    }
}