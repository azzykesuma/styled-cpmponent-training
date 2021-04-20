import React from 'react'
import { 
    homeObjOne,
    homeObjTwo,
 } from './Data'
import  InfoSection  from '../../components/InfoSection/InfoSection'

const Home = () => {
    return (
        <>
            <InfoSection {...homeObjOne}/>
            <InfoSection {...homeObjTwo}/>
        </>
    )
}

export default Home
