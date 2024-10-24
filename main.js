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
    
});