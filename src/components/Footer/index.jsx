import './footer.css';
import logo from '../../assets/kasa_footer.png';

function Footer() {

    return(
        <footer>
            <div className='footerContainer'>
                <img src={logo} alt='Logo Kasa' />
                <p className='desktopCopyright'>© 2020 Kasa. All rights reserved</p>
                <p className='mobileCopyright'>© 2020 Kasa. All<br /> rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer