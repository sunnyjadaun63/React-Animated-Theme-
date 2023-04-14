import React, { useEffect, useState } from 'react'
import Images from './ImgImport'
import Aos from 'aos';
import 'aos/dist/aos.css'
import { FaMapMarked } from "react-icons/fa";
import { AiFillPlayCircle, AiFillPauseCircle, AiTwotoneStar,AiFillPhone, AiFillMail } from "react-icons/ai";
import SwiperCard from './SwiperCard';
import Footer from './Footer';
import ClientSlider from './ClientSlider';
import Social from './Social';
import ContactUsForm from './ContactUsForm';

const ContactUsContent = () => {
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
                        

                        <div className="col-lg-8 col-md-11 col-12 mx-auto">

                            <h6 className="services-text">Get In <b>Touch</b> </h6>
                            <p className="connect-with-us">Contact With Us</p>
                            <p className="connect-with-us-para">Having the shortest possible delay between idea and launch is crucialin business.</p>
                            <div className="contact-us-content-box">
                                <div className="contact-us-contenet-box-item">
                                    <div className="contact-us-content-box-img">
                                        <AiFillPhone/>
                                    </div>
                                    <p className="contact-us-content-box-text">+917302854849</p>
                                </div>
                            </div>
                            <div className="contact-us-content-box">
                                <div className="contact-us-contenet-box-item">
                                    <div className="contact-us-content-box-img">
                                        <AiFillMail/>
                                    </div>
                                    <p className="contact-us-content-box-text">SunnyJadaun63@gmail.com</p>
                                </div>
                            </div>
                            <div className="contact-us-content-box">
                                <div className="contact-us-contenet-box-item">
                                    <div className="contact-us-content-box-img">
                                        <FaMapMarked/>
                                    </div>
                                    <p className="contact-us-content-box-text">Forelskets Softwares Aligarh</p>
                                </div>
                            </div>
                            <h6 className="services-text my-2">Follow <b>Us</b> </h6>
                            <Social/>
                            <div className="row">
                                <ContactUsForm/>
                            </div>
                           
                           
                            </div>
                    </div>

                </div>
                
                <div className="row">
                    <div className="col-lg-10 col-md-10 col-12 mx-auto py-3">
                        <Footer FooterName='contact' />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ContactUsContent;