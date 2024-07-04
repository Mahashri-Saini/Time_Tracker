import React from 'react';
import {useState, useEffect} from 'react';

function Quote()
{   const [quote, setQuote]=useState("");
    const[writer, setWriter] =useState("");

    const quotes = [
        {
          quote: `"You only live once, but if you do it right, once is enough."`,
          writer: `– Mae West`,
        },
        {
          quote: `"If you want to live a happy life, tie it to a goal, not to people or things."`,
          writer: `– Albert Einstein`,
        },
        {
          quote: `"Never let the fear of striking out keep you from playing the game."`,
          writer: `– Babe Ruth`,
        },
        {
          quote: `"Your time is limited, so don’t waste it living someone else’s life."`,
          writer: `– Steve Jobs`,
        },
        {
          quote: `"In order to write about life first you must live it."`,
          writer: `– Ernest Hemingway`,
        },
        {
          quote: `"Life is not a problem to be solved, but a reality to be experienced."`,
          writer: `– Soren Kierkegaard`,
        },
        {
          quote: `"The unexamined life is not worth living."`,
          writer: `– Socrates`,
        },
        {
          quote: `"Turn your wounds into wisdom."`,
          writer: `– Oprah Winfrey`,
        },
        {
          quote: `"The purpose of our lives is to be happy."`,
          writer: `- Dalai Lama`,
        },
        {
          quote: `"Live for each second without hesitation."`,
          writer: `- Elton John`,
        },
      ];

      useEffect(()=>{                         
        let random = Math.floor(Math.random() * quotes.length);

  setQuote(quotes[random].quote)
  setWriter(quotes[random].writer);
        });




    return(
        <div> 
             <p className=" relative m-10 text-4xl p-4 rounded-lg border-4 border-double border-[#801336] w-[70%]">{quote} </p>
        </div>
    )
}

export default Quote