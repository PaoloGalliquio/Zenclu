import './ZWallet.css'
import NavbarZ from "../NavBar/NavbarZ";
import Footer from '../Footer/Footer';
import image1 from '../../assets/Iconos/Gray-Facebook.png'
import image2 from '../../assets/Iconos/Recurso 40.png'
import image3 from '../../assets/Iconos/Recurso 37.png'

const Zwalet = () => {
  const iconSize = "80px";
  return (
    <>
      <NavbarZ />
      <div className="row w-100 d-flex wallet-section1">
        <div className="wallet-icon">
          <img src={image1} alt="ZWallet" className='m-0 p-0' height={"50px"}/>
        </div>
        <div className="col justify-content-center align-self-center">
          <h2 className="zencluBold">ZWallet</h2>
        </div>
      </div>
      <div className="row w-100 text-center wallet-section2">
        <div className="col tabActive pb-2">
          <img src={image2} alt="ZCoins" height={iconSize}/>
          <h4 className="zencluBold mt-2">ZCoins</h4>
        </div>
        <div className="col tabNotActive">
          <img src={image3} alt="ZPoints" height={iconSize}/>
          <h4 className="zencluBold mt-2">ZPoints</h4>
        </div>
      </div>
      <div className="row w-100 text-center">
        <span className="lineaGradiente"></span>
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