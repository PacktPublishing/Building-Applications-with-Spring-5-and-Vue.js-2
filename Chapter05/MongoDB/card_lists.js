db.createCollection( "card_lists",{
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
                "board_id": {
                    "bsonType": "objectId"
                },
                "user_id": {
                    "bsonType": "objectId"
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
                "name",
                "board_id",
                "user_id",
                "position",
                "archived",
                "created_date"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});