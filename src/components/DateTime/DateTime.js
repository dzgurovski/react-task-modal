import React, {Component} from 'react';
import moment from 'moment';

export default class DateTime extends Component {
    constructor(props) {
        super(props);
        this.state = {
            "date": moment.unix(props.dateDate).format('DD MMMM YYYY'),
            "hour": moment.unix(props.dateDate).format('HH:mm ')
        }
    }


    render() {
        let status;
        switch (this.props.status) {
            case 'date':
                status = this.state.date;
                break;
            case 'hour':
                status = this.state.hour;
                break;
            default:
                status = this.state.date + this.state.hour ;
        }
        return (
            <span> {status}</span>
        )

    }
}