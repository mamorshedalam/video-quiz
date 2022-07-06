import { useEffect, useReducer, useState } from 'react';
import { initialState, reducer } from '../reducers/statusReducer';

export default function useFetch(url, method, headers) {
     const [status, dispatch] = useReducer(reducer, initialState);
     const [result, setResult] = useState(null);

     useEffect(() => {
          async function requestFetch() {
               try {
                    dispatch({ type: "SUCCESS", loading: false });
                    const response = await fetch(url, {
                         method: method || "GET",
                         headers: headers
                    });
                    const data = await response.json();
                    setResult(data);

               } catch (err) {
                    dispatch({ type: "FAIL", error: "Fail to load image!" });
               }
          }
          requestFetch();
          // eslint-disable-next-line react-hooks/exhaustive-deps
     }, []);
     return { status, result }
}