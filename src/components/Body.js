import React  from "react-dom";
import { Component } from "react";
import '../index.css'; 
import { randomWords } from "./Words";

// importing images for the hangman game
import pic1 from "../images/state1.GIF";
import pic2 from "../images/state2.GIF";
import pic3 from "../images/state3.GIF";
import pic4 from "../images/state4.GIF";
import pic5 from "../images/state5.GIF";
import pic6 from "../images/state6.GIF";
import pic7 from "../images/state7.GIF";
import pic8 from "../images/state8.GIF";
import pic9 from "../images/state9.GIF";
import pic10 from "../images/state10.gif";
import pic11 from "../images/state11.GIF"; 


class Body extends Component{
    constructor(props){
        super(props)

        // State variables to be used
        this.state = {
            guess: new Set([]),
            words: randomWords(),
            tried: 0,
            alphabets: 
            ["a","b","c","d","e","f","g","h","i","j","k","l","m",
                "n","o","p","q","r","s","t","u","v","w","x","y","z"
            ],
        }
        this.reset = this.reset.bind(this);
        this.handleGuess = this.handleGuess.bind(this);
    }
    
    // images and the amount of time a user can be wrong
   static defaultProps = {
        images: [pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8,pic9,pic10,pic11],
        wrong: 11
    }

    reset = () => {
        this.setState({
            guess : new Set([]),
            tried: 0,
            words: randomWords()
        })
    }

    // Making the random words appear in underscore
    guessedWord = () => {
        return this.state.words.split("").map((letter) => (
            this.state.guess.has(letter) ? letter : " _ "
        ));
    }

    // getting the values of each alphabet button when clicked
    // If the wrong alphabet is click the number of tried guess increases
    handleGuess = (e) => {
        this.setState(value => ({
            guess: value.guess.add(e.target.value),
            tried: value.tried + (value.words.includes(e.target.value) ? 0: 1)
        }));
    }

    render(){
        // variable to check if its a win or lost
        const lost = this.state.tried >= this.props.wrong;
        const won = this.guessedWord().join("") === this.state.words; 

        // Alerting the user if they've won or lost
        if(lost){
            alert("you lost");
        }else if(won){
            alert("you won");
        }

        return (
            <div>
                <p className="message">Please guess an African country</p>
                <div className="images">
                    <img src={this.props.images[this.state.tried]} alt="" width={250}/>
                </div>
                <p className="tried">You tired: {this.state.tried} of {this.props.wrong}</p>
                <div>
                    <p className="split">{!lost ? this.guessedWord() : this.state.words}</p>
                </div>
                {this.state.alphabets.map((letter) => {
                    // rendering the alphabet button with a key of they index value
                    return (
                        <div key={this.state.alphabets.indexOf(letter)}>
                            <button 
                                className="keypads" 
                                value={letter} 
                                onClick={this.handleGuess}
                                disabled={this.state.guess.has(letter)}
                                >{letter}
                            </button>
                        </div>
                    )
                })}
                <button onClick={this.reset} className="reset">Reset</button>
                <br/>
            </div>
        )
    }

}

export default Body 