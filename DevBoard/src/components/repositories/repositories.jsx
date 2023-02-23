import { Flex, Text, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Heading, Button } from "@chakra-ui/react";

function Repositories() {
  return (
    // Flex container to center and add margin to the grid of Cards
    <Flex w="98%" mt={10}>
      {/* Grid of Cards with 4 columns and responsive width */}
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' w='100%'>
        {/* Card #1 */}
        <Card>
          {/* Card header with title */}
          <CardHeader>
            <Heading size='md'> Repositories</Heading>
          </CardHeader>
          {/* Card body with text */}
          <CardBody>
            <Text>Lorem ipsum here is your repo #</Text>
          </CardBody>
          {/* Card footer with button */}
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        {/* Card #2 */}
        <Card>
          {/* Card header with title */}
          <CardHeader>
            <Heading size='md'> Repositories</Heading>
          </CardHeader>
          {/* Card body with text */}
          <CardBody>
            <Text>Lorem ipsum here is your repo #</Text>
          </CardBody>
          {/* Card footer with button */}
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        {/* Card #3 */}
        <Card>
          {/* Card header with title */}
          <CardHeader>
            <Heading size='md'> Repositories</Heading>
          </CardHeader>
          {/* Card body with text */}
          <CardBody>
            <Text>Lorem ipsum here is your repo #</Text>
          </CardBody>
          {/* Card footer with button */}
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
        {/* Card #4 */}
        <Card>
          {/* Card header with title */}
          <CardHeader>
            <Heading size='md'> Repositories</Heading>
          </CardHeader>
          {/* Card body with text */}
          <CardBody>
            <Text>Lorem ipsum here is your repo #</Text>
          </CardBody>
          {/* Card footer with button */}
          <CardFooter>
            <Button>View here</Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </Flex>
  );
}

export default Repositories;
