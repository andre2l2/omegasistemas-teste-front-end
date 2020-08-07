
const $button = document.querySelector('button');


$button.addEventListener('click', buttonSeach);

function buttonSeach() {
    const $dateTo = document.querySelector('input.to').value;
    const $inputUf = document.querySelector('input.uf').value;
    const $result = document.querySelector('div.result');


    const state = [];


    function allStates() {

        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(res => res.json())
            .then(states => {
                states.map((index) => {
                    if ($inputUf.toUpperCase() == index.sigla) {
                        state.push({
                            name: index.nome,
                            sigla: index.sigla
                        })  
                    }
                })
            })

        return state;
    }

    
    function renderToScreen() {

        $result.innerHTML = `
            <div>
                <h3>Total do estado de ${$inputUf.toUpperCase()}</h3>
                <p>
                    <span>Auxio emergencial</span>
                    <span>
                        Total pago des ${valuesForUfs.price} de 04/2020 ao estado de uf
                    </span>
                    
                </p>
            </div>
        `
    }


    renderToScreen();
}



auxilo();
function auxilo() {
    const monthTo = `${$dateTo[5]}${$dateTo[6]}`;
    const dayTo = `${$dateTo[8]}${$dateTo[9]}`;

    fetch(`http://ae-portaldatransparencia.cgu.gov.br/auxilio-emergencial/beneficios/consulta/resultado?paginacaoSimples=true&tamanhoPagina=15&offset=0&direcaoOrdenacao=asc&colunaOrdenacao=municipio&de=01/07/2020&ate=${String(dayTo)}/${String(monthTo)}/2020&municipio=&colunasSelecionadas=linkDetalhamento,linguagemCidada,mesAno,uf,municipio,valor,quantidade&_=1596639565692`)
        .then(res => res.json())
        .then(ufs => {
            ufs.data.map(index => {
                valuesForUfs.push({
                    uf: index.uf,
                    price: index.valor
                })
            })
        })
}

