import { useOutletContext } from "react-router";

function Home() {
  const { displayName } = useOutletContext<{ displayName: string }>();
  return <>{displayName && <div>Welcome {displayName}</div>}</>;
}

export default Home;
