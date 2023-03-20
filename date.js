// //if there is only a single method 
// module.exports= getDate; 
/*

module.exports.getDate = getDate; // there is no () because getDate() will directly call the function
function getDate(){

    let today = new Date();
    let options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    let day= today.toLocaleDateString("en-US", options);  

};

*/

exports.getDate = function (){

    const today = new Date();
    const options={
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);  

};

exports.getDay = function (){

    const today = new Date();
    const options={
        weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);  

};