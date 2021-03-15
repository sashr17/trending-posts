import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1 className="Header">Trending Posts App</h1>

      <h3>Steps:</h3>

      <section>
        Create a react app with two pages, <br />
        <br />
        <div>
          {" "}
          (1) <strong>/posts:</strong> Display top 10 posts using a fake api.
          Each post must have a feature to like.{" "}
        </div>
        <br />
        <div>
          {" "}
          (2) <strong>/likes:</strong> Display the liked posts in tabular
          format. There should be an option to remove the liked post in each
          row.
        </div>
        <br />
        <div>
          <h4>Note: </h4>
          <ul>
            <li>Fork this repo and add your changes.</li>
            <li>Add necessary packages.</li>
            <li>Add basic styling.</li>
          </ul>
        </div>
      </section>
    </div>
  );
}
