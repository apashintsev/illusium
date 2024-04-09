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

            <MintButton
              contractAddress="0xE31F98B5C9b31F634ed7310560dfE508B0B569E4"
              baseUriForTokens=""
              price="0.00024"
            />
          </div>
        </main>
        <Footer />
      </>
    );
};

export default Krest;