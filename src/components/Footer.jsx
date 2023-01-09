import twitterIcon from '../assets/images/icon-twitter.svg'
import facebookIcon from '../assets/images/icon-fb.svg'
import youtubeIcon from '../assets/images/icon-yt.svg'
import githubIcon from '../assets/images/icon-gh.svg'

export default function Footer() {
    return(
        <div className="footer flex items-center justify-between px-[35px] py-[20px] bg-[#161619] mt-10">
            <a href="#" className="footer__social-link">
                <img src={twitterIcon} alt="" className="footer__social-link-icon w-[25px]" />
            </a>
            <a href="#" className="footer__social-link">
                <img src={facebookIcon} alt="" className="footer__social-link-icon w-[25px]" />
            </a>
            <a href="#" className="footer__social-link">
                <img src={youtubeIcon} alt="" className="footer__social-link-icon w-[25px]" />
            </a>
            <a href="#" className="footer__social-link">
                <img src={githubIcon} alt="" className="footer__social-link-icon w-[25px]" />
            </a>
        </div>
    )
}