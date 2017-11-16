import React, {Component} from 'react';
import  Header from './Header/Header';
import  Sidebar from './Sidebar/Sidebar';
import  Main from './Main/Main';
import  mockData from '../data/mock-data.json';
import Modal from './Modals/Modal'

export  default class Application extends Component {
    constructor(props) {
        super(props);
        this.state = {isModal: false,modalData:{}};
        this.modalToggle = this.modalToggle.bind(this);
    }

    modalToggle(status,data) {
        this.setState({isModal: status,modalData:data});
    }

    render() {
        return (
            <div className="wrap">
                <Header />
                <Sidebar />
                <Main data={mockData} toggleModal={this.modalToggle}/>
                {this.state.isModal ? <Modal data={this.state.modalData} modalToggle={this.modalToggle}/> : null}
            </div>
        )
    }
}