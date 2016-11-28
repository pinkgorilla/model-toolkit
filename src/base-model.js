"use strict";

module.exports = class BaseModel {
    constructor(type, version) {
        this._stamp = "";
        this._type = type;
        this._version = version;
        this._active = true;
        this._deleted = false;
        this._createdBy = "";
        this._createdDate = new Date(1900,1,1);
        this._createAgent = "";
        this._updatedBy = "";
        this._updatedDate = new Date(1900,1,1);
        this._updateAgent = "";
    }

    stamp(actor, agent) {
        var now = new Date();

        this._createdBy = !this._createdBy || this._createdBy.length < 1 ? this._createdBy : actor;
        this._createdDate = !this._createdDate ? now : this._createdDate;
        this._createAgent = !this._createAgent || this._createAgent.length < 1 ? this._createAgent : agent;

        var ticks = ((now.getTime() * 10000) + 621355968000000000);

        this._stamp = ticks.toString(16);
        this._updatedBy = actor;
        this._updatedDate = now;
        this._updateAgent = agent;
    }

    copy(source) {
        this._id = undefined;
        for (var prop in this) {
            this[prop] = source ? source[prop] || this[prop] : this[prop];
        }

        if (!this._id || this._id === "") {
            delete (this._id);
        }
    }
};
