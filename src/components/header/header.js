import React from 'react';
import { Image } from 'components/shared-ui/image';
import logo from 'resources/images/guardianlink_logo.svg'
import ListItem from 'components/shared-ui/list-item';
import { useWindowSize } from 'components/utils/useWindowSize';
import { MobileMenu } from './mobile-menu';

const navLink = [
    { text: 'Layer 2', url: 'https://layer2.guardianlink.io/', type: 'layer' },
    { text: 'About Us',  type: 'link',url:'/about' },
    { text: 'No-Code Platform', url: '/nocodeplatform', type: 'link' },
    {
        text: 'Drops',  type: 'sub_menu',
        subMenu: [{ text: 'Jump.trade ', url: 'https://www.jump.trade/' }, { text: 'Chakra The Invincible NFTs ', url: 'https://chakra.beyondlife.club/' }, { text: 'Amitabh NFTs', url: 'https://amitabh.beyondlife.club/' }]
    },
    { text: 'Join Our Discord', url:  'https://discord.com/invite/GuardianLink' , type: 'link_button'},
]


export const Header = () => {
    const { width } = useWindowSize();

    const isMobile = width <= 1024;

    return(
        <header className='header__wrap'>
            <div className='header__logo'>
                <a href='/'  >
                <Image src={ logo }/>
                </a>
                
            </div>

            <div className='header__list-wrap'>
                {!isMobile ? 
                    
                    <ul className='header__list'>
                        {navLink.length && navLink.map(({ text, url, type, subMenu , }, index) =>
                            <ListItem key={index} url={url} text={text} type={type}  subMenu={ subMenu }></ListItem>
                        )}
                    </ul>
                    :
                   <MobileMenu navLink={navLink}/>
                }
               

            </div>

        </header>
    )
}


