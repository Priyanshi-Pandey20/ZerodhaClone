import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaWhatsapp,
  FaTelegramPlane,
} from "react-icons/fa";

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(250,250,250)" }}>
      <div className="container border-top mt-5">
        <div className="row mt-5">
          <div className="col text-muted ">
            <img src="media/images/logo.svg" style={{ width: "50%" }} />
            <p className="footer-copyright">
              &copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.
            </p>
            <div className="d-flex gap-3 footer-social">
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaFacebookF />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedinIn />
              </a>
            </div>

            {/* Divider */}
            <hr className="footer-divider" />

            {/* Row 2 */}
            <div className="d-flex gap-3 footer-social">
              <a href="#">
                <FaYoutube />
              </a>
              <a href="#">
                <FaWhatsapp />
              </a>
              <a href="#">
                <FaTelegramPlane />
              </a>
            </div>
          </div>
          <div className="col">
            <h5 className="text-muted mb-4">Company</h5>
            <a href="" className="footer-link d-block ">
              About
            </a>

            <a href="" className="footer-link d-block">
              {" "}
              Philosophy
            </a>

            <a href="" className="footer-link d-block">
              {" "}
              Press & media
            </a>

            <a href="" className="footer-link d-block">
              Careers
            </a>

            <a href="" className="footer-link d-block">
              Zerodha Cares (CSR)
            </a>

            <a href="" className="footer-link d-block">
              Zerodha.tech
            </a>

            <a href="" className="footer-link d-block">
              Open source
            </a>
          </div>
          <div className="col">
            <h5 className="text-muted mb-4">Support</h5>
            <a href="" className="footer-link d-block">
              Contact us
            </a>

            <a href="" className="footer-link d-block">
              Support portal
            </a>

            <a href="" className="footer-link d-block">
              {" "}
              How to file a complaint?
            </a>

            <a href="" className="footer-link d-block">
              Status of your complaints
            </a>

            <a href="" className="footer-link d-block">
              Bulletin
            </a>

            <a href="" className="footer-link d-block">
              Circular
            </a>

            <a href="" className="footer-link d-block">
              Z-Connect blog
            </a>

            <a href="" className="footer-link d-block">
              Downloads{" "}
            </a>
          </div>
          <div className="col">
            <h5 className="text-muted mb-4">Account</h5>
            <a href="" className="footer-link d-block">
              Open demat account
            </a>

            <a href="" className="footer-link d-block">
              Minor demat account
            </a>

            <a href="" className="footer-link d-block">
              {" "}
              NRI demat account
            </a>

            <a href="" className="footer-link d-block">
              Commodity
            </a>

            <a href="" className="footer-link d-block">
              Dematerialisation
            </a>

            <a href="" className="footer-link d-block">
              Fund transfer
            </a>

            <a href="" className="footer-link d-block">
              MTF
            </a>

            <a href="" className="footer-link d-block">
              Referral program{" "}
            </a>
          </div>
          <div className="col">
            <h5 className="text-muted mb-4">Quick links</h5>
            <a href="" className="footer-link d-block">
              Upcoming IPOs
            </a>

            <a href="" className="footer-link d-block">
              Brokerage charges
            </a>

            <a href="" className="footer-link d-block">
              {" "}
              Market holidays
            </a>

            <a href="" className="footer-link d-block">
              Economic calendar
            </a>

            <a href="" className="footer-link d-block">
              Calculators
            </a>

            <a href="" className="footer-link d-block">
              Markets
            </a>

            <a href="" className="footer-link d-block">
              Sectors
            </a>
          </div>
        </div>
        <div className="mt-5 text-muted" style={{ fontSize: "12px" , fontWeight:"500" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
            no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
            Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered
            Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony,
            Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru -
            560078, Karnataka, India. For any complaints pertaining to
            securities broking please write to
            <a
              href=""
              className="text-decoration-none "
              style={{ color: "#387ed1" , fontWeight:"500" }}
            >
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a
              href=""
              className="text-decoration-none"
              style={{ color: "#387ed1" , fontWeight:"500" }}
            >
              dp@zerodha.com.
            </a>{" "}
            Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on{" "}
            <a
              href=""
              className="text-decoration-none"
              style={{ color: "#387ed1" , fontWeight:"500" }}
            >
              SEBI SCORES:
            </a>{" "}
            Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            <a
              href=""
              className="text-decoration-none"
              style={{ color: "#387ed1", fontWeight:"500" }}
            >
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: Stock brokers can accept securities as margins
            from clients only by way of pledge in the depository system w.e.f
            September 01, 2020. Update your e-mail and phone number with your
            stock broker / depository participant and receive OTP directly from
            depository on your e-mail and/or mobile number to create pledge.
            Check your securities / MF / bonds in the consolidated account
            statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a
              href=""
              className="text-decoration-none"
              style={{ color: "#387ed1" , fontWeight:"500" }}
            >
              NSE broker factsheet
            </a>
          </p>
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services, please{" "}
            <a
              href=""
              className="text-decoration-none"
              style={{ color: "#387ed1" , fontWeight:"500" }}
            >
              create a ticket here.
            </a>
          </p>
          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
        </div>
        <div className="container mt-4 mb-3">
          <div
            className="d-flex flex-wrap gap-4 hover-capacity justify-content-center text-muted "
            style={{
              fontSize: "15px",
              fontWeight: "400px",
              letterSpacing: "0.2px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif',
            }}
          >
            <div className="footer-bottom-links">
              <a href="" className="text-muted text-decoration-none">
                NSE
              </a>
              <a href="" className="text-muted text-decoration-none">
                BSE
              </a>
              <a href="" className="text-muted text-decoration-none">
                MCX
              </a>
              <a href="" className="text-muted text-decoration-none">
                Terms & conditions
              </a>
              <a href="" className="text-muted text-decoration-none">
                Policies & procedures
              </a>
              <a href="" className="text-muted text-decoration-none">
                Privacy policy
              </a>
              <a href="" className="text-muted text-decoration-none">
                Disclosure
              </a>
              <a href="" className="text-muted text-decoration-none">
                For investor's attention
              </a>
              <a href="" className="text-muted text-decoration-none">
                Investor charter
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
