const express = require('express');
const i18next = require('i18next');
const fetch = require('node-fetch');
const app = express();
const port = process.env.PORT || 8083;
let data;
fetch('https://bitbucket.org/teamdasher/app-translations-files/raw/ceafaffa17d0092a9dc12b4bfe8947d28b8c7e30/translation_en-GB.json')
.then(res => res.json())
.then(body => {
  data = body});


app.get('/', async (req, res) => {
  i18next.init({
    lng: 'en',
    resources: {
      en: {
        translation: data
      }
    }
  },function(er, t){
    console.log(i18next.t('screen-offer-details.people viewing', { count: '150',}))
    res.send(`${i18next.t('screen-arrived.steps.1')} redeemed ${i18next.t('screen-arrived.steps.2')}%  which was shared with them by ${i18next.t('screen-arrived.steps.3')}. ${i18next.t('screen-arrived.steps.2s')} took an after discount payment of ${i18next.t('screen-arrived.steps.1s')}. `);
  });
});


app.listen(port, (err) => {
  console.log(`Server is listening on port ${port}`);
});
