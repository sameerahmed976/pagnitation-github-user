import Card from "./Card";
import useFetch from "./Hooks/useFetch";

function App() {
  const { loading, data } = useFetch();

  if (loading) {
    return (
      <>
        <h1 className="loading">Loading...</h1>
      </>
    );
  }

  return (
    <>
      <header class="header">
        <section class="section-title">
          <h1 class="title">Github Users</h1>
          <article class="underline"></article>
          <section class="indicator">
            <article class="indicator-color"></article>
          </section>
        </section>
      </header>
      <main class="main">
        <section class="cards-container">
          {data.map((item) => {
            return <Card {...item} key={item.id} />;
          })}

          {/* <article class="card">
            <img src="1" alt="user" />
            <h2 class="card-title">Name</h2>
            <a href="url" class="card-url">
              view profile
            </a>
          </article> */}
        </section>
        <section class="back-to-top"></section>
        <section class="button-container"></section>
      </main>
    </>
  );
}

export default App;
