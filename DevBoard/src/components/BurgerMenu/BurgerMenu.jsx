import {Flex, IconButton, Menu, MenuButton, MenuItem, MenuList, Text} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
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
                <MenuItem icon={<FaChartLine />}>
                        Dashboard
                </MenuItem>
                <Link to="/feed">
                <MenuItem icon={<FaNewspaper />}>
                    News
                </MenuItem>
                </Link>
                <Link to="/repositories">
                <MenuItem icon={<FaFolderOpen />}>
                    Your Project
                </MenuItem>
                </Link>
                <Link to="stackoverflow">
                <MenuItem icon={<BsStackOverflow />}>
                    StackOverflow
                </MenuItem>
                </Link>
                <Link to="playground">
                <MenuItem icon={<FaChartLine />}>
                    Playground
                </MenuItem>
                </Link>
                <Link to="kanban">
                <MenuItem icon={<FaColumns />}>
                    kanban
                </MenuItem>
                </Link>
                <Link to="likes">
                <MenuItem icon={<FaThumbsUp />}>
                    Likes
                </MenuItem>
                </Link>
                <Link to="organizations">
                <MenuItem icon={<FaChartLine />}>
                    Oganization
                </MenuItem>
                </Link>
                <Link to="profile">
                <MenuItem icon={<FaUser />}>
                    Profile
                </MenuItem>
                </Link>

            </MenuList>
        </Menu>
        </Flex>
    )
}

export default BurgerMenu;