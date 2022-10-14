import React from 'react'
import Logo from '../../components/Logo'
import Navbar from './Navbar'
import SelectedNews from './SelectedNews'
import TrendingNews from './TrendingNews'

export default function Home() {
    return (
        <div>
            <Logo />
            <Navbar />
            <TrendingNews />
            <SelectedNews />
        </div>
    )
}
