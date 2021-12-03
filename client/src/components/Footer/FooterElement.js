import styled from 'styled-components'
import { Link } from 'react-router-dom'




export const FooterContainer =styled.footer`
background-color:#101522;
`
export const FooterWrap = styled.div `
padding :48px 24px;
display :flex;
flex-direction:column;
justify-content:center;
align-items:center;
max-width: 1100px ;
margin: 0 auto ;
`
export const FooterlinksContainer = styled.div `
display :flex;
justify-content:center;

@media screen and (max-width:820px) {
    padding-top: 32px ;
}
`
export const FooterLinksWrapper = styled.div `
display:flax;

@media screen and (max-width:820px) {
    flex-direction:column ;
}
`
export const FooterLinksItems = styled.div ` 
display: flex;
flex-direction:column;
align-items: flex-start;
margin:16px;
text-align : left ;
width:160px ;
box-sising:border-box;
color:#fff ;

@media screen and (max-width:420px) {
    margin:0;
    padding:10px;
    width:100%
}
`

export const FooterLinksTitle = styled.h1 `
font-size: 14px;
margin-bottom: 16px;
`
export const FooterLink = styled(Link)`
color:#fff;
text-decoration:none;
margin-bottom : 0.5rem;
font-size:14px;

&hover{
    color:#01bf71;
    transition:0.3s ease-out
}
`
export const SocialMedia = styled.section `
max-width:1000px;
width:100%;

`
export const SocialMediaWrap = styled.div `
display :flex;
justify-content:space-between;
align-items :center;
max-width : 1100px;
margin: 40px auto 0 auto;


@media screen and (max-width:820px) {
    flex-direction:column ;
}

`
export const SocialLogo = styled(Link) ` 
color : #fff ;
justify-self:start;
cursor:pointer;
text-decoration: none;
font-size:1.5rem;
align-items:center;
margin-bottom:16px;
font-wieght:bold;
`
export const WebsiteRights = styled.small `
color:#fff;
margin-bottom: 16px;

`
export const SocialIcons =styled.div ` 
display:flex;
justify-content: spave-between;
align-items:center;
width:24m;
`
export const SocialIconLink = styled.a` 
color:#fff
font-size:24px;
`;