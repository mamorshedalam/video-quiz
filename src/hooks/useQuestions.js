import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from '../reducers/statusReducer';

export default function useVideoList(videoID) {
     const [state, dispatch] = useReducer(reducer, initialState);
     const [questions, setQuestions] = useState([]);

     useEffect(() => {
          async function fetchVideos() {
               const url = "quiz/" + videoID + "/questions";
               const db = getDatabase();
               const quizRef = ref(db, url);
               const quizQuery = query(quizRef, orderByKey());

               try {
                    dispatch({ type: "SUCCESS", loading: false });
                    const snapshot = await get(quizQuery);
                    if (snapshot.exists()) {
                         setQuestions((prevQuestion) => {
                              if (prevQuestion.length < 4) {
                                   return [...prevQuestion, ...Object.values(snapshot.val())]
                              } return prevQuestion;
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

     return { state, questions }
}
