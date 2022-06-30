import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from '../reducers/statusReducer';

export default function useAnswers(videoID) {
     const [status, dispatch] = useReducer(reducer, initialState);
     const [answers, setAnswers] = useState([]);

     useEffect(() => {
          async function fetchVideos() {
               const url = "answers/" + videoID + "/questions";
               const db = getDatabase();
               const answerRef = ref(db, url);
               const answerQuery = query(answerRef, orderByKey());

               try {
                    dispatch({ type: "SUCCESS", loading: false });
                    const snapshot = await get(answerQuery);
                    if (snapshot.exists()) {
                         setAnswers((prevAnswer) => {
                              if (prevAnswer.length < 4) {
                                   return [...prevAnswer, ...Object.values(snapshot.val())]
                              } return prevAnswer;
                         });
                    } else {
                    }

               } catch (err) {
                    console.log(err);
                    dispatch({ type: "FAIL", error: "Fail to Login, Try Again!" });
               }
          };

          fetchVideos()
     }, [videoID])

     return { status, answers }
}
