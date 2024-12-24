import React from 'react'
import Header from './components/header'

const AuthenticatedLayout = ({ children }: any) => {
    return (
        <div>
            <Header />
            {children}
        </div>
    )
}

export default AuthenticatedLayout