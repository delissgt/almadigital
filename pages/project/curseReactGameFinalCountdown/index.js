import "./index.css";

import Player from '../../../src/components/PlayerFinalCountDown/Player';
import TimerChallenge from "../../../src/components/TimerChallenge";


export default function IndexGameFinalCountDown() {
  return (
      <>
        <div id="content">
          <header>
            <h1>The <em>Almost</em> Final Countdown</h1>
            <p>Stop the timer once you estimate that time is (almost) up</p>
          </header>
          <Player />
          <div id="challenges">
            <TimerChallenge title="Easy" targetTime={1} />
            <TimerChallenge title="Not Easy" targetTime={5} />
            <TimerChallenge title="Getting tough" targetTime={10} />
            <TimerChallenge title="Pros only" targetTime={15} />
          </div>
        </div>

      </>
  );
}
