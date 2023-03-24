import React from 'react'
import { Image } from 'components/shared-ui/image';
import logo from 'resources/images/guardianlink_logo.svg'
import { SocialItems } from './socialLinkItems';
import ListItem from 'components/shared-ui/list-item';
import FormInput from 'components/shared-ui/form-input';

const navLink = [
    // { text: 'Layer 2', url: '', type: 'link' },
    { text: 'About Us', url: '/about', type: 'link' },
    { text: 'No-Code Platform', url: '/nocodeplatform', type: 'link' },
    { text: 'Blog', url: 'https://www.guardianlink.io/blog/', type: 'blog' },
    { text: 'Contact Us', url: 'contact-us', type: 'link' },
    { text: 'Privacy Policy', url: '/privacy-policy', type: 'link' },
    { text: 'Terms & Conditions', url: '/terms-condition', type: 'link' },]
export const Footer = () => { 
    return (
        <footer className='footer__wrap'>
            <div className='footer__logo-wrap'>
                <Image src={logo} width={300} />
                <p>Mint. Protect. Monetize.</p>
                <SocialItems/>
            </div>
            <div className='footer__list-wrap'>
                <ul>
                {navLink.length && navLink.map(({ text, url,type }, index) =>
                    <ListItem key={index} url={url} text={text} type={ type}/>
                )}
                </ul>
            </div>
            <div className='footer__invite-wrap'>
                <div className='nft_brand'>
                    <h2 className="white_color"><span className="roun_icon"> </span>Creating  <span className="red_txt">NFT</span> Revolution.</h2>
                    <p>Distributed. Decentralized. Scalable. Secure.</p>
                </div>
                <div className='subscribe'>
                    <h3 className="exclusive-invite">Exclusive Invite</h3>
                    <FormInput/>
                </div>
                
            </div>
            {/* <div class="bottom_ftr"></div> */}
        </footer>
    )
}