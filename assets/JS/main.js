// Get code from "js-csv-table-from-file-api-papaparse" project and modified it to my project

const readSingleFile = () => {
    const fileInput = document.getElementById("csv-file");
    // const form = document.getElementById("controls-form");
    if (fileInput.files[0].type !== "text/csv") {
        alert("Not a CSV file");
        form.reset();
    } else {
        parseCSV(fileInput.files[0]);
    }
};

const parseCSV = file => {
    // const hasHeader = document.getElementById("checkinput").checked;
    // console.log(hasHeader);
    const config = {
        delimiter: "", // auto-detect
        newline: "", // auto-detect
        quoteChar: '"',
        // header: hasHeader,
        header: true,
        dynamicTyping: false,
        preview: 0,
        encoding: "",
        worker: false,
        comments: false,
        step: undefined,
        complete: function (response) {
        // Remove loader
        console.log('loaded');
        const headersArray = response.meta.fields;
        const rows = response.data;
        buildTable(headersArray, rows);
        },
        error: error => alert(error),
        download: false,
        skipEmptyLines: false,
        chunk: undefined,
        fastMode: undefined,
        beforeFirstChunk: () => {
        // Start loader
        console.log('loading...');
        mifuncion();
        },
        withCredentials: undefined };

    Papa.parse(file, config);
    
};

const buildTable = (headersArray, rows) => {
    console.log('rendering started');
    let tableHeader = document.getElementById("csv-table__header");
    // Clear Table Header
    tableHeader.innerHTML = "";

    let tableBody = document.getElementById("csv-table__body");
    // Clear Table Body
    tableBody.innerHTML = "";

    // Need to refactor appending to the DOM. This is quite slow and inefficient
    let headerFragment = document.createDocumentFragment();
    if (headersArray) {
        headersArray.forEach((header, index) => {
        let th = document.createElement("th");
        let txt = document.createTextNode(headersArray[index]);
        th.appendChild(txt);
        headerFragment.appendChild(th);
        });
        tableHeader.appendChild(headerFragment);
    }

    let rowsFragment = document.createDocumentFragment();
    
    console.log('Rows:', rows.length);
    rows.forEach((row, index) => {
        let div =document.createElement("div");
        var tr = document.createElement("tr");
        Object.values(row).forEach(item => {
        let td = document.createElement("td");
        let txt = document.createTextNode(item);
        td.appendChild(txt);
        tr.appendChild(td);
        tr.classList.add("result")

        rowsFragment.appendChild(tr);
        });
        tableBody.appendChild(rowsFragment);
    });
    
    console.log('rendering finished');
};

  // Some sweet event listeners!
document.
getElementById("csv-file").
addEventListener("change", readSingleFile, false);



/**
     * Pagination and search
     */
        // Pagination
       
        $(document).ready(function() {
                        // scroll down
                        $("body").animate({
                            scrollTop: $(document).height()
                        }, 9000)
                    });
       function mifuncion() {            
               $(function() {
                    
                        var flexiblePagination = $('#csv-table__body').flexiblePagination({
                            itemsPerPage: 12,
                            itemSelector: '.result:visible',
                            pagingControlsContainer: '#pagingControls',
                            itemsPerPageSelector:".itemPerPageDropDown",
                            showingInfoSelector: '#showingInfo',
            
                    
                            css: {
                                btnNumberingClass: 'btn btn-outline-primary',
                                btnActiveClass: "btn btn-primary",
                                btnFirstClass: 'btn btn-outline-primary',
                                btnLastClass: 'btn btn-outline-primary',
                                btnNextClass: 'btn btn-outline-primary',
                                btnPreviousClass: 'btn btn-outline-primary',
                            }
                        });
                    
                        flexiblePagination.getController().onPageClick = function(pageNum, e) {
                            console.log('You Clicked Page: ' + pageNum)
                            $('html, body').animate({ scrollTop: 200 }, 'smooth');
                        };
                    
                    
                    });

                };







        



// $(document).ready(function() {
//     // scroll down
//     $("body").animate({
//         scrollTop: $(document).height()
//     }, 9000)
// });

// $(function() {

//     var flexiblePagination = $('#csv-table__body').flexiblePagination({
//         itemsPerPage: 12,
//         itemSelector: 'div.result:visible',
//         pagingControlsContainer: '#pagingControls',
//         showingInfoSelector: '#showingInfo',

//         css: {
//             btnNumberingClass: 'btn btn-outline-primary',
//             btnActiveClass: "btn btn-primary",
//             btnFirstClass: 'btn btn-outline-primary',
//             btnLastClass: 'btn btn-outline-primary',
//             btnNextClass: 'btn btn-outline-primary',
//             btnPreviousClass: 'btn btn-outline-primary',
//         }
//     });

//     flexiblePagination.getController().onPageClick = function(pageNum, e) {
//         console.log('You Clicked Page: ' + pageNum)
//         $('html, body').animate({ scrollTop: 200 }, 'smooth');
//     };


// });



// document.
// getElementById("checkinput").
// addEventListener("change", readSingleFile, false);


// let data;
// function handleFileSelect(evt) {
//     let file = evt.target.files[0];
//     Papa.parse(file, {
//         header: true,
//         dynamicTyping: true,
//         complete: function(results) {
//             data = results;
//             console.log(data)
//         }

//     });
//     // ...
// }
// $(document).ready(function(){
//     $("#csv-file").change(handleFileSelect);

// });

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