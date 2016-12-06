"use strict";
var ObjectId = require("mongodb").ObjectId;
const dateFormat = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/;
module.exports = class BaseModel {
    constructor(type, version) {
        this._stamp = "";
        this._type = type;
        this._version = version;
        this._active = true;
        this._deleted = false;
        this._createdBy = "";
        this._createdDate = new Date(1900, 1, 1);
        this._createAgent = "";
        this._updatedBy = "";
        this._updatedDate = new Date(1900, 1, 1);
        this._updateAgent = "";
    }

    stamp(actor, agent) {
        var now = new Date();

        this._createdBy = this._createdBy || actor;
        this._createdDate = !this._createdDate ? now : this._createdDate;
        this._createAgent = this._createAgent || agent;

        var ticks = ((now.getTime() * 10000) + 621355968000000000);

        this._stamp = ticks.toString(16);
        this._updatedBy = actor;
        this._updatedDate = now;
        this._updateAgent = agent;
    }

    copy(source) {
        this._id = null;
        var _source = source || {};
        var properties = Object.getOwnPropertyNames(this);
        for (var prop of properties) {
            this[prop] = this.reviver(prop, _source[prop] || this[prop]);
        }
        this.cleanUp();
    }

    cleanUp() {
        if (!this._id || this._id === "") {
            delete(this._id);
        }
    }

    reviver(key, value) {
        if (typeof value === "string" && dateFormat.test(value)) {
            return new Date(value);
        }
        else if (typeof value === "string" && ObjectId.isValid(value)) {
            return new ObjectId(value);
        }

        return value;
    }
};
