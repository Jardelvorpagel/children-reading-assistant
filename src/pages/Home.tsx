import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to Reading Assistant!</h1>
      <Link to="/reading">
        <button>Start Reading</button>
      </Link>
    </div>
  );
}

export default Home;
