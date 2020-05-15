// TODO:
// - build structured representation of all data
// - populate form based on data
// - form behavior:
//   - check validity (reception requires weekend)
//   - compute costs

const TICKET_TYPES = [
  {
    'date': 'Thu Oct 8',
    'name': 'Psychedelic Economic Forum',
    'type_id': 'econ',
  },
  {
    'date': 'Fri Oct 9',
    'name': 'Focus on Clinical Research',
    'type_id': 'clin',
  },
  {
    'date': 'Fri Oct 9',
    'name': 'Reception Party',
    'type_id': 'rec',
  },
  {
    'date': 'Sat Oct 10',
    'name': 'Science + Medicine',
    'type_id': 'sci',
  },
  {
    'date': 'Sun Oct 11',
    'name': 'Society + Culture',
    'type_id': 'soc',
  },
  {
    'date': 'Mon Oct 12',
    'name': 'Indigenous Communities Forum',
    'type_id': 'ind',
  },
];

const TICKET_TIERS = [ 'Standard', 'Patron', 'Virtual' ];

function price(ticket_type, ticket_tier) {
  switch (ticket_tier) {
    case 'Patron':
      switch (ticket_type) {
        case 'econ': return 400;
        case 'rec': return 50;
        default: return 175;
      }
    case 'Standard':
      switch (ticket_type) {
        case 'econ': return 150;
        case 'clin': return 100;
        case 'rec': return 50;
        default: return 95;
      }
    case 'Virtual':
      switch (ticket_type) {
        case 'econ': return 90;
        case 'rec': return 20;
        default: return 50;
      }
  }
}

function horizonsTicketId(ticket_type, ticket_tier) {
  switch (ticket_tier) {
    case 'Patron':
      switch (ticket_type) {
        case 'econ': return '5e6d510cc45f0d004fc424da';
        case 'clin': return '5e6d510cc45f0d004fc424dd';
        case 'rec': return '5e6d510cc45f0d004fc424d4';  // reused rec+sat+sun
        case 'sci': return '5e6d510cc45f0d004fc424e0';
        case 'soc': return '5e6d510cc45f0d004fc424e3';
        case 'ind': return '5e6d510dc45f0d004fc424e6';
      }
    case 'Standard':
      switch (ticket_type) {
        case 'econ': return '5e6d517ac45f0d004fc42538';
        case 'clin': return '5e6d517ac45f0d004fc42539';
        case 'rec': return '5e6d517ac45f0d004fc42535';  // reused rec+sat+sun
        case 'sci': return '5e6d517ac45f0d004fc4253a';
        case 'soc': return '5e6d517ac45f0d004fc4253b';
        case 'ind': return '5e6d517ac45f0d004fc4253c';
      }
    case 'Virtual':
      switch (ticket_type) {
        case 'econ': return '?';
        case 'clin': return '?';
        case 'rec': return '???';
        case 'sci': return '?';
        case 'soc': return '?';
        case 'ind': return '?';
      }
  }
}

const HORIZONS_TARGET_ID = 'test-horizons-2020-perspectives-on-psychedelics-tickets-new-york-PHZ7GC'
function construct_url(ticketData) {
  const state = _construct_state(ticketData);
  const encoded_state = encodeURIComponent(JSON.stringify(state));
  const url = `https://www.universe.com/embed2/events/${HORIZONS_TARGET_ID}?state=${encoded_state}`;
  // console.log(state);
  // console.log(encoded_state);
  // console.log(url);
  return url;
}

function _construct_state(ids_to_quantities) {
  const state = {
    "analytics": {
      "host": {
        "ref": null,
        "url": "blah",
      },
      "google": {
        "clientId": null
      },
      "ref": null
    },
    // "accessKeys": Object.keys(key_counts),
    "locale": "en",
    "currentEventId": "5e6d510cc45f0d004fc424c0",
    "costItems": [],
    "pwywAmounts": {},
    "targetId": HORIZONS_TARGET_ID,
    "targetType": "event",
    "widgetId": "8d1b1842-0b81-490f-a3ea-5c9ed094aaa8"
  };
  for (let [ticketId, count] of Object.entries(ids_to_quantities)) {
    while (count > 0) {
      state.costItems.push({
        "id": null,
        "amount": null,
        "claim_token": null,
        "host_fields": {},
        "rate_id": ticketId,
        "cart_id": "6666"
      });
      --count;
    }
  }
  return state;
}
