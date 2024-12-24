import React from 'react'
import Header from './components/header'
import Footer from './components/footer'

function UnauthenticatedLayout({ children }: any){
    return (
        <div>
            <Header />
            {children}
            <Footer/>
        </div>
    )
}

export default UnauthenticatedLayout