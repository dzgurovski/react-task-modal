import React, {Component} from 'react';


export default class Attributes extends Component {
    constructor(props) {
        super(props);
        this.attrName = props.name;
        this.attrValue = props.value;
    }

    static replaceDash(name){
        return name.replace('-', ' ');
    }

    render() {
        let attributeValue;
        if(this.attrName == 'selfie'){
            attributeValue = <img src={this.attrValue} alt="selfie"/>
        }else{
            attributeValue = <span className="value text-bold">{this.attrValue}</span>
        }
        return (
            <div className="attribute">
                <span className="name">{Attributes.replaceDash(this.attrName)}: </span>
                {attributeValue}
            </div>
        )
    }
}