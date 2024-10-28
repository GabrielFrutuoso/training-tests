import axios from 'axios';

const apiClients = {
  championsInfos: axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/14.21.1/data/pt_BR/champion.json',
  }),
  specificChamp: axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/14.21.1/data/pt_BR/champion',
  }),
  loadingScreen: axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/img/champion/loading',
  }),
  squareAsset: axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/champion',
  }),
  passiveAsset: axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/passive',
  }),
  abilityAsset: axios.create({
    baseURL: 'https://ddragon.leagueoflegends.com/cdn/14.21.1/img/spell',
  }),
};

export default apiClients;
