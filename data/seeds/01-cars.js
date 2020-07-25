
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {VIN: "1FTZF172XXNB13499", make: "Honda", model: "CRV", mileage: "160000", transmission_type: "Standard", title_status: "clean"},
        {VIN: "2GCEC19R7W1101649", make: "KIA", model: "Sorento", mileage: "140000", transmission_type: "Standard", title_status: "clean"},
        {VIN: "2GCEC19R3V1135473", make: "Crysler", model: "Town and Country", mileage: "170000"}
      ]);
    });
};
