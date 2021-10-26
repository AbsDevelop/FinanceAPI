// This is a JavaScript file
var vlInicial;
var vlResultado;

$(document).on("click","#converter",function(){
      $.ajax({
        type:"get",
        dataType:"json",
        url:"https://api.hgbrasil.com/finance/quotations?key=e8c3e0cd",
    success:function(data){
    var moeda = $('#Moeda').val();
    var conteudo;
  
    if(moeda == usd){
      document.getElementById("vlInicial").value = vlInicial;
      mUsd = data.results.currencies.USD.buy;
      vlResultado = vlInicial / mUsd;
      $("#vlCopiado").html("R$"+vlInicial);  
      $("#vlResultado").html("US$"+vlResultado);  
    }else if(moeda == eur){
      vlInicial = document.getElementById("vlInicial").value;
      mEur = data.results.currencies.EUR.buy;
      vlResultado = vlInicial / mEur;
      $("#vlCopiado").html("R$"+vlInicial);  
      $("#vlResultado").html(vlResultado+" €");
    }else if(moeda == gpb){
      vlInicial = document.getElementById("vlInicial").value;
      mGpb = data.results.currencies.GPB.buy;
      vlResultado = vlInicial / mGpb;
      $("#vlCopiado").html("R$"+vlInicial);
      $("#vlResultado").html("£"+vlResultado);
    }else if(moeda == ars){
      vlInicial = document.getElementById("vlInicial").value;
      mArs = data.results.currencies.ARS.buy;
      vlResultado = vlInicial / mArs;
      $("#vlCopiado").html("R$"+vlInicial);
      $("#vlResultado").html("AR$"+vlResultado);  
    }else if(moeda == cad){
      vlInicial = document.getElementById("vlInicial").value;
      mCad = data.results.currencies.CAD.buy;
      vlResultado = vlInicial / mCad;
      $("#vlCopiado").html("R$"+vlInicial);
      $("#vlResultado").html("C$"+vlResultado);
    }else if(moeda == aud){
      vlInicial = document.getElementById("vlInicial").value;
      mAud = data.results.currencies.AUD.buy;
      vlResultado = vlInicial / mAud;
      $("#vlCopiado").html("R$"+vlInicial);
      $("#vlResultado").html("AU$"+vlResultado);
    }else if(moeda == jpy){
      vlInicial = document.getElementById("vlInicial").value;
      mJpy = data.results.currencies.JPY.buy;
      vlResultado = vlInicial / mJpy;
      $("#vlCopiado").html("R$"+vlInicial);
      $("#vlResultado").html("¥"+vlResultado);  
    }else if(moeda == cny){
      vlInicial = document.getElementById("vlInicial").value;
      mCny = data.results.currencies.CNY.buy;
      vlResultado = vlInicial / mCny;
      $("#vlCopiado").html("R$"+vlInicial);
      $("#vlResultado").html("CN¥"+vlResultado);
    }else if(moeda == btc){
      vlInicial = document.getElementById("vlInicial").value;
      mBtc = data.results.currencies.BTC.buy;
      vlResultado = vlInicial / mBtc;
      $("#vlCopiado").html("R$"+vlInicial);
      $("#vlResultado").html("₿"+vlResultado);
    }
    },
    error: function(){
      alert("Error");
    }
  })
});

