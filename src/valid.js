import { cleanEnv, str } from "envalid";

export default cleanEnv(
  {
    VITE_test: "a",
  },
  {
    VITE_test: str(),
  }
);
