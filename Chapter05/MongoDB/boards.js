db.createCollection( "boards",{
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
                "type": {
                    "bsonType": "string",
                    "enum": [
                        "personal",
                        "team"
                    ]
                },
                "user_id": {
                    "bsonType": "objectId"
                },
                "team_id": {
                    "bsonType": "objectId"
                },
                "archived": {
                    "bsonType": "bool"
                },
                "created_date": {
                    "bsonType": "timestamp"
                },
                "members": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                }
            },
            "required": [
                "_id",
                "name",
                "type",
                "user_id",
                "archived",
                "created_date"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});