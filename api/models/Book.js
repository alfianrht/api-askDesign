/**
 * Book.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  
    tableName: 'book',
    attributes: {
        id: {
            type: 'integer',
            primaryKey: true,
            autoIncrement: true
        },

        user_id: {
            model: 'users'
        },

        title: {
            type: 'string'
        },

        description: {
            type: 'string'
        },

        colorCount: {
            type: 'integer',
            columnName: 'color_count'
        },

        responsive: {
            type: 'integer'
        },

        duration: {
            type: 'integer'
        },

        attachment: {
            type: 'string'
        }
    }

};

