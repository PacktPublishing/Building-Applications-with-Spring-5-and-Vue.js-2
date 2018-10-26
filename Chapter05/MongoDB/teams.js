db.createCollection( "teams",{
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
                "name": {
                    "bsonType": "string"
                },
                "user_id": {
                    "bsonType": "objectId"
                },
                "archived": {
                    "bsonType": "bool"
                },
                "created_date": {
                    "bsonType": "timestamp"
                }
            },
            "required": [
                "_id",
                "name",
                "user_id",
                "archived",
                "created_date"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});