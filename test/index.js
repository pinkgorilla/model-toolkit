function test(name, path) {
    describe(name, function () {
        require(path);
    });
}

describe("#model-toolkit", function (done) {
    this.timeout(2 * 60000);
    test("@base-model", "./base-model-test");
});
