import { useState } from "react";

import ENVIRONMENT_VARIABLES from "../environmentVariables";

function SignIn() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <button onClick={() => setOpenModal(true)}>SIGN IN</button>
      {openModal && (
        <dialog open>
          <a href={ENVIRONMENT_VARIABLES.AUTH_URL}>Continue with Spotify</a>
        </dialog>
      )}
    </>
  );
}

export default SignIn;
