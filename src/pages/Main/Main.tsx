import { FC } from 'react';

import Plate_nft from './../../assets/images/Plate_nft.svg'
import Robot_nft from './../../assets/images/Robot_nft.svg'
import Krest_nft from './../../assets/images/Krest_nft.svg'
import Tutan_nft from './../../assets/images/Tutan_nft.svg'
import Anubis_nft from './../../assets/images/Anubis_nft.svg'

import styles from './Main.module.scss'
import Footer from '../../components/Footer/Footer';

type IProps = {};

export const Main: FC<IProps> = () => {

    return (
        <>
            <main>
                <div className={styles.welcome}>

                </div>
                <div className={styles.nfts_main}>
                    <ul className={styles.two_rows}>
                        <li><a href="/plate">
                            <img src={Plate_nft} alt="Plate NFT"
                                width="350px"
                                height="350px" />
                        </a>
                        </li>
                        <li><a href="/robot">
                            <img src={Robot_nft} alt="Robot NFT"
                                width="350px"
                                height="350px" />
                        </a>
                        </li>
                        <li><a href="/krest">
                            <img src={Krest_nft} alt="Krest NFT"
                                width="350px"
                                height="350px" />
                        </a>
                        </li>
                        <li><a href="/tutan">
                            <img src={Tutan_nft} alt="Tutan NFT"
                                width="350px"
                                height="350px" />
                        </a>
                        </li>
                        <li><a href="/anubis">
                            <img src={Anubis_nft} alt="Anubis NFT"
                                width="350px"
                                height="350px" />
                        </a>
                        </li>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    );
};

export default Main;