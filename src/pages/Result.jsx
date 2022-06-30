import _ from 'lodash';
import { useLocation, useParams } from "react-router-dom";
import Analysis from "../components/Analysis/Analysis";
import Summary from "../components/Summary/Summary";
import useAnswers from "../hooks/useAnswers";

export default function Result() {
     const { id } = useParams();
     const location = useLocation();
     const { state } = location;
     const { status, answers } = useAnswers(id);

     function calculate() {
          let score = 0;

          answers.forEach((quiz, index1) => {
               let correctIndexes = [], checkedIndexes = [];

               quiz.options.forEach((option, index2) => {
                    if (option.correct) correctIndexes.push(index2);
                    if (state[index1].options[index2].checked) {
                         checkedIndexes.push(index2);
                         option.checked = true;
                    };
               });

               if (_.isEqual(correctIndexes, checkedIndexes)) {
                    score = score + 5;
               }
          });

          return score;
     }

     const userScore = calculate();

     const center = {
          textAlign: "center",
     }

     return (
          <>
               {status.error && <p style={center}>There was an error</p>}
               {!status.loading && answers !== null && answers.length === 0 && <p style={center}>No data found</p>}
               {status.loading && <p style={center}>Loading...</p>}
               {answers !== null && answers.length > 0 && (
                    <>
                         <Summary score={userScore} noq={answers.length} />
                         <Analysis answers={answers} />
                    </>)}
          </>
     );
}