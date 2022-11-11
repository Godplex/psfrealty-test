import Image from "next/image";
import Link from "next/link";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import logo from "../assets/logo.png";

const Menu = () => {

    return (
        <header>
            <Navbar bg="light" expand="lg" className="flex-column">
                <Container>
                    <Link href="/">
                        <Image
                            src={logo}
                            alt="logo"
                            width={192}
                            height={55}
                        />
                    </Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <NavDropdown title="Propiedades" id="basic-nav-dropdown">
                                <NavDropdown.Item>Nuevas construcciones</NavDropdown.Item>
                                <NavDropdown.Item>Usados</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Financiamiento" id="basic-nav-dropdown">
                                <NavDropdown.Item>Financiamiento para extranjeros</NavDropdown.Item>
                                <NavDropdown.Item>Financiamiento para residentes</NavDropdown.Item>
                                <NavDropdown.Item>Calculadora de hipotecas</NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown title="Servicios" id="basic-nav-dropdown">
                                <NavDropdown.Item>Asesoria contable y legal</NavDropdown.Item>
                                <NavDropdown.Item>Prestamos hipotecarios para extranjeros</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>Administracion de propiedades</Nav.Link>
                            <Nav.Link>Renta en dolares</Nav.Link>
                            <NavDropdown title="Nosotros" id="basic-nav-dropdown">
                                <NavDropdown.Item>Quienes somos</NavDropdown.Item>
                                <NavDropdown.Item>Blog</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link>Contactenos</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
                <Container className="d-flex justify-content-end">
                    <button className="btn btn-primary px-3 py-1 btn-sm rounded-pill fw-bold">LOGIN</button>
                </Container>
            </Navbar>
        </header>
    )
}

export default Menu