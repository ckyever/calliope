import { useOutletContext } from "react-router";

import type { AppContext } from "../types/outletContext";

function Home() {
  const { displayName } = useOutletContext<AppContext>();
  return <>{displayName && <div>Welcome {displayName}</div>}</>;
}

export default Home;
