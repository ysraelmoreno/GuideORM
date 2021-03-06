import { Client as PostgresClient } from "pg";
import { IDriverConfig } from "../types/IDriver";

import DriverFactory from "./Factory";
class Driver {
  protected name: string;
  protected host: string;
  protected port: number;
  protected user: string;
  protected password: string;
  protected database: string;
  protected type: string;
  protected databaseDriver: PostgresClient;
  protected databaseInstance: any;

  constructor({
    host,
    port,
    user,
    password,
    database,
    type,
    name,
  }: IDriverConfig) {
    this.name = name;
    this.host = host;
    this.port = port;
    this.user = user;
    this.type = type;
    this.password = password;
    this.database = database;

    this.databaseInstance = this.createDriverInstance();

    return this.databaseInstance;
  }

  protected createDriverInstance(): PostgresClient {
    this.databaseDriver = DriverFactory.getDriver({
      host: this.host,
      port: this.port,
      user: this.user,
      type: this.type,
      password: this.password,
      database: this.database,
      name: this.name,
    });

    this.databaseDriver.connect();

    return this.databaseDriver;
  }
}

export default Driver;
