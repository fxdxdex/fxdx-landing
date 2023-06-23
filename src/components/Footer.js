import React from "react";
import "./Footer.css";

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer">
                <div>
                    <img src="./footer-logo.png" alt="" />
                </div>
                <div className="footer-nav">
                    <h3>Menu</h3>
                    <ul>
                        <li>
                            <a href="https://fxdxdex.medium.com/" target="_blank">Blog</a>
                        </li>
                        <li>
                            <a href="https://fxdxdocs.gitbook.io/fxdx-knowledge-base/" target="_blank">Docs</a>
                        </li>
                         <li>
                            <a href="mailto:team@fxdx.exchange" target="_blank">Email Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Docs</h3>
                    <ul>
                        <li>
                            <a href="https://fxdx.gitbook.io/a/legal/terms-of-use" target="_blank">
                                Terms of Use
                            </a>
                        </li>
                        <li>
                            <a href="https://fxdx.gitbook.io/a/legal/privacy-policy" target="_blank">
                                Privacy Policy
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Products</h3>
                    <ul><li>
                            <a href="https://app.fxdx.exchange" target="_blank">Mainnet (Optimism)</a>
                        </li>
                         <li>
                            <a href="https://test.fxdx.exchange" target="_blank">Testnet (Optimism)</a>
                        </li>
                        <li>
                            <a href="https://mainnet.fxdx.exchange" target="_blank">Algorand (Closed)</a>
                        </li>
                    </ul>
                </div>
                <div className="footer-nav">
                    <h3>Resources</h3>
                    <ul>
                        <li>
                            <a href="https://github.com/fxdxdex" target="_blank">Github</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-info">
                <p>All rights reserved by FXDX Exchange</p>
            </div>
        </div>
    );
};

export default Footer;
