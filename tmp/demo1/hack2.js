const RATES = [
{
  "id": "5e6d510cc45f0d004fc424c4",
  "price": 400,
  "name": "Class | Introduction to Psilocybin Therapy | Thu Oct 8 | First week discount tier",
  "default_access_key": "C_PSILO"
},
{
  "id": "5e6d510cc45f0d004fc424c8",
  "price": 375,
  "name": "Class | Introduction to MDMA Therapy | Thu Oct 8 | First week discount tier",
  "default_access_key": "C_MDMA"
},
{
  "id": "5e6d510cc45f0d004fc424cb",
  "price": 1150,
  "name": "Patron | Thu+Fri+Reception+Sat+Sun+Mon | Reserved Seating | Winter Tier",
  "default_access_key": "P_THU_MON"
},
{
  "id": "5e6d510cc45f0d004fc424ce",
  "price": 575,
  "name": "Patron | Fri+Reception+Sat+Sun | Reserved Seating | Winter Tier",
  "default_access_key": "P_FRI_SUN"
},
{
  "id": "5e6d510cc45f0d004fc424d1",
  "price": 525,
  "name": "Patron | Sat+Sun+Mon | Reserved Seating | Winter Tier",
  "default_access_key": "P_SAT_MON"
},
{
  "id": "5e6d510cc45f0d004fc424d4",
  "price": 400,
  "name": "Patron | Reception+Sat+Sun | Reserved Seating | Winter Tier",
  "default_access_key": "P_REC_SUN"
},
{
  "id": "5e6d510cc45f0d004fc424d7",
  "price": 350,
  "name": "Patron | Sat+Sun | Reserved Seating | Winter Tier",
  "default_access_key": "P_SAT_SUN"
},
{
  "id": "5e6d510cc45f0d004fc424da",
  "price": 400,
  "name": "Patron | Thu Economics Forum | Reserved Seating | Winter Tier",
  "default_access_key": "P_THU"
},
{
  "id": "5e6d510cc45f0d004fc424dd",
  "price": 175,
  "name": "Patron | Fri Clinical Focus Day | Reserved Seating | Winter Tier",
  "default_access_key": "P_FRI"
},
{
  "id": "5e6d510cc45f0d004fc424e0",
  "price": 175,
  "name": "Patron | Sat Science+Medicine Day | Reserved Seating | Winter Tier",
  "default_access_key": "P_SAT"
},
{
  "id": "5e6d510cc45f0d004fc424e3",
  "price": 175,
  "name": "Patron | Sun Society+Culture Day | Reserved Seating | Winter Tier",
  "default_access_key": "P_SUN"
},
{
  "id": "5e6d510dc45f0d004fc424e6",
  "price": 175,
  "name": "Patron | Mon Indigenous Communities Forum Day | Reserved Seating | Winter Tier",
  "default_access_key": "P_MON"
},
{
  "id": "5e6d517ac45f0d004fc42533",
  "price": 585,
  "name": "Standard | Thu+Fri+Reception+Sat+Sun+Mon | Winter Tier",
  "default_access_key": "S_THU_MON"
},
{
  "id": "5e6d517ac45f0d004fc42534",
  "price": 340,
  "name": "Standard | Fri+Reception+Sat+Sun | Winter Tier",
  "default_access_key": "S_FRI_SUN"
},
{
  "id": "5e6d517ac45f0d004fc42535",
  "price": 240,
  "name": "Standard | Reception+Sat+Sun | Winter Tier",
  "default_access_key": "S_REC_SUN"
},
{
  "id": "5e6d517ac45f0d004fc42536",
  "price": 285,
  "name": "Standard | Sat+Sun+Mon | Winter Tier",
  "default_access_key": "S_SAT_MON"
},
{
  "id": "5e6d517ac45f0d004fc42537",
  "price": 190,
  "name": "Standard | Sat+Sun | Winter Tier",
  "default_access_key": "S_SAT_SUN"
},
{
  "id": "5e6d517ac45f0d004fc42538",
  "price": 150,
  "name": "Standard | Thu Economics Forum | Winter Tier",
  "default_access_key": "S_THU"
},
{
  "id": "5e6d517ac45f0d004fc42539",
  "price": 100,
  "name": "Standard | Fri Clinical Focus Day | Winter Tier",
  "default_access_key": "S_FRI"
},
{
  "id": "5e6d517ac45f0d004fc4253a",
  "price": 95,
  "name": "Standard | Sat Science+Medicine Day | Winter Tier",
  "default_access_key": "S_SAT"
},
{
  "id": "5e6d517ac45f0d004fc4253b",
  "price": 95,
  "name": "Standard | Sun Society+Culture Day | Winter Tier",
  "default_access_key": "S_SUN"
},
{
  "id": "5e6d517ac45f0d004fc4253c",
  "price": 95,
  "name": "Standard | Mon Indigenous Communities Forum Day | Winter Tier",
  "default_access_key": "S_MON"
},
];

