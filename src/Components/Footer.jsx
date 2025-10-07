function Footer() {
  return (
    <footer className="bg-light text-center text-muted py-3 mt-4">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} HireUp. All rights reserved.</p>
        <ul className="list-inline mt-2">
          <li className="list-inline-item"><a href="/about" className="text-muted">About</a></li>
          <li className="list-inline-item"><a href="/contact" className="text-muted">Contact</a></li>
          <li className="list-inline-item"><a href="/privacy" className="text-muted">Privacy</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
