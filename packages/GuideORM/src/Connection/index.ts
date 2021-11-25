import Driver from "../Driver";
import { IDriverConfig } from "../types/IDriver";

class Connection {
  protected driver: any;

  constructor(config: IDriverConfig) {
    this.driver = new Driver(config);

    return this.driver;
  }

  query(query: string, params: unknown[] = []) {
    return this.driver.query(query, params);
  }
}

export default Connection;
