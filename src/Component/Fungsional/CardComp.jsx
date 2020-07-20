import React from 'react'
import { Link } from 'react-router-dom'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';

//video 28
function CardComp(props) {
    return (
        <div>
            <CardDeck>
            <Card>
                
                <CardBody>
                    <CardTitle><h3>{props.judul}</h3></CardTitle>
                    <CardSubtitle>{props.tanggal}</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                    <Button>
                        <Link to={
                            {
                                pathname: `/detail/${props.id}`,
                                state: {
                                    judul: props.judul,
                                    tanggal: props.tanggal
                                }
                            }
                        }>Detail</Link>
                    </Button>
                </CardBody>
            </Card>
            </CardDeck>
        </div>
    )
}

export default CardComp