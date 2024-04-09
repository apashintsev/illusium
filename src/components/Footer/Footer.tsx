import { FC } from 'react';

import discord from './../../assets/images/discord.svg'
import twitter from './../../assets/images/twitter.svg'

import styles from './Footer.module.scss'

type IProps = {};

export const Footer: FC<IProps> = () => {

    return (

        <footer>
            <hr   color="orange" />

            <div className={styles.socialki}>
                <a href="https://www.discord.com/YourPageName">
                    <img src={discord} alt="discord"
                        width="50" />
                </a>
                <a href="https://twitter.com/YourTwitterHandle">
                    <img src={twitter} alt="twitter"
                        width="50" />
                </a>
            </div>

        </footer>
    );
};

export default Footer;