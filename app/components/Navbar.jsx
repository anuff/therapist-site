export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-5 md:px-15 h-20 bg-primary">
      <nav>
        <h3>Lilac Template</h3>
      </nav>
      <ul className="flex gap-8">
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
