import React,{ useState } from 'react'
import { Button } from '../../GlobalStyle'
import { FaFacebook,FaTwitter,FaYoutube,FaInstagram } from 'react-icons/fa'
import {
    FooterContainer,
    FooterSubheading,
    FooterSubscripton,
    FooterSubText,
    Form,
    FormInput,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinksTitle,
    FooterLink,
    FooterLinksItems,
    SocialMedia,
    SocialMediaWrap,
    CompanyLogo,
    CompanyItem,
    WebsiteRight,
    SocialIcon,
    SocialIconLink
} from './Footer.element';


const Footer = () => {
    const [email,handleChange] = useState('')
    const emailChange = e => {
        handleChange(e = e.target.value)
    }
    const click = e => {
        e.preventDefault();
        if(email === '') {
            alert('Please Insert Your Email to Proceed')
        }
        else {
            alert('Subscribed!')
        }
    }

    return (
        <FooterContainer>
            <FooterSubscripton>
                <FooterSubheading>
                    Subscribe to our Mail to receive the hottest offering and news!
                </FooterSubheading>
                <FooterSubText>
                    Unsubscribe at any time
                </FooterSubText>
                <Form
                >
                    <FormInput 
                    name='email' 
                    value={email} 
                    type='email' 
                    placeholder='Your Email'
                    onChange={emailChange}
                    />
                    <Button onClick={click} fontBig>Subscribe</Button>
                </Form>
            </FooterSubscripton>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>
                         About Us   
                        </FooterLinksTitle>
                        <FooterLink to='/sign-up'>How it Works</FooterLink>
                        <FooterLink to=''>Testimonials</FooterLink>
                        <FooterLink to=''>Investors</FooterLink>
                        <FooterLink to=''>Careers</FooterLink>
                        <FooterLink to=''>Terms of Services</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>
                         Contact Us   
                        </FooterLinksTitle>
                        <FooterLink to='/sign-up'>E-mail</FooterLink>
                        <FooterLink to=''>FaQ</FooterLink>
                        <FooterLink to=''>Facebook</FooterLink>
                        <FooterLink to=''>Twitter</FooterLink>
                        <FooterLink to=''>Youtube</FooterLink>
                    </FooterLinksItems>
                    </FooterLinksWrapper>\
                    <FooterLinksWrapper>
                    <FooterLinksItems>
                        <FooterLinksTitle>
                         Media   
                        </FooterLinksTitle>
                        <FooterLink to='/sign-up'>Article</FooterLink>
                        <FooterLink to=''>Newspaper</FooterLink>
                        <FooterLink to=''>Podcast</FooterLink>
                        <FooterLink to=''>Youtube</FooterLink>
                        <FooterLink to=''>Paper</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                        <FooterLinksTitle>
                         Policies   
                        </FooterLinksTitle>
                        <FooterLink to='/sign-up'>Conservative only</FooterLink>
                        <FooterLink to=''>Libertarian only</FooterLink>
                        <FooterLink to=''>Anti-woke policies</FooterLink>
                        <FooterLink to=''>No cancel culutre</FooterLink>
                        <FooterLink to=''>Encouraging Free Speech</FooterLink>
                    </FooterLinksItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <CompanyLogo to='/home'>
                        <CompanyItem />
                        ULTRA
                    </CompanyLogo>
                    <WebsiteRight>ULTRA  2021</WebsiteRight>
                <SocialIcon>
                    <SocialIconLink href='/' target='_blank' aria-label='facebook'>
                        <FaFacebook />    
                    </SocialIconLink>    
                    <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                        <FaTwitter />    
                    </SocialIconLink>    
                    <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />    
                    </SocialIconLink>    
                    <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                        <FaYoutube />    
                    </SocialIconLink>    
                </SocialIcon>    
                </SocialMediaWrap>
            </SocialMedia>
        </FooterContainer>
    )
}

export default Footer
