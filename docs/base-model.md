##**BaseModel**
base model

###**properties**
Name 						| Type 			| Default 	    | Description
--- 						|:---:			| --- 			| ---
_stamp						|string			|				|unique stamp
_type 						|string			|				|model type
_version 					|string			|				|model version
_active 					|bool			|				|data is active 
_deleted 					|bool			|				|data is deleted
_createdDate 			    |date	  		|				|time when the data is created
_createdBy 				    |string			|				|actor who created the data
_createAgent 			    |string			|				|device used to create the date
_updatedDate 			    |date			|				|time when the data is updated
_updatedBy 				    |string			|				|actor who updated the data
_updateAgent 			    |string			|				|device used to update the data

###**methods**
###constructor(*type*, *version*)
initialize new object.

**parameters**

 - **type** - *string* 
	type.
	
 - **version** - *object* 
	model version.

		
**returns**
void
	
```javascript
	var BaseModel = require('model-toolkit').BaseModel;
	var baseModel = new BaseModel('type', {}); 
```	
###copy(*source*)
copy values from source to this object.

**parameters**

 - **source** - *object*
	object to copy value from.

		
**returns**
void
	
```javascript 
	baseModel.copy(source);
```	


###**Inheriting**
```
	var BaseModel = require('model-toolkit').BaseModel;
	class MyModel extends BaseModel
	{
		constructor(source)
		{
			super('my-model', '1.0.0'); // call BaseModel constructor
			
			// Define properties.
			this.childProperty = ''; // property need to be initialized.
			this.otherChildProperty = {}; // property need to be initialized.
			
			this.copy(source);
		}
	}
```