import React from "react";
// nodejs library that concatenates strings
import classnames from "classnames";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

function IndexNavbar(props) {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [navbarCollapse, setNavbarCollapse] = React.useState(false);
  const heighUpdateNavbar = props.heighUpdateNavbar ? props.heighUpdateNavbar : 100

  const toggleNavbarCollapse = () => {
    setNavbarCollapse(!navbarCollapse);
    document.documentElement.classList.toggle("nav-open");
  };

  React.useEffect(() => {
    const updateNavbarColor = () => {
      if (
        document.documentElement.scrollTop > heighUpdateNavbar - 1 ||
        document.body.scrollTop > heighUpdateNavbar - 1
      ) {
        setNavbarColor("");
      } else if (
        document.documentElement.scrollTop < heighUpdateNavbar ||
        document.body.scrollTop < heighUpdateNavbar
      ) {
        setNavbarColor("navbar-transparent");
      }
    };

    window.addEventListener("scroll", updateNavbarColor);

    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <Navbar className={classnames("fixed-top", navbarColor)} expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand
            data-placement="bottom"
            href="/index"
            target="_blank"
            title="Coded by Creative Tim"
          >
            LightZ React
          </NavbarBrand>
          <button
            aria-expanded={navbarCollapse}
            className={classnames("navbar-toggler navbar-toggler", {
              toggled: navbarCollapse,
            })}
            onClick={toggleNavbarCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className="justify-content-end"
          navbar
          isOpen={navbarCollapse}
        >
          <Nav navbar>
            <NavItem>
              <NavLink data-placement="bottom" href="/index">
                <p>Home</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink data-placement="bottom" href="/product">
                <p>Product</p>
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink data-placement="bottom" href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim" target="_blank" title="Follow us on Instagram">
                <p>About Us</p>
              </NavLink>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle
                        aria-expanded={false}
                        aria-haspopup={true}
                        caret
                        color="default"
                        data-toggle="dropdown"
                        href="#pablo"
                        id="dropdownMenuButton"
                        nav
                        onClick={(e) => e.preventDefault()}
                        role="button"
                      >
                        Dropdown
                      </DropdownToggle>
                      <DropdownMenu
                        aria-labelledby="dropdownMenuButton"
                        // className={"dropdown-transparent"}
                      >
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another action
                        </DropdownItem>
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Something else here
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Separated link
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem
                          href="#pablo"
                          onClick={(e) => e.preventDefault()}
                        >
                          Another separated link
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
            <NavItem>
              <NavLink data-placement="bottom" href="/contact">
                <p>Contacts</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://demos.creative-tim.com/paper-kit-react/#/documentation?ref=pkr-index-navbar" target="_blank">
                <i className="nc-icon nc-bag-16" /> Your Bag
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}

export default IndexNavbar;
