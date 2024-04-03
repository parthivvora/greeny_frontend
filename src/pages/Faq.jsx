import React from 'react'
import { imageConstant } from '../global/imageConstant';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Faq() {
    return (
        <div>
            <Navbar />
            <section className="inner-section single-banner" style={{ background: `url(${imageConstant.SINGLE_BANNER})`, backgroundPosition: "center", backgroundSize: "cover" }}>
                <div className="container">
                    <h2>faq questions</h2>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="/">Home</a></li>
                        <li className="breadcrumb-item active" aria-current="page">/ faq</li>
                    </ol>
                </div>
            </section>
            <section className="inner-section faq-part">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 mx-auto">
                            <div className="faq-parent">
                                <div className="faq-child">
                                    <div className="faq-que"><button>How to contact with Customer Service?</button></div>
                                    <div className="faq-ans">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellendus
                                            ducimus? Culpa tempore saepe fuga excepturi eius! Nulla quam, minus, id ipsa ad
                                            distinctio rem nihil voluptatem eaque quaerat recusandae?</p>
                                    </div>
                                </div>
                                <div className="faq-child">
                                    <div className="faq-que"><button>App installation failed, how to update system
                                        information?</button></div>
                                    <div className="faq-ans">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellendus
                                            ducimus? Culpa tempore saepe fuga excepturi eius! Nulla quam, minus, id ipsa ad
                                            distinctio rem nihil voluptatem eaque quaerat recusandae?</p>
                                    </div>
                                </div>
                                <div className="faq-child">
                                    <div className="faq-que"><button>Website reponse taking time, how to improve?</button></div>
                                    <div className="faq-ans">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellendus
                                            ducimus? Culpa tempore saepe fuga excepturi eius! Nulla quam, minus, id ipsa ad
                                            distinctio rem nihil voluptatem eaque quaerat recusandae?</p>
                                    </div>
                                </div>
                                <div className="faq-child">
                                    <div className="faq-que"><button>How do I create a account?</button></div>
                                    <div className="faq-ans">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellendus
                                            ducimus? Culpa tempore saepe fuga excepturi eius! Nulla quam, minus, id ipsa ad
                                            distinctio rem nihil voluptatem eaque quaerat recusandae?</p>
                                    </div>
                                </div>
                                <div className="faq-child">
                                    <div className="faq-que"><button>I cannot find an answer to my question!</button></div>
                                    <div className="faq-ans">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, repellendus
                                            ducimus? Culpa tempore saepe fuga excepturi eius! Nulla quam, minus, id ipsa ad
                                            distinctio rem nihil voluptatem eaque quaerat recusandae?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Faq