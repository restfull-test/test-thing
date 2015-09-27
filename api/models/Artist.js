/**
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

attributes: {
    "name": {
        "key": "name",
        "type": "string",
        "autoIncrement": false,
        "unique": false,
        "primaryKey": false,
        "required": true,
        "collection": false
    },
    "songs": {
        "key": "songs",
        "autoIncrement": false,
        "unique": false,
        "primaryKey": false,
        "required": false,
        "collection": "song",
        "via": "artist"
    }
}

};

