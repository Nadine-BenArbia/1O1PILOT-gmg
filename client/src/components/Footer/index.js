import React from 'react'
import {FaLinkedin,FaTwitter} from'react-icons/fa';

import { 
    FooterContainer,
    FooterWrap,
    FooterlinksContainer,
    FooterLinksWrapper,
    FooterLinksItems,
    FooterLinksTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    
    SocialIconLink }
  from './FooterElement';



const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterlinksContainer>
                <FooterLinksWrapper> 
                    <FooterLinksItems>
                    <FooterLinksTitle>101pilot</FooterLinksTitle>
                    <FooterLink to='/signin'>About/press</FooterLink>
                    <FooterLink to='/signin'>Reserch</FooterLink>
                    <FooterLink to='/signin'>Awards</FooterLink>
                    <FooterLink to='/signin'>Investors</FooterLink>
                    <FooterLink to='/signin'>Blog</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                    <FooterLinksTitle>Employers</FooterLinksTitle>
                    <FooterLink to='/signin'>Get a free Employer Account</FooterLink>
                    <FooterLink to='/signin'>Testimonials</FooterLink>
                    
                    </FooterLinksItems>
                    </FooterLinksWrapper> 
                    <FooterLinksWrapper> 
                    <FooterLinksItems>
                    <FooterLinksTitle>About US</FooterLinksTitle>
                  
                    <FooterLink to='/signin'>Guidelines</FooterLink>
                    <FooterLink to='/signin'>Do not Sell My personal information</FooterLink>
                    <FooterLink to='/signin'>Privacy Center</FooterLink>
                    </FooterLinksItems>
                    <FooterLinksItems>
                    <FooterLinksTitle>work with Us</FooterLinksTitle>
                    <FooterLink to='/signin'>Advertisers</FooterLink>
                    <FooterLink to='/signin'>Developers</FooterLink>
                    <FooterLink to='/signin'></FooterLink>
                    <FooterLink to='/signin'>Investors</FooterLink>
                    
                    </FooterLinksItems>
                    </FooterLinksWrapper> 
                </FooterlinksContainer>
                 <SocialMedia> 
                     <SocialMediaWrap>
                         <SocialLogo to='/'> 
                            101PIL0T
                         </SocialLogo>
                         <WebsiteRights> copyright ©{new Date().getFullYear()},
                         101pilot and logo are regestered Pl101,Inc
                         </WebsiteRights>
                     </SocialMediaWrap>
                     <SocialIconLink href="//www.linkedin.com" target="_blank" aria-label="Linkedin">
                         <FaLinkedin/>
                     </SocialIconLink>
                     <SocialIconLink href="/www.Twitter.com" target="_blank" aria-label="twitter">
                         <FaTwitter/>
                     </SocialIconLink>
                 </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;