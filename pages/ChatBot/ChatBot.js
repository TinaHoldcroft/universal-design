import Head from 'next/head';
import React, { useState, useEffect } from 'react';

export default function ChatDemo() {

  const handleToggle = () => { setActive(!isActive); };
  const [isActive, setActive] = useState("false");
  const [isLoading, setLoaded] = useState("false");
  const [isLoading2, setLoaded2] = useState("false");

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(!isLoading), 4000);
    const timer2 = setTimeout(() => setLoaded2(!isLoading2), 6000);
    return () => clearTimeout(timer + timer2);
  }, []);

  const Loader = (
    <div className={isLoading ? "message-loader" : "message-loader margin"}>
      <div className="one"></div>
      <div className="two"></div>
      <div className="three"></div>
    </div>
  )


  function handleSubmit(e) {
    e.preventDefault();
    const data = e.target.message.value;
    console.log(data)
  }

  return (
    <>
      <Head>
        <title>ChatBot</title>
      </Head>

      <div className="chatbot-page">
        <div>
          <picture className="chatbot" onClick={handleToggle}>
            <img src="chatrobot.svg" alt="" />
            <figcaption>
              {isLoading ? Loader : <span>Fant du det du lette etter?<br /></span>}
              {isLoading2 ? Loader : <span>Klikk her for hjelp<br /></span>}
            </figcaption>
          </picture>
        </div>
        <section className={isActive ? "chat-window --close" : "chat-window --open"}>
          <button id="close" onClick={handleToggle}>&times;</button>
          <div className="left">
            <img src="/favicon.svg" alt="" />
            <p>Lorem ipsum dolor sit amet</p>
          </div>

          <div className="right">
            <p id="posts">[message]</p>
          </div>

          <form id='chatSubmit' onSubmit={handleSubmit}>
            <textarea name="message" type="text" placeholder="Skiv melding..." ></textarea>
            <div>
              <button type="reset">Reset</button>
              <button type="submit">Send</button>
            </div>
          </form>
        </section>
      </div>
    </>
  )
}