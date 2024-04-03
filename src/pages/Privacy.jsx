import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Privacy() {
    return (
        <>
            <Navbar />
            <section className="inner-section privacy-part mt-14">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <nav className="nav nav-pills flex-column" id="scrollspy">
                                <a className="nav-link" href="#item-1">How to contact with Customer Service?</a>
                                <a className="nav-link" href="#item-2">App installation failed, how to update system information?</a>
                                <a className="nav-link" href="#item-3">Website reponse taking time, how to improve?</a>
                                <a className="nav-link" href="#item-4">How do I create a account?</a>
                                <a className="nav-link" href="#item-5">I cannot find an answer to my question!</a>
                            </nav>
                        </div>
                        <div className="col-lg-9">
                            <div data-bs-spy="scroll" data-bs-target="#scrollspy" data-bs-offset={0} tabIndex={0}>
                                <div className="scrollspy-content" id="item-1">
                                    <h3>How to contact with Customer Service?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officia expedita beatae tempore facilis ex maiores, assumenda nostrum minus. Autem nemo corrupti consequuntur incidunt quibusdam dicta. Quasi atque deserunt totam hic voluptatibus veritatis. Ducimus dicta esse praesentium tenetur obcaecati reprehenderit, recusandae ab explicabo maxime deserunt mollitia. Aliquid distinctio tenetur dolore!</p>
                                </div>
                                <div className="scrollspy-content" id="item-2">
                                    <h3>App installation failed, how to update system information?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officia expedita beatae tempore facilis ex maiores, assumenda nostrum minus. Autem nemo corrupti consequuntur incidunt quibusdam dicta. Quasi atque deserunt totam hic voluptatibus veritatis. Ducimus dicta esse praesentium tenetur obcaecati reprehenderit, recusandae ab explicabo maxime deserunt mollitia. Aliquid distinctio tenetur dolore!</p>
                                </div>
                                <div className="scrollspy-content" id="item-3">
                                    <h3>Website reponse taking time, how to improve?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officia expedita beatae tempore facilis ex maiores, assumenda nostrum minus. Autem nemo corrupti consequuntur incidunt quibusdam dicta. Quasi atque deserunt totam hic voluptatibus veritatis. Ducimus dicta esse praesentium tenetur obcaecati reprehenderit, recusandae ab explicabo maxime deserunt mollitia. Aliquid distinctio tenetur dolore!</p>
                                </div>
                                <div className="scrollspy-content" id="item-4">
                                    <h3>How do I create a account?</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officia expedita beatae tempore facilis ex maiores, assumenda nostrum minus. Autem nemo corrupti consequuntur incidunt quibusdam dicta. Quasi atque deserunt totam hic voluptatibus veritatis. Ducimus dicta esse praesentium tenetur obcaecati reprehenderit, recusandae ab explicabo maxime deserunt mollitia. Aliquid distinctio tenetur dolore!</p>
                                </div>
                                <div className="scrollspy-content" id="item-5">
                                    <h3>I cannot find an answer to my question!</h3>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam officia expedita beatae tempore facilis ex maiores, assumenda nostrum minus. Autem nemo corrupti consequuntur incidunt quibusdam dicta. Quasi atque deserunt totam hic voluptatibus veritatis. Ducimus dicta esse praesentium tenetur obcaecati reprehenderit, recusandae ab explicabo maxime deserunt mollitia. Aliquid distinctio tenetur dolore!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default Privacy