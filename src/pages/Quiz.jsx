import Answers from "../components/Answers/Answers";
import MiniPlayer from "../components/MiniPlayer/MiniPlayer";
import ProgressBar from "../components/ProgressBar/ProgressBar";

export default function Quiz() {
     return (
          <>
               <h1>Pick three of your favorite Star Wars Flims</h1>
               <h4>Question can have multiple answers</h4>
               <Answers />
               <ProgressBar />
               <MiniPlayer />
          </>
     );
}