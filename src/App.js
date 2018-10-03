import React, {Component} from 'react';
import './App.css';
import {StripeProvider} from "react-stripe-elements";
import Checkout from "./Checkout";
import Bootstrap from "./components/Form"

class App extends Component {

    render() {
        return (
            <div className="container">
                <Bootstrap/>
                {/*<StripeProvider apiKey="pk_test_LqCqBrL45H2muETuFyi5QKRH">*/}
                    {/*<Checkout/>*/}
                {/*</StripeProvider>*/}
            </div>
        );
    }
}

export default App;
