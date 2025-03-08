export default function MenuLink({ link }) {
  return (
    <li key={link}>
      <a href="#" className="menu-link">
        {link}
      </a>
    </li>
  );
}
