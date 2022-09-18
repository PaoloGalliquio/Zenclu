
import NavbarZ from "./Shared/NavBar/NavbarZ";
import SubscriptionList from "./Shared/Subscriptions/SubscriptionList";
import TrendList from "./Shared/Trends/TrendList";
import TopCreatorList from "./Shared/TopCreators/TopCreatorList";
import CarouselZ from './Shared/CaroulselZ';
import Footer from './Shared//Footer/Footer';

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