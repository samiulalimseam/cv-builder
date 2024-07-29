import { Box, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const SideBar = () => {
    const sideBarItems = [
        {
            id: 1,
            name: 'Home',
            link: '/'
        },
        {
            id: 3,
            name: 'About',
            link: '/about'
        },
        {
            id: 4,
            name: 'Contact',
            link: '/contact'
        },
        {
            id: 5,
            name: 'Design',
            link: '/design'
        }
    ];

    return (
        <Box as="aside" width="100%" padding="4" backgroundColor="gray.100">
            <nav>
                <ul style={{ listStyleType: 'none', padding: 0, margin: 0 }}>
                    {sideBarItems.map((item) => (
                        <li key={item.id} style={{ marginBottom: '8px' }}>
                            <Link
                                as={RouterLink}
                                to={item.link}
                                padding="2"
                                borderRadius="md"
                                _hover={{ textDecoration: 'none', backgroundColor: 'gray.200' }}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </Box>
    );
};

export default SideBar;
