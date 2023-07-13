import React from 'react'
import { Banner, ProductList, Slide } from 'src/components'

const HomePage = () => {
    document.title = 'Home'
    return (
        <main className='home-page'>
            <Banner />
            <Slide />
            <ProductList />
            <ProductList />
            <ProductList />
        </main>
    )
}

export default HomePage