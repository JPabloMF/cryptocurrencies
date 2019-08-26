import axios from 'axios';

const getCryptoCurrencie = () =>
  axios
    .get(
      'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
      {
        headers: { 'X-CMC_PRO_API_KEY': '59cab330-f207-4a1d-91bd-dafd68972cdb' }
      }
    )
    .then((result) => result)
    .catch((error) => console.log(error));

export default getCryptoCurrencie;
