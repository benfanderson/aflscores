const AdelaideCrows = require('../public/images/AdelaideCrows.svg');
const BrisbaneLions = require('../public/images/BrisbaneLions.svg');
const Carlton = require('../public/images/Carlton.svg');
const Collingwood = require('../public/images/Collingwood.svg');
const Essendon = require('../public/images/Essendon.svg');
const Fremantle = require('../public/images/Fremantle.svg');
const Geelong = require('../public/images/GeelongCats.svg');
const GoldCoast = require('../public/images/GoldCoastSuns.svg');
const GreaterWesternSydney = require('../public/images/GWSGiants.svg');
const Hawthorn = require('../public/images/Hawthorn.svg');
const Melbourne = require('../public/images/Melbourne.svg');
const NorthMelbourne = require('../public/images/NorthMelbourne.svg');
const PortAdelaide = require('../public/images/PortAdelaide.svg');
const Richmond = require('../public/images/Richmond.svg');
const StKilda = require('../public/images/StKilda.svg');
const SydneySwans = require('../public/images/SydneySwans.svg');
const WestCoastEagles = require('../public/images/WestCoastEagles.svg');
const WesternBulldogs = require('../public/images/WesternBulldogs.svg');

function clubLogo(club: string) {
  if (club === 'Adelaide') {
    const logo = AdelaideCrows;
    return logo;
  } if (club === 'Brisbane Lions') {
    const logo = BrisbaneLions;
    return logo;
  } if (club === 'Carlton') {
    const logo = Carlton;
    return logo;
  } if (club === 'Collingwood') {
    const logo = Collingwood;
    return logo;
  } if (club === 'Essendon') {
    const logo = Essendon;
    return logo;
  } if (club === 'Fremantle') {
    const logo = Fremantle;
    return logo;
  } if (club === 'Geelong') {
    const logo = Geelong;
    return logo;
  } if (club === 'Gold Coast') {
    const logo = GoldCoast;
    return logo;
  } if (club === 'Greater Western Sydney') {
    const logo = GreaterWesternSydney;
    return logo;
  } if (club === 'Hawthorn') {
    const logo = Hawthorn;
    return logo;
  } if (club === 'Melbourne') {
    const logo = Melbourne;
    return logo;
  } if (club === 'North Melbourne') {
    const logo = NorthMelbourne;
    return logo;
  } if (club === 'Port Adelaide') {
    const logo = PortAdelaide;
    return logo;
  } if (club === 'Richmond') {
    const logo = Richmond;
    return logo;
  } if (club === 'St Kilda') {
    const logo = StKilda;
    return logo;
  } if (club === 'Sydney') {
    const logo = SydneySwans;
    return logo;
  } if (club === 'West Coast') {
    const logo = WestCoastEagles;
    return logo;
  }
  const logo = WesternBulldogs;
  return logo;
}

export default clubLogo;
