export default function Footer() {
  return (
    <footer>
      <div className="bg-secondary py-15 pt-10 md:pt-10 pb-10 px-15 flex flex-col md:flex-row items-centerjustify-center items-center md:justify-between">
        <div className="flex flex-col items-center md:flex-col md:items-start gap-5">
          <h3 className="flex flex-col md:flex-col font-semibold">Office</h3>
          <p className=" text-center md:text-start">
            123th Street 45 W, <br />
            Santa Monica, CA 90401
          </p>
          <p className="footer-link pb-10 text-center md:text-start">
            maya@yahoo.com <br />
            (555) 555-5555
          </p>
        </div>
        <div className="flex flex-col md:flex-row md:gap-70 md:pb-25">
          <div className="flex flex-col items-center md:flex-col md:items-start">
            <h3 className="font-semibold">Hours</h3>
            <p className="text-center pt-5 md:text-left">
              Monday – Friday <br />
              10am – 6pm
            </p>
          </div>
          <div className="flex flex-col items-center mt-4 md:mt-0 md:items-start md:flex-col">
            <h3 className="font-semibold">Find</h3>
            <p className="footer-link text-center md:text-start font-normal">
              <a href="/">Home</a> <br />
              <a href="/contact">Contact</a> <br />
              <a href="/blog">Blog</a>
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
            All Rights Reserved © 2026 Dr. Maya Reynolds, LLC.
          </text>
        </div>
      </div>
    </footer>
  );
}
