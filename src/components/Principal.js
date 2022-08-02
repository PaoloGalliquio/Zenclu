
import NavbarZ from "./NavBar/NavbarZ";
import SubscriptionList from "./Subscriptions/SubscriptionList";
import TrendList from "./Trends/TrendList";
import TopCreatorList from "./TopCreators/TopCreatorList";
import CarouselZ from './CaroulselZ';
import Footer from './Footer/Footer';

const Principal = () => {
  return (
    <>
    <NavbarZ/>
    <SubscriptionList/>
    {/* <CarouselZ/> */}
    <TrendList/>
    <TopCreatorList/>
    <Footer/>
    </>
  );
}

export default Principal