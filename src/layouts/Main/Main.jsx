import Header from '../Header/Header';

export default function Main({ children }) {
     return (
          <>
               <Header />
               <main className="main">
                    <div className="container">{children}</div>
               </main>
          </>
     );
}