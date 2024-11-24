import styles from './style.module.css'
import {ContactInformation} from "../../common/interfaces";
import React from "react";

const Contact: React.FC<ContactInformation> = (ContactInformation: ContactInformation ) => {
    return(
        <>
            <section className={`contact-section bg-black ${styles.paddedSection}`} id="contact">
                <div className="container px-4 px-lg-5">
                    <div className="row gx-4 gx-lg-5">
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">{ContactInformation.socialsText}</h4>
                                    <hr className="my-4 mx-auto"/>
                                    <a className="mx-2" href="https://www.linkedin.com/in/cbrown987/">
                                        <i className={`bi bi-linkedin ${styles.SocialIcons}`}></i>
                                    </a>
                                    <a className="mx-2" href="https://github.com/cbrown987">
                                        <i className={`bi bi-github ${styles.SocialIcons}`}></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">{ContactInformation.emailText}</h4>
                                    <hr className="my-4 mx-auto"/>
                                    <div className="small text-black-50">
                                        <a href="mailto:cooper.brown@drake.edu">cooper.brown@drake.edu</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 mb-3 mb-md-0">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">{ContactInformation.resumeText}</h4>
                                    <hr className="my-4 mx-auto"/>
                                    <div className="small text-black-50">
                                        <a href="assets/Resume.pdf"
                                           download="assets/Resume.pdf">{ContactInformation.downloadText}</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export {Contact}