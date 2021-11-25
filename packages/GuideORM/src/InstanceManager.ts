class InstanceManager {
  protected _instances: { [key: string]: any } = {};

  constructor() {
    this._instances = {};
  }

  setInstance(name: string, instance: any) {
    this._instances = {
      ...this._instances,
      [name]: instance,
    };
  }

  getInstance(name: string) {
    return this._instances[name];
  }
}

export default new InstanceManager();
