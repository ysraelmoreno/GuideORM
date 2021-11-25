import Driver from "./Driver";
import { IDriverConfig } from "./types/IDriver";
import InstanceManager from "./InstanceManager";

function makeConnection({
  host,
  port,
  user,
  password,
  database,
  type,
  name,
}: IDriverConfig) {
  const driver = new Driver({
    host,
    port,
    user,
    password,
    database,
    type,
    name,
  });

  return driver;
}

export default makeConnection;
