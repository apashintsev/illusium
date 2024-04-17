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
