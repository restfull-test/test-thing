/**
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

attributes: {
    "artist": {
        "model": "artist"
    },
    "title": {
        "key": "title",
        "type": "string",
        "autoIncrement": false,
        "unique": false,
        "primaryKey": false,
        "required": false,
        "collection": false
    }
}

};

