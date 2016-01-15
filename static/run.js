$('document').ready( function() {

    console.log('something works');


});

function renderResult(d,tStatus, jqxhr){
    $("#result")[0].innerHTML = d;
}

function search_mol() {
	$("#result")[0].innerHTML = "Waiting for result...";
    var baseUrl = "/python/search_mol.py";
    $.ajax(baseUrl, {'success':renderResult} );
}

function run_job(id) {
	$("#result")[0].innerHTML = "Waiting for result...";
    var baseUrl = "/python/rmg/input.py/"+id;
    $.ajax(baseUrl, {'success':renderResult} );
}

$("#input_form").submit(function(e){
    // create job
    $.ajax({
        type: "POST",
        url: "/run_rmg_job",
        data: $("#input_form").serialize(),
        success: function(data){
            alert("Your job is to run shortly with id " + data);
            // run job
            id = data;
            run_job(id);
        }
    })

    e.preventDefault();
})