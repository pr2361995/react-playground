import { Component } from "react";


export class Name extends Component{
    constructor(props){
        super(props)
        console.log("nested component constructor",this.props.name)
    }
    
    componentDidMount(){
        console.log("nested component did mount",this.props.name)
    }

    render (){
        console.log("nested component render",this.props.name)
        return(
            <label>
                name : {this.props.name}
            </label>
        );
    }
}