'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Features', [
      { feature: 'Gas Burner', imgPath: "http://res.cloudinary.com/aircncaa/image/upload/v1587867416/vw2tdyob6betf2jud5nj.jpg", createdAt: new Date(), updatedAt: new Date() },
      { feature: 'Convection Oven', imgPath: "http://res.cloudinary.com/aircncaa/image/upload/v1587867489/spxzyhhxmbfea2a8kt3i.jpg", createdAt: new Date(), updatedAt: new Date() },
      { feature: 'Open Plan', imgPath: "http://res.cloudinary.com/aircncaa/image/upload/v1587867558/mgmk4tibbixxmgqo8dxb.jpg", createdAt: new Date(), updatedAt: new Date() },
      { feature: 'Basic Ingredients Available', imgPath: "http://res.cloudinary.com/aircncaa/image/upload/v1587867302/qm3onmivhzrt57qvygbz.jpg", createdAt: new Date(), updatedAt: new Date() },
      { feature: 'Basic Kitchen Gadgets', imgPath: "http://res.cloudinary.com/aircncaa/image/upload/v1587867598/znvdiuzacagstriawbrt.jpg", createdAt: new Date(), updatedAt: new Date() },
      { feature: 'Prepaid Cleanup', imgPath: "http://res.cloudinary.com/aircncaa/image/upload/v1587867615/bqkbtsuu8770kjbc6oxa.jpg", createdAt: new Date(), updatedAt: new Date() },
      { feature: 'Range Hood', imgPath: "http://res.cloudinary.com/aircncaa/image/upload/v1587867703/qwcuplocaadfeq3jclyf.jpg", createdAt: new Date(), updatedAt: new Date() },
      { feature: 'Microwave', imgPath: "http://res.cloudinary.com/aircncaa/image/upload/v1587867742/ljywbjhzjbniqnquwokb.jpg", createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Features', null, {})
  }
};
