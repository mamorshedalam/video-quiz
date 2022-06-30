import { useMemo } from 'react';
import successImg from '../../assets/images/success.png';
import classes from '../../assets/styles/Summary.module.css';
import useFetch from '../../hooks/useFetch';

export default function Summary({ score, noq }) {
     const getKeyword = useMemo(() => {
          if ((score / (noq * 5)) * 100 < 50) {
               return "failed";
          } else if ((score / (noq * 5)) * 100 < 75) {
               return "good";
          } else if ((score / (noq * 5)) * 100 < 75) {
               return "very good";
          } else {
               return "excellent";
          }
     }, [score, noq]);

     const url = `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`;
     const header = {
          Authorization: process.env.REACT_APP_PEXELS_API_KEY,
     }
     const { status, result } = useFetch(url, "GET", header);

     const image = result ? result?.photos[0].src.medium : successImg;
     // const image = Object.values(result).includes("photos") ? result?.photos[0].src.medium : successImg;
     return (
          <div className={classes.summary}>
               <div className={classes.point}>
                    <p className={classes.score}>
                         Your score is <br />
                         {score} out of {noq * 5}
                    </p>
               </div>

               {status.loading && <div className={classes.badge}>Loading your badge...</div>}

               {status.error && <div className={classes.badge}>An error occured!</div>}

               {!status.loading && !status.error && (
                    <div className={classes.badge}>
                         <img src={image} alt="Success" />
                    </div>
               )}
          </div>
     );
}