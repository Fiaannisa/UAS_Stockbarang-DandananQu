import React, { PureComponent } from 'react'
import qs from 'querystring'
import axios from 'axios'
import {Table, Button, Container, NavLink, Alert} from 'reactstrap'

const api = 'http://localhost:3001/'

class ListComp extends PureComponent {
    constructor(props) {
        super(props)

        this.state = {
            mahasiswa: [],
            response: '',
            display: 'none'
        }
    }

    componentDidMount(){
        axios.get(api+'/tampil').then(res=>{
            this.setState({
                mahasiswa: res.data.values
            })
        })
    }

    render() {
        return (
            
        )
    }
}

export default ListComp