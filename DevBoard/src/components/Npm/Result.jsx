import React, { useState } from 'react';
import { Link, useMediaQuery, Box, Text, Avatar } from '@chakra-ui/react';
import { FaNpm } from 'react-icons/fa';
import { formatDistanceToNow } from 'date-fns';

function Result({ link, description, username, version, date, name, key }) {
  const [mobile] = useMediaQuery('(max-width: 600px)');
  const readableDate = formatDistanceToNow(new Date(date), {
    addSuffix: true,
  });
  return (
    <Link href={link} isExternal _hover={{ textDecoration: 'none' }}>
      <Box
        w="100%"
        bgColor="bgPost"
        boxShadow="md"
        key={key}
        borderRadius="md"
        display="flex"
        flexDirection={!mobile ? 'row' : 'column'}
        p="10px"
        pt="17px"
        gap={2}
        _hover={{ backgroundColor: 'secondary' }}
      >
        <Box
          w={!mobile ? '100px' : '100%'}
          display="flex"
          flexDirection={!mobile ? 'column' : 'row'}
          alignItems="center"
          justifyContent={mobile && 'flex-start'}
          gap={1}
        >
          <Box
            display="flex"
            w={!mobile ? '100%' : '90px'}
            width={mobile ? '120px' : '100%'}
            h="35px"
            bgColor="blue100"
            borderRadius="md"
            alignItems="center"
            justifyContent="space-around"
          />
          {mobile && (
            <Text mr="10px" fontWeight="600" color="black100">
              {description}
            </Text>
          )}
        </Box>
        <Box w="92%">
          <Text fontSize="lg" fontWeight="600" color="black100" mb="15px">
            {name}
          </Text>

          <Text fontSize={['12px', '12px', 'lg', 'lg', 'lg', 'lg']}>
            {description}
          </Text>

          {!mobile && (
            <Box
              w="100%"
              display="flex"
              mt="10px"
              gap={[100, 100, 200, 300, 300, 400]}
            >
              <Box
                display="flex"
                flexDirection={['column', 'row', 'row', 'row', 'row', 'row']}
                w={['40%', '100%', '100%', '100%', '100%', '100%']}
                justifyContent="flex-start"
                alignItems="center"
                gap={3}
              >
                <Avatar
                  bg="white"
                  color="red"
                  icon={<FaNpm size={24} />}
                  mr={2}
                />
                <Text fontSize="md" fontWeight="600" color="black100">
                  {username}
                </Text>
                <Text fontSize="md" fontWeight="600" color="black100">
                  {version} published • {readableDate}
                </Text>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Link>
  );
}

export default Result;
