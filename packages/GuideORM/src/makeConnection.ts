import Driver from "./Driver";
import { IDriverConfig } from "./types/IDriver";

function makeConnection({
  host,
  port,
  user,
  password,
  database,
  type,
  name,
}: IDriverConfig) {
  return new Driver({
    host,
    port,
    user,
    password,
    database,
    type,
    name,
  });
}

export default makeConnection;
