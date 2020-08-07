
const $button = document.querySelector('button');


$button.addEventListener('click', buttonSeach);

function buttonSeach() {
    const $dateTo = document.querySelector('input.to').value;
    const $inputUf = document.querySelector('input.uf').value;
    const $result = document.querySelector('div.result');



    function allStates() {

        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(res => res.json())
            .then(states => {
                states.map((index) => {
                    if ($inputUf.toUpperCase() == index.sigla) {
                        renderToScreen(index.nome);
                    }
                })
            })
    }

    auxilo();
    function auxilo() {
        const monthTo = `${$dateTo[5]}${$dateTo[6]}`;
        const dayTo = `${$dateTo[8]}${$dateTo[9]}`;
        
        allStates();

        fetch(`http://ae-portaldatransparencia.cgu.gov.br/auxilio-emergencial/beneficios/consulta/resultado?paginacaoSimples=true&tamanhoPagina=15&offset=0&direcaoOrdenacao=asc&colunaOrdenacao=municipio&de=01/07/2020&ate=${String(dayTo)}/${String(monthTo)}/2020&municipio=&colunasSelecionadas=linkDetalhamento,linguagemCidada,mesAno,uf,municipio,valor,quantidade&_=1596639565692`)
            .then(res => res.json())
            .then(ufs => {
                ufs.data.map(index => {
                    if (index.uf.toUpperCase().trim() == $inputUf) {
                        const $resultIn = document.querySelector('div.result div span.render');
                        $resultIn.innerHTML = `
                            Total de R$:${index.valor} pago, des de 01/04/2020 ate ${dayTo}/${monthTo}/2020.
                        `
                    }
                    console.log(index)
                })
            })
    }
    
    function renderToScreen(state) {
        $result.innerHTML = `
            <div>
                <h3>Estado: ${state}(${$inputUf.toUpperCase()})</h3>
                <p>
                    <span>Auxio emergencial</span>
                    <span class="render">
                        
                    </span>
                </p>
            </div>
        `
    }

}





