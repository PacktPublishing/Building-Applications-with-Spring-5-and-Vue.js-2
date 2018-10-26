db.createCollection( "users",{
    "storageEngine": {
        "wiredTiger": {}
    },
    "capped": false,
    "validator": {
        "$jsonSchema": {
            "bsonType": "object",
            "additionalProperties": false,
            "properties": {
                "_id": {
                    "bsonType": "objectId"
                },
                "email": {
                    "bsonType": "string"
                },
                "username": {
                    "bsonType": "string"
                },
                "first_name": {
                    "bsonType": "string"
                },
                "last_name": {
                    "bsonType": "string"
                },
                "password": {
                    "bsonType": "string"
                },
                "created_date": {
                    "bsonType": "timestamp"
                }
            },
            "required": [
                "_id",
                "email",
                "username",
                "first_name",
                "last_name",
                "password",
                "created_date"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});