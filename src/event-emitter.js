'use strict';

const Emitter = require('events').EventEmitter;

class EventEmitter extends Emitter {
    #instance;

    constructor() {
        super();
        if (this.#instance) {
            return this.#instance;
        }

        this.#instance = this;
    }
}

export default new EventEmitter();
