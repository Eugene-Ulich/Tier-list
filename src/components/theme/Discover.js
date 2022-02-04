import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Discover() {
  const [list, setList] = useState();
  useEffect((_) => {
    fetch(
      "https://tier-list-70ad0-default-rtdb.europe-west1.firebasedatabase.app/tier-lists.json?shallow=true"
    )
      .then((response) => response.json())
      .then((result) => setList(result));
  }, []);

  if (list) {
    return (
      <main>
        <h1>Top Tier Lists</h1>
        <div>The list of community rankings</div>
        <ul>
          {Object.keys(list)
            .filter((key) => list[key] === true)
            .map((name) => (
              <li key={name}>
                <Link to={name}>{name}</Link>
              </li>
            ))}
        </ul>
      </main>
    );
  } else {
    return <div>Loading...</div>;
  }
}
