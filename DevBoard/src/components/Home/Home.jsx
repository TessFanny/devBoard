import { Flex, IconButton, Text } from "@chakra-ui/react";
import { FiLogIn } from 'react-icons/fi'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Home() {
    const { email } = useSelector((state) => state.user);
    return(
        <Flex h={'100vh'} w={'500px'} justify='space-between'>
            <Text>Home</Text>
            {email && (
                <Text>Hey</Text>
            )}
            <Link to="/register">
              <IconButton aria-label="login" icon={<FiLogIn />}/>
            </Link>
        </Flex>
    )
}

export default Home;