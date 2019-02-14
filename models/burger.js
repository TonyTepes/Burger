var orm = require('../config/orm.js');
var burger = {

    selectAll: function(cb) {
        orm.selectAll('burgers', function(res) {
            cb(res);
        })
    },

    update: function(id,cb) {
        orm.update('burgers', id,cb);
    },

    create: function(name, cb) {
        orm.create('burgers', name, cb);
    }
}
module.export = burger;