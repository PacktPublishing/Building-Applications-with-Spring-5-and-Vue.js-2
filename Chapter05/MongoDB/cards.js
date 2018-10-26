db.createCollection( "cards",{
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
                "card_list_id": {
                    "bsonType": "objectId"
                },
                "user_id": {
                    "bsonType": "objectId"
                },
                "title": {
                    "bsonType": "string"
                },
                "description": {
                    "bsonType": "string"
                },
                "assignees": {
                    "bsonType": "array",
                    "additionalItems": true,
                    "uniqueItems": true,
                    "items": {
                        "bsonType": "objectId"
                    }
                },
                "position": {
                    "bsonType": "int",
                    "minimum": 1
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
                "user_id",
                "title",
                "position",
                "archived",
                "created_date"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});