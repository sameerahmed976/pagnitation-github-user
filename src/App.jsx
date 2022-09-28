import { useEffect, useState } from "react";
import Card from "./Card";
import useFetch from "./Hooks/useFetch";

function App() {
  const { loading, data } = useFetch();
  const [page, setPage] = useState(0);
  const [newFollowers, setNewFollowers] = useState([]);
  // if (loading) {
  //   return (
  //     <>
  //       <h1 className="loading">Loading...</h1>
  //     </>
  //   );
  // }

  useEffect(() => {
    if (loading) return;
    setNewFollowers(data[page]);
  }, [loading, page]);

  const prevButton = () => {
    setPage((old) => {
      let newPage = old - 1;
      if (newPage < 0) {
        newPage = data.length - 1;
      }
      return newPage;
    });
  };
  const nextButton = () => {
    setPage((old) => {
      let newPage = old + 1;
      if (newPage > data.length - 1) {
        newPage = 0;
      }
      return newPage;
    });
  };

  return (
    <>
      <header className="header">
        <section className="section-title">
          <h1 className="title">Github Users</h1>
          <article className="underline"></article>
          <section className="indicator">
            <article className="indicator-color"></article>
          </section>
        </section>
      </header>
      <main className="main">
        {loading ? <h1 className="loading">Loading...</h1> : null}
        <section className="cards-container">
          {newFollowers.map((item) => {
            return <Card {...item} key={item.id} />;
          })}
        </section>
        {!loading && (
          <section className="btn-group">
            <button className="btn btn-prev" onClick={prevButton}>
              prev
            </button>
            {data.map((item, index) => {
              return (
                <button
                  className={`btn  ${index === page ? "btn-active" : null}  `}
                  onClick={() => setPage(index)}
                  key={index}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="btn btn-next" onClick={nextButton}>
              next
            </button>
          </section>
        )}
      </main>
    </>
  );
}

export default App;
