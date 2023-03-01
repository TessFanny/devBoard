import {Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import {GiHamburgerMenu} from 'react-icons/gi';
import {
    FaChartLine,
    FaNewspaper,
    FaComments,
    FaFolderOpen,
    FaColumns,
    FaThumbsUp,
    FaUser,
    FaPlusSquare,
    FaRegNewspaper,
} from 'react-icons/fa';
import { BsStackOverflow } from 'react-icons/bs';
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
                <MenuItem icon={<FaChartLine />} command='⌘T'>
                        Dashboard
                </MenuItem>
                <MenuItem icon={<FaChartLine />} command='⌘T'>
                    News
                </MenuItem>
                <MenuItem icon={<FaChartLine />} command='⌘T'>
                    Dashboard
                </MenuItem>
                <MenuItem icon={<FaChartLine />} command='⌘T'>
                    Dashboard
                </MenuItem>
                <MenuItem icon={<FaChartLine />} command='⌘T'>
                    Dashboard
                </MenuItem>
                <MenuItem icon={<FaChartLine />} command='⌘T'>
                    Dashboard
                </MenuItem>
                <MenuItem icon={<FaChartLine />} command='⌘T'>
                    Dashboard
                </MenuItem>
                <MenuItem icon={<FaChartLine />} command='⌘T'>
                    Dashboard
                </MenuItem>
                <MenuItem icon={<FaChartLine />} command='⌘T'>
                    Dashboard
                </MenuItem>

            </MenuList>
        </Menu>
        </Flex>
    )
}

export default BurgerMenu;