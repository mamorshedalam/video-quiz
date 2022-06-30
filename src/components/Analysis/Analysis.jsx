import Question from "../Question/Question";

export default function Analysis({ answers }) {
     return (
          <div className="analysis">
               <h1>Question Analysis</h1>
               <Question answers={answers} />
          </div>
     );
}