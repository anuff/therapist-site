export default function Footer() {
  return (
    <footer>
      <div className="bg-secondary py-15 pt-10 md:pt-10 pb-10 px-15 flex flex-col md:flex-row items-centerjustify-center items-center md:justify-between">
        <div className="flex flex-col md:flex-col gap-5">
          <h3 className="flex flex-col md:flex-col">Lilac Template</h3>
          <p>
            123 Example Road <br />
            Minneapolis, MN
          </p>
          <p className="footer-link pb-10 ">
            email@example.com <br />
            (555) 555-5555
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-70 md:pb-25">
          <div>
            <h3>Hours</h3>
            <p className="pt-5">
              Monday – Friday <br />
              10am – 6pm
            </p>
          </div>
          <div>
            <h3>Find</h3>
            <p className="py-t footer-link">
              Home <br />
              Contact <br />
              Blog
            </p>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="py-10 bg-primary">
        <div className="max-w-7xl mx-auto px-2 text-center">
          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-2">
            <text className="footer-link font-normal text-black">
              Privacy & Cookies Policy
            </text>
            <text className="footer-link font-normal text-black">
              Good Faith Estimate
            </text>
            <text className="footer-link font-normal text-black">
              Website Terms & Conditions
            </text>
            <text className="footer-link font-normal text-black">
              Disclaimer
            </text>
          </div>

          {/* Credits */}
          <p className=" text-sm text-[16px] font-normal text-black pt-4">
            Website Template Credits:{' '}
            <span className="footer-link">Go Bloom Creative</span>
          </p>
          <br />

          {/* Copyright */}
          <text className="pt-8 font-normal text-black">
            All Rights Reserved © 2024 Your Business Name Here, LLC.
          </text>
        </div>
      </div>
    </footer>
  );
}
