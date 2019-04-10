import React, {Component} from "react";
import App from "../App";
import { Link } from 'react-router';

class SelectedDestination extends Component {



    render() {

        const handleHome = ()=>{
            window.open('./home.jsx');
        }

        return (
            <React.Fragment>
                <center><h1>Temple of Tooth Relic, Kandy</h1></center>
                <div align='right'>
                    <button className={'btn btn-sm m-2 btn-light'} onClick={handleHome}>Home</button>
                    <button className={'btn btn-sm m-2 btn-light'}>About Us</button>
                    <button className={'btn btn-sm m-2 btn-light'}>Contact Us</button>
                    <button className={'btn btn-sm m-2 btn-light'}>FAQ</button>
                </div>
                <div>
                    <img
                        src={'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Zahntempel_Kandy.jpg/640px-Zahntempel_Kandy.jpg'}
                        height='200' width='400' className={'image-fluid m-2'} alt='Temple of Tooth Relic'/>
                </div>

                <blockquote className="blockquote text-left m-2">
                    <p className="mb-0">Temple of the Sacred Tooth Relic, situated at the heart of Kandy is the most
                        devoted place of Buddhists.
                        It also is one of the biggest tourist attractions in Sri Lanka. This sacred temple houses the
                        tooth relic of Lord
                        Buddha. A place with blend of historical importance and spirituality. So, step out and
                        experience the spiritual
                        Dalada Maligawa.</p>
                </blockquote>
                <br/>
                <p className={'lead m-2'} color='#17a2b8'>Things to note when visiting The Temple of the Sacred Tooth
                    Relic</p>
                <ul className={'un-styled'}>
                    <li>It is advised to wear white decent clothing when visiting the temple.</li>
                    <li>Rituals are performed three times a day: daily. Dawn, noon and evening.</li>
                    <li>On Wednesdays, a symbolic bathing of the tooth relic is done.</li>
                    <li>You can travel to Kandy from Colombo through train, this is a very cheap yet comfortable mode to
                        travel
                        <ul>Trains are available from 5 a.m. to 5.45 p.m</ul>
                    </li>
                    <li>Peak season: July-August is the best time to be in Kandy because the Esala Perahera or the
                        processions is held.
                    </li>
                    <li>Always feel free to have a walk around the Kandy Lake</li>
                    <li>Getting to your destination early will be more convenient, because the Kandy Traffic can make a
                        hectic day.
                    </li>
                </ul>

                <div>
                    <p className={'text-primary m-2 display-4'}>Make sure you visit the following places in the Temple of the Sacred Tooth Relic</p>
                    <ul className={'un-styled'}>
                        <li>Octagon(Paththirippuwa)</li>
                        <li>Handun Kunama</li>
                        <li>Golden Canopy</li>
                        <li>Temple of the Tooth Relic Museum</li>
                    </ul>
                </div>

                <div>
                    <h1 className="display-4 text-primary m-2">Nearby Places</h1>
                    <div class="row">
                        <div class ="column">
                            <div class="container">
                                <img
                                    src={'https://i.ytimg.com/vi/XifptbD1MH8/maxresdefault.jpg'}
                                    height='200' width='400' className={'image-fluid m-2'} alt='Temple of Tooth Relic'/>
                                <div className="centered m-2">Temple of Tooth Relic</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="container">
                                <img
                                    src={'data:image/jpeg;base64,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'}
                                    height='200' width='400' className={'image-fluid m-2'} alt='Kandy Lake'/>
                                <div className="centered m-2">Kandy Lake</div>
                            </div>
                        </div>
                        <div className="column">
                            <div className="container">
                                <img src={'https://t-ec.bstatic.com/images/hotel/max1024x768/677/67792454.jpg'}
                                    height='200' width='400' className={'image-fluid m-2'} alt='Queens Hotel'
                                    />
                                <div className="centered m-2">Queens Hotel</div>
                            </div>
                        </div>
                    </div>
                </div>

                <main className="container">

                </main>

            </React.Fragment>
        );
    }
}
export default SelectedDestination;

