db.createCollection( "activities",{
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
                "user_id": {
                    "bsonType": "objectId"
                },
                "board_id": {
                    "bsonType": "objectId"
                },
                "card_id": {
                    "bsonType": "objectId"
                },
                "type": {
                    "bsonType": "string",
                    "enum": [
                        "activity",
                        "comment"
                    ]
                },
                "detail": {
                    "bsonType": "object",
                    "additionalProperties": false
                },
                "created_date": {
                    "bsonType": "timestamp"
                }
            },
            "required": [
                "_id",
                "user_id",
                "board_id",
                "type",
                "detail",
                "created_date"
            ]
        }
    },
    "validationLevel": "strict",
    "validationAction": "error"
});