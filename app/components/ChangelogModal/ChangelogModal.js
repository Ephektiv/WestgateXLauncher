import React, { useState, useEffect } from 'react';
import store from '../../localStore';
import styles from './ChangelogModal.scss';
import Modal from '../Common/Modal/Modal';
import ChangelogRow from './ChangelogRow';

export default props => {
  const [unMount, setUnMount] = useState(false);

  useEffect(() => {
    store.set('showChangelogs', false);
  }, []);

  const openDiscord = () => {
    require('electron').shell.openExternal('https://discord.gg/6yzJA5d');
  };

  return (
    <Modal
      history={props.history}
      unMount={unMount}
      title="WHAT'S NEW"
      style={{ height: '70vh', width: 540 }}
    >
      <div className={styles.container}>
        {/* <h2 className={styles.hrTextGreen}>SOME COOL NEW STUFF</h2>
        <div className={styles.subHrList}>
          <ul>
            <ChangelogRow
              main="We are refactoring quite a few parts of the code"
              secondary=", this will allow us to easily add features later on"
            />

          </ul>
        </div> */}
        <h2 className={styles.hrTextRed}>CHANGE LOG</h2>
        <div className={styles.subHrList}>
          <ul>
            <ChangelogRow
              main="Fixed some Social Media Icons for ya."
              secondary=" Not all of them were showing, plus we've added more for ya!" />
            <img src="https://i.imgur.com/GbWW3EF.png" width="400px" />
          </ul>
          <ul>
            <ChangelogRow
              main="We've added our own Servers underneth the Bookmarked Servers"
              secondary=" More for you and your friends convienences. Ey, the more the better right?!" />
            <img src="https://i.imgur.com/MoDiD47.png" width="200px" />
          </ul>
        </div>

        <h2 className={styles.hrTextYellow}>WE LOVE YOU</h2>
        <span className={styles.summary}>
          We love our users, that's why we have a dedicated discord server just
          to talk with all of YOU ❤
          
          <div style={{ display: 'block', margin: '35px auto' }} /> 

           <a href="https://github.com/NanobugXL/WestgateXLauncher/issues/new/choose"> Report Bug</a>
        </span>
        <br />
        <img
          src="https://discordapp.com/assets/192cb9459cbc0f9e73e2591b700f1857.svg"
          className={styles.discordImg}
          onClick={openDiscord}
        />
      </div>
    </Modal>
  );
};
