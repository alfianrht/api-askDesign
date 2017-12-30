/**
 * History.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
      
    tableName: 'history',
    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },

        book_id: {
            model: 'book'
        },

        status: {
            type: 'integer'
        }
    }
};

