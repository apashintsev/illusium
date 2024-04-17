import { FC } from 'react';

import anibusNftMint from './../../assets/images/anubis-nft-mint.svg'

import styles from './Anubis.module.scss'
import Footer from '../../components/Footer/Footer';
import { MintButton } from '../../components/MintButton/MintButton';

type IProps = {};

export const Anubis: FC<IProps> = () => {

    return (
      <>
        <main>
          <div className={styles.main_container}>
            <img src={anibusNftMint} alt="Anubis NFT" />

            <h1>Anubis</h1>

            {/* <div className={styles.text_with_border}>PUBLIC</div> 

                    <button id="claimButton">Mint for 0.00024ETH</button>*/}
            <MintButton
              contractAddress="0xBdc828564Dd44b6a9F2e6Ddc2F4B33Fd2B230800"
              baseUriForTokens=""
              price="0.00024"
            />
          </div>
        </main>
        <Footer />
      </>
    );
};