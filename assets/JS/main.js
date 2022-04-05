
let data;
function handleFileSelect(evt) {
    let file = evt.target.files[0];
    Papa.parse(file, {
        header: true,
        dynamicTyping: true,
        complete: function(results) {
            data = results;
            console.log(data)
        }

    });
    // ...
}
$(document).ready(function(){
    $("#csv-file").change(handleFileSelect);

});








// function log(p) {
//     console.log(p.data.slice(1))
//     console.log("test")
// }

// jQuery("input#csv-file").change(function () {
//     console.log(file);
// });



// function start (){
//     var supercarObject = {"brand": "Lamborghini", "model" : "Huracan", "origin": "Italy"};
//     $.each(supercarObject, function(key, value){
//         $("#output").append("<b>" + key + "</b>" + ": " + value + '<br>');
//     });
// };




// $(document).ready(function(){
//     var supercarObject = {"brand": "Lamborghini", "model" : "Huracan", "origin": "Italy"};
//     $.each(supercarObject, function(key, value){
//         $("#output").append("<b>" + key + "</b>" + ": " + value + '<br>');
//     });
// });
// $('#sudo).click(function(){
//     window.print();
//     return false;
// });