import { NextPage } from "next";
import * as React from "react";
import { getAnswer } from "wasm-package";

const Page: NextPage = () => {
  const [client, setClient] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setClient(true);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <p>
        According to <code>wasm-package</code>, the answer is {getAnswer()}
        {client ? " (even on the client)" : ""}
      </p>
      <p>
        <a href="/api/wasm-package-answer">
          check <code>/api/wasm-package-answer</code>
        </a>
      </p>
    </div>
  );
};

export default Page;
