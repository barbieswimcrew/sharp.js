'use strict';

const Emitter = require('events').EventEmitter;

export default new class EventEmitter extends Emitter {
    #instance;

    constructor() {
        super();
        if (this.#instance) {
            return this.#instance;
        }

        this.#instance = this;
    }
}