require("should");

module.exports = function (data) {
    data.should.not.equal(null);
    data.should.instanceOf(Object);

    data.should.have.property("_type");
    data._type.should.instanceOf(String);

    data.should.have.property("_version");    
    data._version.should.instanceOf(String); 

    data.should.have.property("_createdDate"); 
    data._createdDate.should.instanceOf(Date); 

    data.should.have.property("_createdBy");    
    data._createdBy.should.instanceOf(String); 

    data.should.have.property("_createAgent"); 
    data._createAgent.should.instanceOf(String);
    
    data.should.have.property("_updatedDate");  
    data._updatedDate.should.instanceOf(Date);   

    data.should.have.property("_updatedBy");   
    data._updatedBy.should.instanceOf(String);  

    data.should.have.property("_updateAgent");     
    data._updateAgent.should.instanceOf(String);
};