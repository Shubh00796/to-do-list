//jshint esversion6

module.exports.getdate = getdate;

function getdate() {
const today = new Date();


  const options = {
    weekday: "long",
    day: "numeric" ,
    month: "long",
    year: "numeric"

      };

      return  today.toLocaleDateString("en-IN",options);

};
// module.exports.getday = function()
//  {
//   let today = new date();
//
//
//   let options = {
//     weekday: "long",
//     year: "numeric"
//
//       };
//
//       return = today.toLocaleDateString("en-IN",options);
//
//      }
//      console.log(module.exports)
