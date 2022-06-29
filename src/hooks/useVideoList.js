import { get, getDatabase, limitToFirst, orderByKey, query, ref, startAt } from "firebase/database";
import { useEffect, useReducer, useState } from "react";
import { initialState, reducer } from '../reducers/statusReducer';

export default function useVideoList(page) {
     const [state, dispatch] = useReducer(reducer, initialState);
     const [videos, setVideos] = useState([]);
     const [hasMore, setHasMore] = useState(true);

     useEffect(() => {
          async function fetchVideos() {
               const db = getDatabase();
               const videosRef = ref(db, "videos");
               const videoQuery = query(videosRef, orderByKey(), startAt("" + page), limitToFirst(8));

               try {
                    dispatch({ type: "SUCCESS", loading: false });
                    const snapshot = await get(videoQuery);
                    if (snapshot.exists()) {
                         setVideos((prevVideos) => {
                              return [...prevVideos, ...Object.values(snapshot.val())]
                         });
                    } else {
                         setHasMore(false);
                    }

               } catch (err) {
                    console.log(err);
                    dispatch({ type: "FAIL", error: "Fail to Login, Try Again!" });
               }
          };

          fetchVideos()
     }, [page])

     return { state, hasMore, videos }
}
