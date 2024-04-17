import { FC } from 'react';

import tutanNftMint from './../../assets/images/tutan-nft-mint.svg'

import styles from './Tutan.module.scss'
import Footer from '../../components/Footer/Footer';
import { MintButton } from '../../components/MintButton/MintButton';

type IProps = {};

export const Tutan: FC<IProps> = () => {

    return (
      <>
        <main>
          <div className={styles.main_container}>
            <img src={tutanNftMint} alt="Tutan NFT" />

            <h1>Tutan</h1>

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
