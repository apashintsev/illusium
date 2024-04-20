import { FC } from 'react';

import ankhNftMint from './../../assets/images/ankh-nft-mint.svg'

import styles from './Krest.module.scss'
import Footer from '../../components/Footer/Footer';
import { MintButton } from '../../components/MintButton/MintButton';

type IProps = {};

export const Krest: FC<IProps> = () => {

    return (
      <>
        <main>
          <div className={styles.main_container}>
            <img src={ankhNftMint} alt="ANKH NFT" />

            <h1>ANKH</h1>

            <div className={styles.text_with_border}>PUBLIC</div>

            <MintButton tokenId={0} baseUriForTokens="" price="0.0001" />
          </div>
        </main>
        <Footer />
      </>
    );
};
