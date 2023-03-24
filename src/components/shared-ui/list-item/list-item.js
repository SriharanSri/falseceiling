import React from 'react';


export const ListItem = ({ url, text, type , subMenu} ) => { 
    return (
        <li className='nav__list'>
             { type === 'layer' &&
                <a target='_blank' href={url} className='nav__link'>
                    { text }
                </a>
            }
            { type === 'link' &&
                <a href={url} className='nav__link'  >
                    { text }
                </a>
            }
            { type === 'blog' &&
                <a href={url} className='nav__link' target={'_blank'} >
                    { text }
                </a>
            }
            { type === 'link_button' &&
                <a target='_blank' href={url} className='nav__link-btn'>
                    { text }
                </a>
            }
            { type === 'sub_menu' &&
                <div className='nav__sub-menu'>
                    <a href={url} target='_blank' className='nav__link has-menu'>
                        {text}
                    </a>
                    <ul className='submenu__items'>
                        {subMenu && subMenu.map(({ text, url },index) =>
                            <li key={index}>
                                <a href={url} target='_blank' className='nav__link a'> { text }</a>
                            </li>
                        )
                            
                        }
                    </ul>
                </div>
            }
            
        </li>
    )
}