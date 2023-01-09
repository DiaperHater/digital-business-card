import avaPic from '../assets/images/ava.png'
import mailIcon from '../assets/images/icon-mail.svg'
import linkedInIcon from '../assets/images/icon-in.svg'

export default function Info() {
    return(
        <div className="info">
            <div className="info__ava h-0 pb-[100%] bg-pink-300 bg-no-repeat bg-center bg-cover" style={{backgroundImage: `url(${avaPic})` }}></div>
            <div className="info__body py-[21px] px-[35px] text-center">
                <h3 className="info__title text-[25px] font-bold">
                    Laura Smith
                </h3>
                <h5 className="info__subtitle text-[13px] text-[#F3BF99]">
                    Frontend Developer
                </h5>
                <a href="#" className="info__link text-[10.24px] hover:underline">laurasmith.website</a>
                <div className="info__buttons flex justify-center gap-x-4 mt-[15px]">
                    <a href="#" className="info__button duration-300 flex items-center justify-center text-[14px] font-medium rounded-lg bg-gray-500 py-2 px-4 min-w-[115px] bg-white text-[#374151]">
                        <img src={mailIcon} alt="" className="info__button-icon mr-2 block w-[14px]" />
                        Email
                    </a>
                    <a href="#" className="info__button duration-300 flex items-center justify-center text-[14px] font-medium rounded-lg bg-gray-500 py-2 px-4 min-w-[115px] bg-[#5093E2]">
                        <img src={linkedInIcon} alt="" className="info__button-icon mr-2 block w-[14px]" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </div>
    )
}