import { Container } from "@chakra-ui/react";
import { NavBar } from "../components/NavBar";

const MainLayout = ({ children }) => {
    return( 
    <Container>
        <NavBar />
        {children}
    </Container>
    );
};

export default MainLayout;