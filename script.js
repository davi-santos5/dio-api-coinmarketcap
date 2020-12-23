const apiKey = {key: 'Insira sua chave aqui'}

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' +
apiKey.key)
    .then( response => {
        if (!response.ok) throw new Error(`Erro ao executar a requisição, status ${response.status}`)
        
        return response.json();
    })
    .then( api => {
        var texto = "";
        
        for(let i = 0; i < 10; i++){
            let first_data = api.data[i].first_historical_data.slice(0, 10)
            first_data = first_data.split('-').reverse().join('/')
            console.log(api)
           texto = texto + `
                <div class="media">
                    <img src="coin.jpg" class="coin-img" alt="coin">
                    <div class="media-body">
                        <div class="media-title">
                            <h2>${api.data[i].name}</h2>
                            <p>${api.data[i].symbol}</p>
                        </div>
                        <p> First data: ${first_data}</p>
                    </div>
                </div>`
            document.querySelector(".coins-wrapper").innerHTML = texto;
            
        }
    })
    .catch(error => {
        console.error(error.message);
    })