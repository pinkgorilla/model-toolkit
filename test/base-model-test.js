"use strict";
require("should");

var TestModel = require("./test-model");
var validate = require("../src/base-model-validator");

it("#01. should success when create new Model", function() {
    var model = new TestModel();
    validate(model);

    model.should.have.property("stamp");
    model.stamp.should.be.type("function");

    model.should.have.property("copy");
    model.copy.should.be.type("function");
});

it("#02. should only have property from defined model except for _id", function() {
    var model = new TestModel({
        _id: {},
        forbidden: true
    });
    validate(model);

    model.should.not.have.property("forbidden");
    model.should.have.property("_id");
    model._id.should.be.instanceof(Object);
});

it("#03. model values should equal source values", function() {
    var source = {
        number: 10,
        string: "some string",
        date: new Date(),
        object: {},
        array: [1, 2, 3]
    };
    var model = new TestModel(source);
    validate(model);

    source.number.should.equal(model.number);
    source.string.should.equal(model.string);
    source.date.getTime().should.equal(model.date.getTime());
    source.array.length.should.equal(model.array.length);
    for (var index = 0; index < source.array.length; index++) {
        source.array[index].should.equal(model.array[index]);
    }
});

it("#04. model createdDate should not changed when stamping", function() {
    var source = {
        number: 10,
        string: "some string",
        date: "2016-01-01T00:00:00Z",
        object: {},
        array: [1, 2, 3],
        _createdBy: "JOHN",
        _createdDate: new Date(1970, 1, 1),
        _createAgent: "UNIT-TEST"
    };
    var model = new TestModel(source);
    model.stamp("ACTOR", "AGENT");
    validate(model);
    source._createdBy.should.equal(model._createdBy);
    source._createdDate.valueOf().should.equal(model._createdDate.valueOf());
    source._createAgent.should.equal(model._createAgent);

    model._updatedBy.should.equal("ACTOR");
    model._updateAgent.should.equal("AGENT");
});
