function updateCurrency() {
    const fromCurrency = document.getElementById('fromCurrency').value;
    const currencySymbol = document.getElementById('currencySymbol');

    // Define o símbolo da moeda de acordo com a seleção
    if (fromCurrency === "USD") {
        currencySymbol.textContent = "$";
    } else if (fromCurrency === "EUR") {
        currencySymbol.textContent = "€";
    } else if (fromCurrency === "BRL") {
        currencySymbol.textContent = "R$";
    }

    // Atualiza o placeholder
    document.getElementById('Tamanho').placeholder = "Valor";
}

// Chama a função inicialmente para definir o símbolo padrão
updateCurrency();

document.getElementById('container"').addEventListener('submit', function(event){
    const valor = parsefloat(document.getElementById('Tamanho').value);
    const fromCurrency = document.getElementById('fromcurrency').value;
    const toCurrency = document.getElementById('tocurrency').value;

    //defir taxa de cambio fixo

    const exchangeRates = {
        USD: { EUR: 0.93, BRL: 5.71 }, BRL: { EUR: 0.16 , USD: 0.18 }, EUR: { USD:  1.08 , BRL: 6.17}
    };
});