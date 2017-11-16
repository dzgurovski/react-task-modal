import React, {Component} from 'react';
import ActivityBlock from '../ActivityBlock/ActivityBlock';
export  default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = props.data
    }

    render() {
        let ActivitySection = this.state.receipts.map((item, index) => {
            return (
                <ActivityBlock togleModal={this.props.toggleModal} key={index} index={index} data={item}/>
            )
        });
        return (
            <main>
                <div>
                    <h6>Activity</h6>
                    <h4 className="text-bold">Activity</h4>
                    <h5>See a record of everyone you have shared details with.</h5>
                    {ActivitySection}
                </div>
            </main>
        )
    }
}