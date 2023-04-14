import React, { useEffect, useState } from 'react'
import Images from './ImgImport'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { AiFillPlayCircle, AiFillPauseCircle, AiTwotoneStar } from "react-icons/ai";
import SwiperCard from './SwiperCard';
import Footer from './Footer';
import ClientSlider from './ClientSlider';

const ServiceContent = () => {
    const [isPlaying, setisPlaying] = useState(false)

    function PlayVideo() {
        const video = document.querySelector('#myVid')
        if (!isPlaying) {
            video.play()
        }
        else {
            video.pause()
        }
        setisPlaying(!isPlaying)
    }
    useEffect(()=>{
        Aos.init({duration:1000})
    })

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-10 col-md-10 services-content-wrapper col-12 p-relative mx-auto pb-3" data-aos='fade-right'>
                        <video className=' services-bg' autoPlay muted loop controls='' >
                            <source src={Images.servicesBg2} type='video/mp4' />
                        </video>

<div className="wrapper-d w-100">
<div className="col-lg-9 col-md-11 col-12 mx-auto">

<h6 className="services-text">What We Do  <span className="">Best</span> </h6>
<div className="row services-section-item-row">
    <div className="col-md-4 col-12 mx-auto services-section-item-row-img">
        <img src="https://prium.github.io/Boots5/v1.0.0/assets/img/services/development.png" alt="" className="img-fluid" />
    </div>
    <div className="col-md-8 col-12 mx-auto services-section-item-row-content">
        <h6 className="services-section-item-row-heading">Web DevelopMent</h6>
        <p className="services-section-item-row-para">Our award-winning team follow industry best practices to develop software.</p>
    </div>
</div>
<div className="row flex-row-reverse services-section-item-row">
    <div className="col-md-4 col-12 mx-auto services-section-item-row-img">
        <img src="https://prium.github.io/Boots5/v1.0.0/assets/img/services/design.png" alt="" className="img-fluid" />
    </div>
    <div className="col-md-8 col-12 mx-auto services-section-item-row-content">
        <h6 className="services-section-item-row-heading">Design</h6>
        <p className="services-section-item-row-para">Our unique tools design grahphics & HTML5 templates 4X faster than our rivals.</p>
    </div>
</div>
<div className="row services-section-item-row">
    <div className="col-md-4 col-12 mx-auto services-section-item-row-img">
        <img src="https://prium.github.io/Boots5/v1.0.0/assets/img/services/application.png" alt="" className="img-fluid" />
    </div>
    <div className="col-md-8 col-12 mx-auto services-section-item-row-content">
        <h6 className="services-section-item-row-heading">Application</h6>
        <p className="services-section-item-row-para">Having the shortest possible delay between idea and launch is crucial in business possible delay between ideapossible delay between idea</p>
    </div>
</div>

</div>
</div>
                       
                    </div>

                </div>
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-12 mx-auto py-3">
                        <div className="row my-4">
                        <h4 class="meet-our-team">Choose Your Plan</h4>
                        </div>
                        <div className="row choose-your-plan">
                        
                            <div className="col-md-4 px-1">
                            <div className="plan-card" data-aos="fade-down">
                                    <h6 className="plan-heading">Advanced</h6>
                                    <p className="basic-plan-headi">$20 <span>/monthly</span></p>
                                    <ul className="plan-list">
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                    </ul>
                                    <button className="btn-plans">Purchase</button>
                                </div>
                                
                            </div>
                            <div className="col-md-4 px-1">
                            <div className="plan-card" data-aos="fade-down">
                                    <h6 className="plan-heading">Advanced</h6>
                                    <p className="basic-plan-headi">$20 <span>/monthly</span></p>
                                    <ul className="plan-list">
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                    </ul>
                                    <button className="btn-plans">Purchase</button>
                                </div>
                                
                            </div>
                            <div className="col-md-4 px-1">
                            <div className="plan-card" data-aos="fade-down">
                                    <h6 className="plan-heading">Advanced</h6>
                                    <p className="basic-plan-headi">$20 <span>/monthly</span></p>
                                    <ul className="plan-list">
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                        <li className="plan-list-item"><AiTwotoneStar/> Unlimited </li>
                                    </ul>
                                    <button className="btn-plans">Purchase</button>
                                </div>
                                
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-10 col-md-10 col-12 mx-auto py-3">
                        <div className="row my-4">
                        <h4 class="meet-our-team">Our Valueable Clients</h4>
                        </div>
                        <div className="row our-valueable-clients">
                        <ClientSlider/>
                           
                        </div>

                    </div>

                </div>
                <div className="row">
                    <h4 className="meet-our-team">Meet Our Team</h4>
                    <div className="col-lg-4 col-md-8 col-12 mx-auto py-3">
                        <div className="row">

                            <SwiperCard />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-12 mx-auto py-3">
                        <Footer FooterName='service' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ServiceContent;