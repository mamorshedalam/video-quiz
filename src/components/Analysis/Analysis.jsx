import Question from "../Question/Question";

export default function Analysis() {
     return (
          <div className="analysis">
               <h1>Question Analysis</h1>
               <h4>You answerd 5 out of 10 questions correctly</h4>
               <Question />
               <Question />
          </div>
     );
}