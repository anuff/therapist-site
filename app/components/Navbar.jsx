export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-5 md:px-15 h-20 bg-primary">
      <nav>
        <h3>
          <a href="/">Lilac Template</a>
        </h3>
      </nav>
      <ul className="flex gap-8">
        <li>
          <a href="/blog">Blog</a>
        </li>
        <li>
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </header>
  );
}
