import {Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {GiHamburgerMenu} from 'react-icons/gi';
function BurgerMenu() {
    return (
        <Flex>
        <Menu>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<GiHamburgerMenu />}
                variant='outline'
            />
            <MenuList>
                <MenuItem>

                </MenuItem>
            </MenuList>
        </Menu>
        </Flex>
    )
}

export default BurgerMenu;