$(function() {
    var currpage, pagelimit, totalrows;
    if(!currpage){
        currpage = 1;
    }
    console.log(currpage)



    $("#magic").click(function() {
        magic();
    });

    $("#getData").click(function() {
        getData();
    });

    $("#nextPage").click(function() {
        currpage += 1;
        getData();
    });
    
    $("#previousPage").click(function() {
        currpage -= 1;
        getData();
    });


    let queryurl = "http://localhost:3000/basic/data?companyId=50505&audienceCount=0&currPage=1&pageLimit=4"

    function magic() {
        $.get(queryurl, (data) => {
            $('#http_response').text(JSON.stringify(data, null, 4))

        });
    }

    function getData() {

    var audienceCountv = 0;
    var companyIdv = 0;

    if($("#audienceCount").val()) {
        audienceCountv = $("#audienceCount").val();
    }
    
    if($("#companyId").val()) {
        companyIdv = $("#companyId").val();
    }

    pagelimit = parseInt($(".pageLimit option:selected").text());

    console.log( pagelimit )

    var data = { companyId: companyIdv, audienceCount: audienceCountv, currPage: currpage, pageLimit: pagelimit }

    var URL = "http://localhost:3000/basic/data";
    $(() => {
        var settings = {
            "url": URL,
            "method": "GET",
            "data": data,
            "headers": {
                "Content-Type": "applications/x-www-form-urlencoded"
            }
        };
        $.ajax(settings)
            .done(function (response) { 
                console.log("Successfully selected options");
                console.log(response);

                if(response.length > 0) {

                    var optionHtml = '';
                    // adding option to data viewing table 
                    for (i = 0; i < response.length; i++){
                    optionHtml += `<tr class="options">
                    
                        <td class="col_optionId">${response[i].optionId}</td>
                        <td class="col_companyId">${response[i].companyId}</td>
                        <td class="col_audienceCount">${response[i].audienceCount}</td>
                        <td class="col_cost">${response[i].cost}</td>
                        </tr>`;
                }
                    console.log(optionHtml);
                $("#dataView tbody").html(optionHtml);
                // $("#dataView tbody").append(optionHtml);
        }
        })
    });
    }
});