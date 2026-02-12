export default function Footer() {
  return (
    <footer>
      <div className="bg-primary py-15 pt-10 pb-25 px-15 flex flex-col md:flex-row items-centerjustify-center items-center md:justify-between">
        <div className="flex flex-col md:flex-col gap-5">
          <h3 className="flex flex-col md:flex-col text-2xl md:text-4xl">
            Lilac Template
          </h3>
          <p>
            123 Example Road <br />
            Minneapolis, MN
          </p>
          <p className="footer-link">
            email@example.com <br />
            (555) 555-5555
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-70">
          <div>
            <h3>Hours</h3>
            <p className="py-5">
              Monday – Friday <br />
              10am – 6pm
            </p>
          </div>
          <div>
            <h3>Find</h3>
            <p className="py-5 footer-link">
              Home <br />
              Contact <br />
              Blog
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="py-10 bg-secondary">
        <div className="max-w-7xl mx-auto px-2 text-center">
          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-2">
            <p className="footer-link font-normal text-black">
              Privacy & Cookies Policy
            </p>
            <p className="footer-link font-normal text-black">
              Good Faith Estimate
            </p>
            <p className="footer-link font-normal text-black">
              Website Terms & Conditions
            </p>
            <p className="footer-link font-normal text-black">Disclaimer</p>
          </div>

          {/* Credits */}
          <p className="font-normal text-black pt-4">
            Website Template Credits:{' '}
            <span className="footer-link">Go Bloom Creative</span>
          </p>
          <br />

          {/* Copyright */}
          <p className="pt-8 font-normal text-black">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </p>
        </div>
      </div>
    </footer>
  );
}
