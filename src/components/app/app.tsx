import * as React from 'react';
import '../../App.css';
import Header from "../header/header";
import Description from "../description/description";
import HomePage from "../../pages/home-page/home-page";

class App extends React.Component {
    public render() {
        return (
            <div >
                <header >
                    <Header name="React" />
                </header>
                <Description countBy={1} />
                <HomePage />
            </div>
        );
    }
}

export default App;
