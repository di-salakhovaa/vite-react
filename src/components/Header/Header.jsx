const MENU = [
    {
        name: "Home",
        path: "/home"
    },
    {
        name: "About",
        path: "/about"
    },
    {
        name: "Donate",
        path: "/donate"
    }
];

console.log(MENU);

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    {
                        MENU.map((item) => {
                            return (
                                <li key={item.name}><a href={item.path}>{item.name}</a></li>
                            );
                        })
                    }
                </ul>
            </nav>
        </header>
    );
}

export default Header;