import { FC } from 'react';

import RobotNftMint from './../../assets/images/robot-nft-mint.svg'

import styles from './Robot.module.scss'
import Footer from '../../components/Footer/Footer';
import { MintButton } from '../../components/MintButton/MintButton';

type IProps = {};

export const Robot: FC<IProps> = () => {

    return (
      <>
        <main>
          <div className={styles.main_container}>
            <img src={RobotNftMint} alt="Robot NFT" />

            <h1>Robot</h1>

            <div className={styles.text_with_border}>PUBLIC</div>

            <MintButton tokenId={0} baseUriForTokens="" price="0.0001" />
          </div>
        </main>
        <Footer />
      </>
    );
};
