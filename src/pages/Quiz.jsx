import { getDatabase, ref, set } from 'firebase/database';
import _ from 'lodash';
import { useEffect, useReducer, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Answers from "../components/Answers/Answers";
import MiniPlayer from "../components/MiniPlayer/MiniPlayer";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import { useAuth } from '../contexts/AuthContext';
import useQuestions from '../hooks/useQuestions';

const initialState = null;
const reducer = (state, action) => {
     switch (action.type) {
          case "question":
               action.value.forEach((question) => {
                    question.options.forEach((option) => {
                         option.checked = false;
                    });
               });
               return action.value;

          case "answer":
               const questions = _.cloneDeep(state);
               questions[action.questionID].options[action.optionIndex].checked = action.value;
               return questions;

          default: return state;
     }
};

export default function Quiz() {
     const { id } = useParams();
     const history = useNavigate();
     const { currentUser } = useAuth();
     const [currentQuiz, setCurrentQuiz] = useState(0);
     const { status, questions } = useQuestions(id);
     const [qna, dispatch] = useReducer(reducer, initialState);
     const location = useLocation();
     const { state } = location;
     console.log(state);

     useEffect(() => {
          dispatch({
               type: "question",
               value: questions
          })
     }, [questions]);

     function handleAnswerChange(e, index) {
          dispatch({
               type: "answer",
               questionID: currentQuiz,
               optionIndex: index,
               value: e.target.checked
          });
     }

     function nextQuestion() {
          if (currentQuiz + 1 < questions.length) {
               setCurrentQuiz(prevCurrent => prevCurrent + 1);
          }
     }

     function prevQuestion() {
          if (currentQuiz >= 1 && currentQuiz <= questions.length) {
               setCurrentQuiz(prevCurrent => prevCurrent - 1);
          }
     }

     async function submitQuestion() {
          const { uid } = currentUser;

          const db = getDatabase();
          const resultRef = ref(db, `result/${uid}`);

          await set(resultRef, {
               [id]: qna
          });

          history(`/result/${id}`, { state: qna });
     }

     const percentage = questions.length > 0 ? ((currentQuiz + 1) / questions.length) * 100 : 0;

     const center = {
          textAlign: "center",
     }

     return (
          <>
               {status.error && <p style={center}>There was an error</p>}
               {!status.loading && qna !== null && qna.length === 0 && <p style={center}>No data found</p>}
               {status.loading && <p style={center}>Loading...</p>}
               {qna !== null && qna.length > 0 && (
                    <>
                         <h1>{qna[currentQuiz].title}</h1>
                         <h4>Question can have multiple answers</h4>
                         <Answers input={true} options={qna[currentQuiz].options} handleChange={handleAnswerChange} />
                         <ProgressBar next={nextQuestion} prev={prevQuestion} submit={submitQuestion} progress={percentage} />
                         <MiniPlayer id={id} title={state} />
                    </>
               )}
          </>
     );
}