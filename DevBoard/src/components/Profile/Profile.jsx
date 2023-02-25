import { Flex, Box, Text, Image, Divider, Card, Input, Button } from "@chakra-ui/react";
import Firstname from "./Firstname/Firstname";
import Lastname from "./Lastname/Lastname";
import img from "../../assets/profile.png";
import Username from "./Username/Username";
import Github from "./Github/Github";
import Email from "./Email/Email";

function Profile() {

      
    return(
        <Flex w="98%" mt="10" h="80%">
            <Box w="20%" pr="10">
            <Box display="flex" flexDirection="column" alignItems="flex-start">
            <Image
                  maxW="200px"
                  src={img}
                  borderRadius="md"
                />
                <Username />
            </Box>
            </Box>
            
            <Box w="50%" display="flex">
                <Box w="100%" display="flex" flexDirection="column" alignItems="flex-end" justifyContent="center" bgColor="white" padding="10" borderRadius="md" boxShadow="md" height="50%">
                    <Box display="flex" justifyContent="space-around" alignItems="center" w="100%">
                        <Box>
                            <Email />
                            <Github />
                            </Box>

                            <Box>
                            <Firstname />
                            <Lastname />
                        </Box>
                    </Box>
                    <Button colorScheme='linkedin' mt="10">Submit</Button>
                </Box>
            </Box>
        </Flex>
    )
}

export default Profile;
