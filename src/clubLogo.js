import AdelaideCrows from '../public/images/AdelaideCrows.svg';
import BrisbaneLions from '../public/images/BrisbaneLions.svg';
import Carlton from '../public/images/Carlton.svg';
import Collingwood from '../public/images/Collingwood.svg';
import Essendon from '../public/images/Essendon.svg';
import Fremantle from '../public/images/Fremantle.svg';
import Geelong from '../public/images/GeelongCats.svg';
import GoldCoast from '../public/images/GoldCoastSuns.svg';
import GreaterWesternSydney from '../public/images/GWSGiants.svg';
import Hawthorn from '../public/images/Hawthorn.svg';
import Melbourne from '../public/images/Melbourne.svg';
import NorthMelbourne from '../public/images/NorthMelbourne.svg';
import PortAdelaide from '../public/images/PortAdelaide.svg';
import Richmond from '../public/images/Richmond.svg';
import StKilda from '../public/images/StKilda.svg';
import SydneySwans from '../public/images/SydneySwans.svg';
import WestCoastEagles from '../public/images/WestCoastEagles.svg';
import WesternBulldogs from '../public/images/WesternBulldogs.svg';

function clubLogo(club) {
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
