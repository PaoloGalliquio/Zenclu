import './ZWallet.css'
import NavbarZ from "../Shared/NavBar/NavbarZ";
import Footer from '../Shared/Footer/Footer';
import HeaderTitle from '../Shared/HeaderTitle/HeaderTitle';
import TabSelector from "../Shared/TabSelector/TabSelector";
import image1 from '../../assets/Iconos/Gray-Facebook.png'
import image2 from '../../assets/Iconos/Recurso 40.png'
import image3 from '../../assets/Iconos/Recurso 37.png'

const Zwalet = () => {
  const tabs = [
    {
      name: 'ZCoins',
      image: image2,
      active: true
    },
    {
      name: 'ZPoints',
      image: image3,
      active: false
    }
  ];
  
  return (
    <>
      <NavbarZ />
      <HeaderTitle 
        image = {image1}
        title = "ZWallet"
      />
      <TabSelector tabs = {tabs} haveImage = {true}/>
      <div className="row w-100 text-center">
        <h5 className="mt-3 wallet-total zencluBold">Total actual</h5>
        <h1 className="zencluBold">2,763</h1>
      </div>
      <div className="row w-100 wallet-section3">
        <div className="col text-center zencluSemiBold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum magnam
          quia recusandae sequi ea illum aliquam, dolores aut! Aliquam, illo
          facere, quis cupiditate omnis expedita possimus officia unde eos porro
          aut odit eum iusto eius laborum dolore aperiam itaque quia animi at
          libero! Deleniti, reprehenderit? Tempora nemo aliquid maiores nam
          blanditiis ea deleniti earum quo quidem ipsam nesciunt rerum sit vel
          exercitationem laborum, quas totam sint aliquam quod consequatur
          libero voluptatem iste quisquam. Debitis eos quam ipsum error commodi
          magnam fugit numquam ducimus doloribus asperiores nostrum,
          necessitatibus sunt minus aut dignissimos placeat. Delectus facere
          corrupti soluta temporibus aperiam, dolorum maxime.
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Zwalet