
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cars', tbl => {
      tbl.increments();
      tbl.text('VIN').unique().notNullable();
      tbl.text('make').notNullable();
      tbl.text('model').notNullable();
      tbl.float('mileage').notNullable();
      tbl.text('transmission_type');
      tbl.text('title_status');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
