import React from "react";
import '../index.css';

// Helping page rendering
function Help() {
    return (
        <div>
            <h1 className="title"><u>About The Game</u></h1>
            <div className="paragraph">
                <p className="about">
                This is version of the classic letter guessing game called Hangman, 
                You are shown a set of blank letters that match a word or phrase and you have to guess what
                these letters are to reveal the hidden word. You guess by picking letters from those displayed 
                on the sides. If you pick a letter that is in the word and that letter is revealed 
                from the blank letters; however, if you pick a letter that is not in the word, then a stickman is 
                slowly drawn. With each wrong letter guess, the man is drawn more and more. When the man is finished,
                he is hung and the game is lost. This is why the game is called Hangman.
                </p>
                <p className="about">
                    There are 11 African country h names hidden in this game and you have to Guess the 
                    name of an African country to have a chance of winning 
                </p>
            </div>
            {/* the image I used comes from this site */}
            {/* https://11points.com/11-strategies-dominating-hangman/ */}
            <img src="https://11points.com/wp-content/uploads/2012/09/dominatehangman-1600-768x384.jpg" alt="hangman"/>
        </div>);
        
}

export default Help;
