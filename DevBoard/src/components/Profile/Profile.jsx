import { Flex, Box, Text, Image, Divider, Card } from "@chakra-ui/react";
import Firstname from "./Firstname/Firstname";
import Lastname from "./Lastname/Lastname";
import img from "../../assets/profile.png";
import Username from "./Username/Username";
import Github from "./Github/Github";
import Email from "./Email/Email";

function Profile() {

      
    return(
        <Flex w="98%" mt="10">
            <Box w="20%">
                <Image
                  boxSize="200px"
                  src={img}
                  borderRadius="md"
                />
            </Box>

            <Box w="500px" display="flex">
                <Card p="5" w="100%">
                    <Box display="flex" flexDirection="column" alignItems="flex-start">
                        <Username />
                        <Flex>
                            <Box mr="10">
                                <Email />
                                <Github />
                            </Box>
                            <Divider orientation='vertical' borderWidth="1px" borderColor="gray" borderRadius="xl" />
                            <Box ml="10" display="flex" alignItems="flex-start" flexDirection="column">
                                <Firstname />
                                <Lastname />
                            </Box>
                        </Flex>
                    </Box>
                </Card>
            </Box>
        </Flex>
    )
}

export default Profile;
