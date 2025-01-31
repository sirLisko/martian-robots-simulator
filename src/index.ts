import { runCLI } from "./cli";

runCLI().catch((error) => {
  console.error("An error occurred:", error);
});
