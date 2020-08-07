const $inputUf = document.querySelector('input.uf').value;
const $dateIn = document.querySelector('input.in').value;
const $dateTo = document.querySelector('input.to').value;
const $button = document.querySelector('button');
const $result = document.querySelector('div.result');

$button.addEventListener('click', buttonSeach);

function buttonSeach() {
    const state = new Array();
    const valuesForUfs = new Array();
    
    function allStates() {
        fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
            .then(res => res.json())
            .then(states => {
                states.map((index) => {
                    state.push({
                        name: index.nome,
                        sigla: index.sigla
                    })    
                })
            })
    }

    function auxilo() {
        const monthIn = `${$dateIn[5]}${$dateIn[6]}`;
        const dayIn = `${$dateIn[8]}${$dateIn[9]}`;
        const monthTo = `${$dateTo[5]}${$dateTo[6]}`;
        const dayTo = `${$dateTo[8]}${$dateTo[9]}`;

        fetch(`http://ae-portaldatransparencia.cgu.gov.br/auxilio-emergencial/beneficios/consulta/resultado?paginacaoSimples=true&tamanhoPagina=15&offset=0&direcaoOrdenacao=asc&colunaOrdenacao=municipio&de=01/07/2020&ate=31/07/2020&municipio=&colunasSelecionadas=linkDetalhamento,linguagemCidada,mesAno,uf,municipio,valor,quantidade&_=1596639565692`)
            .then(res => res.json())
            .then(ufs => {
                
            })
    }

    auxilo();    
}
