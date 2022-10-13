import { NextApiHandler } from "next";
import { getAnswer } from "wasm-package";

const handler: NextApiHandler = (request, response) => {
  response.status(200).json({ wasmPackageAnswer: getAnswer() });
};

export default handler;
