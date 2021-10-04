export default class Singleton {
    #instance;

    constructor() {
        if (this.#instance) {
            return this.#instance;
        }

        this.#instance = this;
    }
}
