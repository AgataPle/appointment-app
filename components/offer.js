import React, {Component} from 'react';

export default class Offer extends Component {
    render() {
        return (
            <div className="container">
                <div className=" container-1">
                    <div className="type ortodontics">
                        <a href="#" className="offer-name">Ortodoncja</a>
                    </div>
                    <div className="type stomatology">
                        <a href="#" className="offer-name">Stomatologia</a>
                    </div>
                </div>
                <div className=" container-2">
                    <div className="type radiology">
                        <a href="#" className="offer-name">Pracownia Radiologiczna</a>
                    </div>
                    <div className="type protetics">
                        <a href="#" className="offer-name">Protetyka</a>
                    </div>
                </div>


            </div>
        )
    }
}
