import React from 'react';
import { socialLinks } from '../data';
import PageLinks from './PageLinks';

const Footer = () => {
    return (
        <footer className="section footer">
            <PageLinks parentClass='footer-links' itemClass='footer-link' />
            {/* <ul className="footer-links"> 
                {pageLinks.map((pageLink) => {
                    const { id, href, text } = pageLink;
                    return (
                        <li key={id} >
                            <a href={href} className="footer-link">{text}</a>
                        </li>
                    );
                })}
            </ul> */}
            <ul className="footer-icons">
                {socialLinks.map((socialLink) => {
                    const { id, href, icon } = socialLink;
                    return (
                        <li key={id} >
                            <a href={href}
                                target="_blank"
                                className="footer-icon"
                                rel='noreferrer'
                            >
                                <i className={icon}></i>
                            </a>
                        </li>
                    );
                })}
            </ul>
            <p className="copyright">
                copyright &copy; Backroads Vlad Steb travel tours company
                <span id="date">{new Date().getFullYear()}</span> all rights reserved
            </p>
        </footer>
    );
};

export default Footer
