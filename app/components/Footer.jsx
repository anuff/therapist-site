export default function Footer() {
  return (
    <footer>
      {/* TOP FOOTER */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Brand / Address */}
            <div className="flex-1 space-y-4">
              <h3>Lilac Template</h3>

              <p>
                123 Example Road <br />
                Minneapolis, MN
              </p>

              <p>
                email@example.com <br />
                (555) 555-5555
              </p>
            </div>

            {/* Hours */}
            <div className="flex-1 space-y-4">
              <h3>Hours</h3>

              <p>
                Monday – Friday <br />
                10am – 6pm
              </p>
            </div>

            {/* Find */}
            <div className="flex-1 space-y-4">
              <h3>Find</h3>

              <ul className="space-y-2">
                <li>Home</li>
                <li>Contact</li>
                <li>Blog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-6 text-center space-y-6">
          {/* Legal links */}
          <div className="flex flex-wrap justify-center gap-6">
            <span>Privacy & Cookies Policy</span>
            <span>Good Faith Estimate</span>
            <span>Website Terms & Conditions</span>
            <span>Disclaimer</span>
          </div>

          {/* Credits */}
          <p>Website Template Credits: Go Bloom Creative</p>

          {/* Copyright */}
          <p>All Rights Reserved © 2024 Your Business Name Here, LLC.</p>
        </div>
      </div>
    </footer>
  );
}
