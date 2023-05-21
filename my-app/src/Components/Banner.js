import "../Styles/banner.css";
import logo from '../Images/AggieReuseLogo.png';


function Banner() {


    return(
        <div class="mainBanner">
            <img src={logo} class="logo" alt="AggieRescueLogo"></img>
            <p class="bannerText"> Transforming Wardrobes, Changing Lives: Donate, Reuse, Inspire!</p>
        </div>
    );
}

export default Banner;