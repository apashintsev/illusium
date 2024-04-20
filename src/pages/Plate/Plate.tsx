import { FC } from 'react';

import plateNftMint from './../../assets/images/plate-nft-mint.svg'

import styles from './Plate.module.scss'
import Footer from '../../components/Footer/Footer';
import { MintButton } from '../../components/MintButton/MintButton';

type IProps = {};

export const Plate: FC<IProps> = () => {

    return (
      <>
        <main>
          <div className={styles.main_container}>
            <img src={plateNftMint} alt="Plate NFT" width="350px" />

            <h1>Plate</h1>

            <div className={styles.text_with_border}>PUBLIC</div>

            <MintButton tokenId={0} baseUriForTokens="" price="0.0001" />
          </div>
        </main>
        <Footer />
      </>
    );
};
