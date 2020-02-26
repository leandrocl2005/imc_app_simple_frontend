$("document").ready(function(){
    $("#btn_submit").click(function(){
        var peso = $("#inp_peso").val()
        var altura = $("#inp_altura").val()
        peso = parseFloat(peso)
        altura = parseFloat(altura)
        console.log(peso)
        console.log(altura)
        $.ajax({
            url: "https://centaurus.pythonanywhere.com/api",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify({"peso": peso, "altura": altura})
        }).done(function(data) {
            $("h1").html("IMC: " + data["imc"])
        })
    })
})