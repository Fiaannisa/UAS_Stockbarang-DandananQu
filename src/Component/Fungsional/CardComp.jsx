import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

function CardComp(props) {
    return (
        <div>
            <Card>
                <CardImg top width="100%" src="https://placeimg.com/640/480/tech" alt="Card image cap" />
                <CardBody>
                    <CardTitle><h3>{props.judul}</h3></CardTitle>
                    <CardSubtitle>{props.tanggal}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>Detail</Button>
                </CardBody>
            </Card>
        </div>
    )
}

export default CardComp