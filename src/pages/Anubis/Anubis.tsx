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

            <MintButton tokenId={0} baseUriForTokens="" price="0.0001" />
          </div>
        </main>
        <Footer />
      </>
    );
};