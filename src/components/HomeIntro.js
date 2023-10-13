import React from 'react';
import useTypingEffect from '../hooks/useTypingEffect'; 

// css
import '../css/HomeIntro.css';

// assets
import { BsArrowRight } from 'react-icons/bs';
import banner from '../assets/home-banner.png';

//multilangual
import { useTranslation } from 'react-i18next';

const HomeIntro = () => {

    //--------mutilingual part --------
    const {t/*, i18n*/} = useTranslation("global");
    //---------------------------------

    // typing effects
    const home_title_text = t("home.homeT");
    const intro_title_text = t("home.introT");
    
    const [homeTitle, invisibleHomeTitle, homeTitleref] = useTypingEffect(home_title_text);
    const [introTitle, invisibleIntroTitle, introTitleref] = useTypingEffect(intro_title_text);

    

    return (
        <div className='home-intro'>
            <div className="home-title" ref={homeTitleref}>
                <div className="page-title-1-xxl">
                    <span >{homeTitle}</span>
                    <span style={{color: 'transparent'}}>{invisibleHomeTitle}</span>
                </div>
            </div>
            <div className="home-banner">
                <img src={banner} 
                     className="banner-image"
                     alt="banner" />
            </div>
            <div className="home-description">
                <div className="home-description-1" ref={introTitleref}>
                    <div className="page-title-2">
                        <span >{introTitle}</span>
                        <span style={{color: 'transparent'}}>{invisibleIntroTitle}</span>
                    </div>
                </div>
                <div className="home-description-2">
                    <div className="home-description-left">
                        <div className="page-title-3">
                            {t("home.homeDL")}
                            {/* We craft industry-leading shrink-fit holders and machines 
                            that enable machine shops to achieve unparalleled accuracy and efficiency 
                            — across diverse industrial applications. */}
                        </div>
                    </div>
                    <div className="home-description-right">
                        <div className="page-text-1 home-description-text">
                            {t("home.homeDR")}
                            {/* We are in a time of remarkable technological advancement. 
                            Our company recognizes our customers' critical need to utilize shrink fit technology for precise, 
                            reliable cutting — and to excel in the competitive manufacturing landscape. */}
                        </div>
                        
                        <div className="page-link-btn">
                            <div className="page-link-btn-text btn-text-1 ">
                                {t("home.homePL")}
                                {/* Learn more about our study on 
                                Shrink Fit Technology */}
                            </div>
                            <div className="page-link-btn-icon">
                                <BsArrowRight />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeIntro;