const Load = require('../model/load.model');
const Driver = require('../model/driver.model');
const Supplier = require('../model/supplier.model');

Load.belongsTo(Driver, {foreignKey: 'rut_driver'});
Load.belongsTo(Supplier, {foreignKey: 'id_supplier'});