import React, {Component} from 'react';
import Data from '../data/data';

export default class Schedule extends Component {
    constructor() {
        super()
        this.state = {
            isHidden: true
        }
    }

    toggleHidden() {
        this.setState({
            isHidden: !this.state.isHidden
        })

    }

    render() {


        return (
            <>
                <h2 className="schedule-title">Harmonogram zajęć</h2>
                <button className="showDesc" onClick={this.toggleHidden.bind(this)}>Pokaż opisy zajęć</button>
                <div>{!this.state.isHidden && <Child1/>}</div>
                <div>{!this.state.isHidden && <Child2/>}</div>
                <div>{!this.state.isHidden && <Child3/>}</div>
                <div>{!this.state.isHidden && <Child4/>}</div>
                <div>{!this.state.isHidden && <Child5/>}</div>
                <div>{!this.state.isHidden && <Child6/>}</div>
                <div>{!this.state.isHidden && <Child7/>}</div>
                <div className="schedule">

                    <table responsive className="harmo">
                        <thead>
                        <tr>
                            <th className="days"></th>
                            <th>Poniedziałek</th>
                            <th>Wtorek</th>
                            <th>Środa</th>
                            <th>Czwartek</th>
                            <th>Piątek</th>
                            <th>Sobota</th>
                            <th>Niedziela</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td className="hours">08:00-10:00</td>
                            <td className="classes class1 class-description">Zajęcia 1
                            </td>
                            <td className="classes class3 proba">Zajęcia 3


                            </td>
                            <td className="classes class2 class-description">Zajęcia 2</td>
                            <td className="classes class6 class-description">Zajęcia 6</td>
                            <td className="classes class5 class-description">Zajęcia 5</td>
                            <td className="classes class4 class-description">Zajęcia 4</td>
                            <td className="classes class7 class-description">Zajęcia 7</td>
                        </tr>
                        <tr>
                            <td className="hours">10:00-12:00</td>
                            <td className="classes class7 class-description proba">Zajęcia 7


                            </td>
                            <td className="classes class1 class-description">Zajęcia 1</td>
                            <td className="classes class2 class-description">Zajęcia 2</td>
                            <td className="classes class3 class-description">Zajęcia 3</td>
                            <td className="classes class4 class-description">Zajęcia 4</td>
                            <td className="classes class5 class-description">Zajęcia 5</td>
                            <td className="classes class6 class-description proba">Zajęcia 6

                            </td>

                        </tr>
                        <tr>

                            <td className="hours">12:00-14:00</td>
                            <td className="classes class5 class-description">Zajęcia 5</td>
                            <td className="classes class3 class-description">Zajęcia 3</td>
                            <td className="classes class4 class-description proba">Zajęcia 4


                            </td>
                            <td className="classes class6 class-description">Zajęcia 6</td>
                            <td className="classes class1 class-description">Zajęcia 1</td>
                            <td className="classes class7 class-description">Zajęcia 7</td>
                            <td className="classes class2 class-description">Zajęcia 2</td>
                        </tr>
                        <tr>
                            <td className="hours">14:00-16:00</td>
                            <td className="classes class1 class-description">Zajęcia 1</td>
                            <td className="classes class2 class-description proba">Zajęcia 2


                            </td>
                            <td className="classes class3 class-description">Zajęcia 3</td>
                            <td className="classes class4 class-description">Zajęcia 4</td>
                            <td className="classes class7 class-description">Zajęcia 7</td>
                            <td className="classes class5 class-description">Zajęcia 5</td>
                            <td className="classes class6 class-description">Zajęcia 6</td>

                        </tr>
                        <tr>
                            <td className="hours">16:00-18:00</td>
                            <td className="classes class5 class-description">Zajęcia 5</td>
                            <td className="classes class1 class-description">Zajęcia 1</td>
                            <td className="classes class4 class-description">Zajęcia 4</td>
                            <td className="classes class6 class-description">Zajęcia 6</td>
                            <td className="classes class3 class-description">Zajęcia 3</td>
                            <td className="classes class7 class-description">Zajęcia 7</td>
                            <td className="classes class2 class-description">Zajęcia 2</td>

                        </tr>
                        <tr>
                            <td className="hours">18:00-20:00</td>
                            <td className="classes class2 class-description">Zajęcia 2</td>
                            <td className="classes class1 class-description">Zajęcia 1</td>
                            <td className="classes class3 class-description">Zajęcia 3</td>
                            <td className="classes class5 class-description">Zajęcia 5</td>
                            <td className="classes class4 class-description">Zajęcia 4</td>
                            <td className="classes class6 class-description">Zajęcia 6</td>
                            <td className="classes class7 class-description">Zajęcia 7</td>
                        </tr>
                        <tr>
                            <td className="hours">20:00-22:00</td>
                            <td className="classes class2 class-description proba">Zajęcia 2


                            </td>
                            <td className="classes class7 class-description">Zajęcia 7</td>
                            <td className="classes class4 class-description proba">Zajęcia 4


                            </td>
                            <td className="classes class3 class-description">Zajęcia 3


                            </td>
                            <td className="classes class6 class-description proba">Zajęcia 6


                            </td>
                            <td className="classes class5 class-description">Zajęcia 5</td>
                            <td className="classes class1 class-description">Zajęcia 1</td>

                        </tr>
                        </tbody>
                    </table>
                </div>

            </>
        )
    }
}

const Child3 = () => (
    <p>Zajęcia 3Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aspernatur beatae debitis
        deleniti
        deserunt dolore dolorum, id in ipsa neque nostrum quia quibusdam quis sapiente sequi soluta voluptas!</p>
);
const Child7 = () => (
    <p>Zajęcia 7Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aspernatur beatae debitis
        deleniti
        deserunt dolore dolorum, id in ipsa neque nostrum quia quibusdam quis sapiente sequi soluta voluptas!</p>
);
const Child4 = () => (
    <p>Zajęcia 4Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aspernatur beatae debitis
        deleniti
        deserunt dolore dolorum, id in ipsa neque nostrum quia quibusdam quis sapiente sequi soluta voluptas!</p>
);
const Child2 = () => (
    <p>Zajęcia 2Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aspernatur beatae debitis
        deleniti
        deserunt dolore dolorum, id in ipsa neque nostrum quia quibusdam quis sapiente sequi soluta voluptas!</p>
);
const Child6 = () => (
    <p>Zajęcia 6Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aspernatur beatae debitis
        deleniti
        deserunt dolore dolorum, id in ipsa neque nostrum quia quibusdam quis sapiente sequi soluta voluptas!</p>
);
const Child1 = () => (
    <p>Zajęcia 1Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aspernatur beatae debitis
        deleniti
        deserunt dolore dolorum, id in ipsa neque nostrum quia quibusdam quis sapiente sequi soluta voluptas!</p>
);

const Child5 = () => (
    <p>Zajęcia 5Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci aliquam aspernatur beatae debitis
        deleniti
        deserunt dolore dolorum, id in ipsa neque nostrum quia quibusdam quis sapiente sequi soluta voluptas!</p>
);
