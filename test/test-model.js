"use strict";

var BaseModel = require("../src/base-model");
module.exports =  class TestModel extends BaseModel {
    constructor(source) {
        super("test-type", "1.0.0");
        this.number = 0;
        this.string = "";
        this.date = new Date();
        this.object = {};
        this.array = [];
        this.copy(source);
    }
};