function construct_state(access_keys) {
  const state = {
    "analytics": {
      "host": {
        "ref": null,
        "url": "blah",  // "file:///Users/jetpack/src/horizonshack/hack2/basic_embed.html"
      },
      "google": {
        "clientId": null
      },
      "ref": null
    },
    "accessKeys": [ access_keys ],
    "locale": "en",
    "currentEventId": "5e6d510cc45f0d004fc424c0",
    "costItems": [],
    "pwywAmounts": {},
    "targetId": "test-horizons-2020-perspectives-on-psychedelics-tickets-new-york-PHZ7GC",
    "targetType": "event",
    "widgetId": "8d1b1842-0b81-490f-a3ea-5c9ed094aaa8"
  };
  for (const key of access_keys) {
    const {id} = RATES.find(({default_access_key}) => key.toUpperCase() === default_access_key);
    state.costItems.push({
      "id": null,
      "amount": null,
      "claim_token": null,
      "host_fields": {},
      "rate_id": id,
      "cart_id": "6666"
    });
  }
  return state;
}

function construct_url(access_keys) {
  const target_id = 'test-horizons-2020-perspectives-on-psychedelics-tickets-new-york-PHZ7GC'
  const state = construct_state(access_keys);
  const encoded_state = encodeURIComponent(JSON.stringify(state));
  const url = `https://www.universe.com/embed2/events/${target_id}?state=${encoded_state}`;
  // console.log(state);
  // console.log(encoded_state);
  // console.log(url);
  return url;
}

// console.log(construct_url(['C_MDMA']));


// return `https://www.universe.com/embed2/events/horizons-2020-perspectives-on-psychedelics-tickets-new-york-894SDV?state=%7B%22analytics%22%3A%7B%22host%22%3A%7B%22ref%22%3Anull%2C%22url%22%3A%22https%3A%2F%2Fhorizons.nyc%2Fregister%22%7D%2C%22google%22%3A%7B%22clientId%22%3A%221509470032.1583816338%22%7D%2C%22ref%22%3Anull%7D%2C%22accessKeys%22%3A%5B%5D%2C%22locale%22%3A%22en%22%2C%22currentEventId%22%3A%225e3e3416ae3a1d00423e474f%22%2C%22costItems%22%3A%5B%7B%22id%22%3Anull%2C%22amount%22%3Anull%2C%22claim_token%22%3Anull%2C%22host_fields%22%3A%7B%7D%2C%22rate_id%22%3A%22${rate_id}%22%2C%22cart_id%22%3A%226666%22%7D%5D%2C%22pwywAmounts%22%3A%7B%7D%2C%22targetId%22%3A%22horizons-2020-perspectives-on-psychedelics-tickets-new-york-894SDV%22%2C%22targetType%22%3A%22event%22%7D`;


// rates from https://www.universe.com/events/test-horizons-2020-perspectives-on-psychedelics-tickets-new-york-PHZ7GC
// $ cat ./rates_full.json | jq  '.rates[] | {id, price, name, default_access_key}'

// state from embedded widget submission
// {
//   "analytics": {
//     "host": {
//       "ref": null,
//       "url": "file:///Users/jetpack/src/horizonshack/hack2/basic_embed.html"
//     },
//     "google": {
//       "clientId": null
//     },
//     "ref": null
//   },
//   "accessKeys": [
//     "C_MDMA"
//   ],
//   "locale": "en",
//   "currentEventId": "5e6d510cc45f0d004fc424c0",
//   "costItems": [
//     {
//       "id": null,
//       "amount": null,
//       "claim_token": null,
//       "host_fields": {},
//       "rate_id": "5e6d510cc45f0d004fc424c8",
//       "cart_id": "9e59"
//     }
//   ],
//   "pwywAmounts": {},
//   "targetId": "test-horizons-2020-perspectives-on-psychedelics-tickets-new-york-PHZ7GC",
//   "targetType": "event",
//   "widgetId": "8d1b1842-0b81-490f-a3ea-5c9ed094aaa8"
// }
