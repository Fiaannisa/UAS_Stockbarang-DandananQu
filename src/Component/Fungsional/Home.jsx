import React from 'react'
import Blog from './Blog'
import Produk from '../Class/Produk';

const Home = () => {
    return <div>
        <Produk nama="Mackbook Pro 2020" stock="10" harga="33.000.000"/>
        <Produk nama="Mackbook Pro 2019" stock="15" harga="53.000.000"/>
        <Produk nama="Mackbook Pro 2021" stock="14" harga="43.000.000"/>
        <Produk nama="Mackbook Pro 2022" stock="50" harga="63.000.000"/>
        <Produk nama="Mackbook Pro 2023" stock="100" harga="73.000.000"/>
        <Produk nama="Mackbook Pro 2024" stock="108" harga="83.000.000"/>
    </div>
}

export default Home;