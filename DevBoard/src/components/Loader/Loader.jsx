import { Flex } from '@chakra-ui/react';
import ReactLoading from 'react-loading';

function Loader() {
    return(
        <Flex alignItems="center" width="100%" height="100%" justifyContent="center">
            <ReactLoading type="spin" color="#4286f4" height={222.3} width={125} />
        </Flex>
    )
}

export default Loader;