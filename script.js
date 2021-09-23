const text = document.getElementById("text");
const eduBtn = document.getElementById("utbildning");
const expBtn = document.getElementById("erfarenhet");
const homeBtn = document.getElementById("hem");

eduBtn.addEventListener("click", function(){
    text.innerHTML = "<ul><li><h3>2008-2011</h3>Fordonsprogrammet på Linköpings Praktiska Gymnasium</li><li><h3>2014-2015</h3>Svetsutbildning på Västra Götalands Industriutbildningar</li></ul>";
});

homeBtn.addEventListener("click", function(){
    text.innerHTML = 'Är 30 år gammal och bor utanför Skene med fru och två barn, har stort intresse för friluftsliv och teknik.';
});

expBtn.addEventListener("click", function(){
    text.innerHTML = '<ul><li><h3>2016-2021</h3><h4>Maskinhjälp AB</h4>Grovmekaniker och kompressortekniker</li><li><h3>2015-2016</h3><h4>Unicarriers</h4>MIG-svetsare</li><li><h3>2013-2014</h3><h4>Frontbilar</h4>Däckmontör</li><li><h3>2013-2013</h3><h4>Proffice</h4>Truckförare</li><li><h3>2012-2012</h3><h4>Däckforum 2000 AB</h4>Truckförare/Budbil/Lager</li><li><h3>2012-2012</h3><h4>Däckpoint</h4>Däckmontör</li><li><h3>2011-2012</h3><h4>VAT Consulting</h4>Byggvärmemontör</li><li><h3>2011-2011</h3><h4>Annas Café</h4> Cafébiträde/Kock</li>'
});