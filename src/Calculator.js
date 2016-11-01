import React, {Component} from 'react';
import './App.css';

class Calculator extends Component {
    constructor(props) {
        super(props)

        this.state = {
            sum: 0,
            difference: 0,
            product: 0,
            quotient: 0
        }
    }
    
    add() {
        var add1 = this.refs.add1.value
        var add2 = this.refs.add2.value
        this.setState({sum :+ add1 + + add2});
    }

    subtract() {
        var subtract1 = this.refs.subtract1.value
        var subtract2 = this.refs.subtract2.value
        this.setState({difference: + subtract1 - + subtract2})
    }

    multiply() {
        var multiply1 = this.refs.multiply1.value
        var multiply2 = this.refs.multiply2.value
        this.setState({product: + multiply1 * + multiply2})
    }

    divide() {
        var divide1 = this.refs.divide1.value
        var divide2 = this.refs.divide2.value
        var quotient = +divide1 / + divide2;
        this.setState({quotient: quotient})
    }

    render() {
        return (
            <div className="container">
                <h3>Add</h3>

                <div className="add">
                    <input type="text" ref="add1" onChange={() => this.add()}/>
                    <span>
                        +
                    </span>
                    <input type="text" ref="add2" onChange={() => this.add()}/>
                    <span>
                        =
                    </span>
                    <span>
                        {this.state.sum}
                    </span>
                </div>
                <h3>Subtract</h3>

                <div className="subtract">
                    <input type="text" ref="subtract1" onChange={() => this.subtract()}/>
                    <span>
                        -
                    </span>
                    <input type="text" ref="subtract2" onChange={() => this.subtract()}/>
                    <span>
                        =
                    </span>
                    <span>
                        {this.state.difference}
                    </span>
                </div>

                <h3>Multiply</h3>

                <div className="multiply">
                    <input type="text" ref="multiply1" onChange={() => this.multiply()}/>
                    <span>
                        *
                    </span>
                    <input type="text" ref="multiply2" onChange={() => this.multiply()}/>
                    <span>
                        =
                    </span>
                    <span>
                        {this.state.product}
                    </span>
                </div>

                <h3>Divide</h3>

                <div className="divide">
                    <input type="text" ref="divide1" onChange={() => this.divide()}/>
                    <span>
                        /
                    </span>
                    <input type="text" ref="divide2" onChange={() => this.divide()}/>
                    <span>
                        =
                    </span>
                    <span>
                        {this.state.quotient}
                    </span>
                </div>
            </div>
        )
    };
}

export default Calculator;
