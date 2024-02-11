import React, {Component} from "react"
import {Name} from './nameClss'

export class UserClass extends Component {
    constructor(props){
        super(props);
        console.log(props.name , "contructor");
    }
    
    componentDidMount(){
        debugger;
        console.log(this.props.name , "compoenent did mount");
    }

    render (){
        console.log(this.props.name , "render");
        debugger;
        console.log(this);
        var {name,location}   = this.props;
        return (<div>
                    <div className="p-4" onClick={a=>{this.setState({count : count+1})}}>
                        <Name name={name}/>
                    </div>
                    <div className="p-4">
                        <>Address : {location}</>
                    </div>
                </div>);
    }
}

// props want access inside the contructor pass the argument then only we can access the props inside constructor
export class UserClass1 extends Component {
    constructor(props){
        super(props);
        this.props = props
        console.log("props",this.props)
        this.state = {
            count  : 0 ,
            count1 : 0 ,
        };
    }
    render (){
        // console.log(this);
        const {count,count1} = this.state;
        var {name,location}   = this.props;
        // console.log(name);
        return (<div>
            <input type="text" placeholder="Enter the name"></input>
            <div className="p-4" onClick={a=>{this.setState({count : count+1})}}>{name + " " + location}</div>
            <div className="p-4">{count}</div>
            <div className="p-4" onClick={a=>{this.setState({count1 : count1+1})}}>User Classes</div>
            <div className="p-4">{count1}</div>
        </div>);
    }
}

// without contructor we can acces the this.props React will append the props to this object
export class UserClass2 extends Component {
    constructor(){
        super();
        // console.log("props ",props)
        console.log("props ",this.state)
        this.state = {
            count: 0
        }
        console.log("props ",this.state)
    }
    render (){
        console.log(this);
        return (<div>
            <div className="p-4">{this.props.name}</div>
        </div>);
    }
}