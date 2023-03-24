import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faTelegram, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const socialIcons = [{ icon: faDiscord, url:'https://discord.com/invite/GuardianLink'}, { icon: faTelegram, url:'https://t.me/guardiannft'}, { icon: faTwitter, url:'https://twitter.com/Guardian_NFT'}, { icon: faInstagram, url:'https://www.instagram.com/accounts/login/?next=/guardianlinkofficial/'}]

export const SocialItems = () => { 
    return (
        <>
            <h5>Community</h5>

            {socialIcons && socialIcons.map(({ icon, url }, index) =>
                <a key={index} className='social__icon' href={url} target={'_blank'} >
                    <FontAwesomeIcon icon={ icon } />
                </a>  
            )
            }
        </>
    )
}