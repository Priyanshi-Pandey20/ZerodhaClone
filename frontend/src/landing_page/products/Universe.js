import React from "react";
import { useNavigate } from "react-router-dom";

function Universe() {
  const navigate = useNavigate();

  return (
    <div className="container mt-5">
      {/* Heading */}
      <div className="text-center mb-5">
        <h1>The Zerodha Universe</h1>
        <p className="text-muted mt-5">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* LOGOS GRID */}
      <div className="row text-center">
        <div className="col-md-4 mb-5">
          <div className="universe-logo">
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
            />
          </div>
          <span className="text-2 text-muted">
            Our asset management venture
            <br />
            that is creating simple and transparent index
            <br />
            funds to help you save for your goals
          </span>
        </div>

        <div className="col-md-4 mb-5">
          <div className="universe-logo">
            <img src="media/images/sensibullLogo.svg" alt="Sensibull" />
          </div>
          <span className="text-2 text-muted">
            Options trading platform that lets you
            <br />
            create strategies, analyze positions,
            <br />
            and examine data points like OI, FII/DII, and more.
          </span>
        </div>

        <div className="col-md-4 mb-5">
          <div className="universe-logo">
            <img src="media/images/tijori.svg" alt="Tijori" />
          </div>
          <span className="text-2 text-muted">
            Investment research platform
            <br />
            offering deep insights on stocks,
            <br />
            sectors, supply chains, and more
          </span>
        </div>

        <div className="col-md-4 mb-5">
          <div className="universe-logo">
            <img src="media/images/streakLogo.png" alt="Streak" />
          </div>
          <span className="text-2 text-muted">
            Systematic trading platform
            <br />
            to create and backtest strategies
            <br />
            without coding
          </span>
        </div>

        <div className="col-md-4 mb-5">
          <div className="universe-logo">
            <img src="media/images/smallcaseLogo.png" alt="Smallcase" />
          </div>
          <span className="text-2 text-muted">
            Thematic investing platform
            <br />
            to invest in diversified baskets
            <br />
            of stocks and ETFs
          </span>
        </div>

        <div className="col-md-4 mb-5">
          <div className="universe-logo">
            <img src="media/images/dittoLogo.png" alt="Ditto" />
          </div>
          <span className="text-2 text-muted">
            Personalized advice on life
            <br />
            and health insurance — no spam
            <br />
            and no mis-selling
          </span>
        </div>
      </div>

      {/* Button */}
      <div className="text-center">
        <button
          className="btn btn-primary px-4 py-2 fs-5 mt-3"
          onClick={() => navigate("/signup")}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
