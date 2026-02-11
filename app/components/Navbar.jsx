export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-15 h-20 bg-blue-500 border-2">
      <nav>
        <h1>Lilac Template</h1>
      </nav>
      <ul className="flex gap-8">
        <li>Blog</li>
        <li>Contact</li>
      </ul>
    </header>
  );
}
