import React, { useState } from "react";

function Team() {
  const [activeBio, setActiveBio] = useState(null);

  const toggleBio = (name) => {
    setActiveBio(activeBio === name ? null : name);
  };

  return (
    <div className="container">
      *
      <div className="row p-5 mt-5 border-top">
        <h1 className="text-center">People</h1>
      </div>
      <div
        className="row   text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        <div className="col-6 p-5 text-center">
          <img
            src="media/images/nithinKamath.jpg"
            style={{ borderRadius: "100%", width: "50%" }}
          />
          <h4 className="mt-5">Nithin Kamath</h4>
          <h6>Founder, CEO</h6>
        </div>
        <div className="col-6 p-5">
          <p>
            {" "}
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>
            <a href="" style={{ textDecoration: "none" }}>
              Connect on Homepage / TradingQnA / Twitter
            </a>
          </p>
        </div>
      </div>
      <div className="row p-5 border-top">
        <h1 className="text-center">Team</h1>
      </div>
      <div className="row text-center text-muted">
        {/* Nikhil */}
        <div className="col-md-4 p-4">
          <img
            src="media/images/nikhilKamath.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5 className="mt-4">Nikhil Kamath</h5>
          <p>Co-founder & CFO</p>
          <p style={{ cursor: "pointer",fontSize:"20px" }} onClick={() => toggleBio("nikhil")}>
            Bio {activeBio === "nikhil" ? "˄" : "˅"}
          </p>
          {activeBio === "nikhil" && (
            <p
              className="mt-3"
              style={{ fontSize: "18px", lineHeight: "1.8", margin: "15px" }}
            >
              Nikhil is an astute and <br />
              experienced investor, and he <br />
              heads financial planning at <br />
              Zerodha. An avid reader, he
              <br />
              always appreciates a good
              <br />
              game of chess.
            </p>
          )}
        </div>

        {/* Kailash */}
        <div className="col-md-4 p-4">
          <img
            src="media/images/kailashNadh.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5 className="mt-4">Dr. Kailash Nadh</h5>
          <p>CTO</p>
          <p style={{ cursor: "pointer", fontSize:"20px" }} onClick={() => toggleBio("kailash")}>
            Bio {activeBio === "kailash" ? "˄" : "˅"}
          </p>
          {activeBio === "kailash" && (
            <p
              className="mt-3"
              style={{ fontSize: "18px", lineHeight: "1.8", margin: "15px" }}
            >
              Kailash has a PhD in Artificial
              <br />
              Intelligence & Computational
              <br />
              Linguistics, and is the brain
              <br />
              behind all our technology and
              <br />
              products. He has been a <br />
              developer from his <br/>
              adolescence and continues to
              <br />
              write code every day.
            </p>
          )}
        </div>

        {/* Venu */}
        <div className="col-md-4 p-4">
          <img
            src="media/images/venuMadhav.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5 className="mt-4">Venu Madhav</h5>
          <p>COO</p>
          <p style={{ cursor: "pointer", fontSize:"20px" }} onClick={() => toggleBio("venu")}>
            Bio {activeBio === "venu" ? "˄" : "˅"}
          </p>
          {activeBio === "venu" && (
            <p
              className="mt-3"
              style={{ fontSize: "18px", lineHeight: "1.8", margin: "15px" }}
            >
              Venu is the backbone of
              <br />
              Zerodha taking care of <br />
              operations and ensuring that
              <br />
              we are compliant to rules and
              <br />
              regulations. He has over a <br />
              dozen certifications in financial <br />
              markets and is also proficient <br />
              in technical analysis.
              <br />
              Workouts, cycling, and
              <br />
              adventuring is what he does
              <br />
              outside of Zerodha.
            </p>
          )}
        </div>

        {/* Hanan */}
        <div className="col-md-4 p-4">
          <img
            src="media/images/hananDelvi.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5 className="mt-4">Hanan Delvi</h5>
          <p>CCO</p>
          <p style={{ cursor: "pointer", fontSize:"20px" }} onClick={() => toggleBio("hanan")}>
            Bio {activeBio === "hanan" ? "˄" : "˅"}
          </p>
          {activeBio === "hanan" && (
            <p
              className="mt-3"
              style={{ fontSize: "18px", lineHeight: "1.8", margin: "15px" }}
            >
              We take pride in the way we
              <br />
              support our clients, and Hanan
              <br />
              is responsible for this with his <br />
              never ending flow of energy. <br />
              He is the man behind many of <br />
              our support initiatives that
              <br />
              have helped us stay ahead of <br />
              the game. A free thinker,
              <br />
              Hanan can be seen posing as
              <br />
              one in his free time.
            </p>
          )}
        </div>

        {/* Seema */}
        <div className="col-md-4 p-4">
          <img
            src="media/images/seemaPatil.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5 className="mt-4">Seema Patil</h5>
          <p>Director</p>
          <p style={{ cursor: "pointer", fontSize:"20px" }} onClick={() => toggleBio("seema")}>
            Bio {activeBio === "seema" ? "˄" : "˅"}
          </p>
          {activeBio === "seema" && (
            <p
              className="mt-3"
              style={{ fontSize: "18px", lineHeight: "1.8", margin: "15px" }}
            >
              Seema who has lead the
              <br />
              quality team since the <br />
              beginning of Zerodha,
              <br />
              is now a 
               director. She is an extremely
              <br />
              disciplined fitness enthusiast.
            </p>
          )}
        </div>

        {/* Karthik */}
        <div className="col-md-4 p-4">
          <img
            src="media/images/karthikRangappa.jpg"
            style={{ borderRadius: "100%", width: "70%" }}
          />
          <h5 className="mt-4">Karthik Rangappa</h5>
          <p>Chief of Education</p>
          <p style={{ cursor: "pointer", fontSize:"20px" }} onClick={() => toggleBio("karthik")}>
            Bio {activeBio === "karthik" ? "˄" : "˅"}
          </p>
          {activeBio === "karthik" && (
            <p
              className="mt-3"
              style={{ fontSize: "18px", lineHeight: "1.8", margin: "15px" }}
            >
              Karthik "Guru" Rangappa<br/>
               single handledly wrote Varsity,<br/>
                Zerodha's
              massive educational<br/>
               program. He heads investor<br/>
                education
              initiatives at Zerodha<br/>
               and loves stock markets,<br/>
                classic rock,
              single malts,<br/>
               and photography.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Team;
