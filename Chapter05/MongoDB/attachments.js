db.createCollection( "attachments",{
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
                "card_id": {
                    "bsonType": "objectId"
                },
                "user_id": {
                    "bsonType": "objectId"
                },
                "file_name": {
                    "bsonType": "string"
                },
                "file_path": {
                    "bsonType": "string"
                },
                "file_type": {
                    "bsonType": "string"
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
                "card_id",
                "user_id",
                "file_name",
                "file_path",
                "file_type",
                "archived",
                "created_date"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});