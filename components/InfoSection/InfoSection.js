import React from 'react'
import { Link } from 'react-router-dom'
import {
    InfoSec,
    InfoRow,
    InfoColumn,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    ImgWrapper,
    Img
} from './InfoSection.element'
import { Container,Button } from '../../GlobalStyle'
import {
    
} from './InfoSection.element'

const InfoSection = ({
    lightBg,
    imgStart,
    lightTopLine,
    lightText,
    lightTextDesc,
    topLine,
    Headline,
    Description,
    buttonLabel,
    primary,
    alt,
    start,
    img
}) => {
    return (
        <>  
            <InfoSec lightBg={lightBg}>
                <Container>
                    <InfoRow imgStart={imgStart}> 
                        <InfoColumn>
                            <TextWrapper>
                                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                                <Heading lightText={lightText}>{Headline}</Heading>
                                <Subtitle lightTextDesc={lightTextDesc}>{Description}</Subtitle>
                                <Link to='/sign-up'>
                                    <Button big fontBig primary={primary}>{buttonLabel}</Button>
                                </Link>
                            </TextWrapper>
                        </InfoColumn>
                        <InfoColumn>
                            <ImgWrapper start={start}>
                                <Img src={img} alt={alt} />
                            </ImgWrapper>
                        </InfoColumn>
                    </InfoRow>
                </Container>
            </InfoSec>
        </>
    )
}

export default InfoSection;
