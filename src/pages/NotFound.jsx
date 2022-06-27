export default function NotFound() {
     const div = {
          backgroundColor: "#1d1d1d",
          display: "grid",
          placeItems: "center",
          height: "100vh",
          width: "100%",
          margin: "0"
     };
     const h1 = {
          fontSize: "55px",
          letterSpacing: "5px",
          textAlign: "center",
          color: "#f1f1f1",
          margin: "0"
     };
     const span = {
          fontSize: "21px",
          fontFamily: "sans-serif",
          color: "#979797"
     };

     const style = {
          div: div,
          h1: h1,
          span: span
     }
     return (
          <div className="notFound" style={style.div}>
               <h1 style={style.h1}>404 <br /><span style={style.span}>NOT FOUND</span></h1>
          </div>
     );
}