import Driver from "../Driver";
import InstanceManager from "../InstanceManager";
import { IDriverConfig } from "../types/IDriver";

class Connection {
  protected driver: any;

  constructor(config: IDriverConfig) {
    this.driver = new Driver(config);
    InstanceManager.setInstance(config.name, this.driver);

    return this.driver;
  }

  public async query(query: string, params: unknown[] = []) {
    const { rows } = await this.driver.query(query, params);
    return rows;
  }
}

export default Connection;
