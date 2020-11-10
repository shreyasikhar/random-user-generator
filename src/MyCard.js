import React from 'react'
import {Card, CardBody, CardTitle, CardText} from 'reactstrap'
import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'

const MyCard = ({details}) => {
    return (
        <Card className="mb-2">
            <CardBody className="text-center">
                <img 
                height="150" 
                width="150"
                className="rounded-circle img-thumbnail border-danger"
                src={details.picture?.large}
                alt=""
                />
                <CardTitle className="text-primary">
                    <h1>
                        <span className="pr-2">{details.name?.title}</span>
                        <span className="pr-2">{details.name?.first}</span>
                        <span className="pr-2">{details.name?.last}</span>
                    </h1>
                </CardTitle>
                <CardText><FaMapMarkedAlt /> {details.location?.city}</CardText>
                <CardText><FaPhone /> {details.phone}</CardText>
                <CardText><FaEnvelope /> {details.email}</CardText>
                <CardText className="btn btn-success btn-block">Age {details.dob?.age}</CardText>
            </CardBody>
        </Card>
    )
}

export default MyCard;