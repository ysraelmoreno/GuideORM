import { Client as PostgresClient } from "pg";
import { IDriverConfig } from "../types/IDriver";

class DriverFactory {
  static getDriver(config: IDriverConfig) {
    switch (config.type) {
      case "postgres":
        return new PostgresClient(config);
      default:
        return new PostgresClient(config);
    }
  }
}

export default DriverFactory;
