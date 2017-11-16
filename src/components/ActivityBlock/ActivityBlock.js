import React, {Component} from 'react';
import  DateTime from '../DateTime/DateTime'

export  default class ActivityBlock extends Component {
    constructor(props) {
        super(props);
        this.data = props.data;
        this.index = props.index;
        this.date = this.data.transaction['unix-timestamp'];
        this.openModal = this.openModal.bind(this)
    }

    openModal() {
        this.props.togleModal(true, this.data)
    }

    render() {
        let applicationName;
        if(this.data.type == 'application'){
            applicationName = this.data.application.name
        }else{
            applicationName = 'Yoti Shared'
        }
        return (
            <div className="activity-block" onClick={this.openModal}>
                <div className="header">
                    <span><DateTime dateDate={this.date} status="date"/></span>
                </div>
                <div className="content">
                    <div className="left">
                        <span className="icon icon-activity_tick"/>
                        <span className="icon icon-user_selfie_ph" />
                        <span>{applicationName}</span>
                    </div>
                </div>
            </div>
    )
    }
    }