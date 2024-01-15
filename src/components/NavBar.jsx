const NavBar = () => {
  const navItems = [
    { name: "Collections", href: "#" },
    { name: "Men", href: "#" },
    { name: "Women", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ];

  return (
    <nav className="xl:h-full">
      <ul className="flex flex-col gap-5 xl:ml-[3.5rem] xl:h-full xl:flex-row xl:gap-8">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="xl:border-transparent xl:flex xl:items-center xl:border-b-4 xl:hover:border-orange"
          >
            <a
              href={item.href}
              className="text-lg font-bold text-very-dark-blue hover:text-very-dark-blue xl:text-[0.9375rem] xl:font-normal xl:text-dark-grayish-blue"
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
