import React, {Component} from 'react';
import Attributes from '../Attributes/Attributes'
import userAvatar from '../../assets/images/sait3.png'
import defaultAvatar from '../../assets/images/Missing_avatar.svg.png'
import InfoView from './InfoView'
import ModalApplicationHeader  from './ModalApplicationHeader'

export default class Modal extends Component {
    constructor(props) {
        super(props);
        this.application = "application";
        this.share = "share";
        this.type = props.data.type;
        this.date = props.data.transaction['unix-timestamp'];
        this.attributes = props.data.transaction.attributes;
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        this.props.modalToggle(false, {})
    }

    render() {
        let applicationName,
            userImage,
            infoViewApplication,
            ModalHeader,
            AttributesHolder;
        if (this.type == this.application) {
            applicationName = this.props.data.application.name;
            userImage = userAvatar;
            infoViewApplication = <InfoView data={this.date} />;
            ModalHeader = <ModalApplicationHeader bgColor={this.props.data.application.appearance['bg-color']}
                                                  bgImage={this.props.data.application.appearance['bg-img']}
                                                  bgLogo={this.props.data.application.appearance['bg-logo']}/>
        } else {
            applicationName = 'Yoti Shared';
            userImage = defaultAvatar
        }
        AttributesHolder = this.attributes.map((e)=> {
             return Object.keys(e).map((keyName) => {
                return (
                 <Attributes
                        key={keyName}
                        name={keyName}
                        value={e[keyName]}/>
                )
            })
        });

        return (
            <div>
                <div className="overlay" onClick={this.closeModal}></div>
                <div className="modal-content">
                    {ModalHeader}
                    <div className="info">
                        <img src={userImage} alt="avatar"/>
                        <span>{applicationName}</span>
                        <span className="icon icon-steps_tick"/>
                        {infoViewApplication}
                    </div>
                    <div className="attributes">
                        {AttributesHolder}
                    </div>
                    <span className="close icon icon-dismiss-dark" onClick={this.closeModal}/>
                </div>
            </div>
        )
    }
}