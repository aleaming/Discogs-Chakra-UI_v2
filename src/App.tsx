import {
  ChakraProvider,
  Container,
  SimpleGrid,
  VStack,
  Heading,
  Divider,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  Tab,
  Text,
  Flex,
  Spacer,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import { SearchBar } from './components/SearchBar';
import ReleaseAlbumBlock from './components/ReleaseAlbumBlock';
import MarketplaceAlbumBlock from './components/MarketplaceAlbumBlock';
import { ArtistHero } from './components/ArtistHero';
import { Navigation } from './components/Navigation';
import { FilterDrawer } from './components/FilterDrawer';
import theme from './theme';

const App = () => {
  const handleSearch = (query: string) => {
    console.log('Search query:', query);
  };

  const handleLearnMore = () => {
    console.log('Learn more clicked');
  };

  const artistData = {
    name: 'Daft Punk',
    image:
      'https://i.discogs.com/sP_wDoC5MsG9lZUfb9thLbpmMmL__nuVnGMNpwgjirE/rs:fit/g:sm/q:90/h:438/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEyODkt/MTYxNTQ4NDUyOS00/Mjg0LmpwZWc.jpeg',
    coverImage:
      'https://i.discogs.com/05Lpu5qKFGNpuIqA1fztJdlAyiciD7P_63QJtxhdliw/rs:fit/g:sm/q:90/h:382/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9BLTEyODkt/MTYyMDQ3MTUxMS0z/NDIwLmpwZWc.jpeg',
    monthlyListeners: 1234567,
    genres: ['Electronic', 'Contemporary', 'Orchestral', 'Ambient'],
    description:
      "Daft Punk were a French electronic music duo formed in 1993 by Thomas Bangalter (born January 3, 1975) and Guy-Manuel de Homem-Christo (born February 8, 1974). Bangalter and de Homem-Christo were previously in the rock band Darlin' with Laurent Brancowitz. After Brancowitz left the group to join his brother's band, Phoenix, the remaining duo formed Daft Punk. On February 22, 2021, it was announced that they had disbanded for unknown reasons.",
    isVerified: true,
  };

  const albums = [
    {
      title: 'Discovery',
      artist: 'Daft Punk',
      price: '38.00',
      image:
        'https://i.discogs.com/6gMPje3DUKa1LMojsHtGTE5o4fIQon5lYaIJvALlvVM/rs:fit/g:sm/q:90/h:600/w:592/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI4Nzkt/MTIzNjAzNTQ3Mi5q/cGVn.jpeg',
      label: 'Virgin, Universal Music',
      releaseYear: 2023,
    },
    {
      title: 'Homework',
      artist: 'Daft Punk',
      price: '45.00',
      image:
        'https://i.discogs.com/Tgzu71VlahJ9X8cu0eaqutNNlPWJOqelug4Czwwa6BM/rs:fit/g:sm/q:90/h:600/w:589/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTI5NDc2/NTUtMTY3MDAwMjM2/NC01MjE4LmpwZWc.jpeg',
      label: 'Virgin, Quality Recordings',
      releaseYear: 2023,
    },
    {
      title: 'Random Access Memories',
      artist: 'Daft Punk',
      price: '42.00',
      image:
        'https://i.discogs.com/zFVZE4s0zSXUIM7OMl2UDckSq0zlopdHBHRz23zqMJk/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQ1NzAz/NjYtMTUzOTI5NTA5/Mi02MDg3LnBuZw.jpeg',
      label: 'Deutsche Grammophon',
      releaseYear: 2023,
    },
    {
      title: 'Alive 1997',
      artist: 'Daft Punk',
      price: '39.99',
      image:
        'https://i.discogs.com/NvfyPC4OVCXxcqVnWURYdJzxzqfvlmgg8PLVyoIJva4/rs:fit/g:sm/q:90/h:600/w:584/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTEzNjgy/LTE0Nzc0NzgzMjMt/MzQzMi5qcGVn.jpeg',
      label: 'Sony Music',
      releaseYear: 2023,
    },
    {
      title: 'Human After All',
      artist: 'Daft Punk',
      price: '48.00',
      image:
        'https://i.discogs.com/FEWXTwkcL0-QDeeH_uXA7HwRqjXBujz-6Mic0gx6Ds8/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTQxNzY4/Ni0xMzQ3NTc0NzU3/LTgwNDguanBlZw.jpeg',
      label: 'Vinyl Classics',
      releaseYear: 2023,
    },
    {
      title: 'Alive 2007',
      artist: 'Daft Punk',
      price: '41.00',
      image:
        'https://i.discogs.com/3z9ppYLGHqhSzWWAw2FrUxxCAgA-dn_vOpvNEwGX6xc/rs:fit/g:sm/q:90/h:523/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTExNDEx/MjMtMTE5NTgyMzE2/My5qcGVn.jpeg',
      label: 'Electronic Arts Music',
      releaseYear: 2023,
    },
    {
      title: 'TRON: Legacy Reconfigured',
      artist: 'Daft Punk',
      price: '44.99',
      image:
        'https://i.discogs.com/QLYxshW1O6j5oDcniwXKkO0XbTEbex13gJSN6CQqLZA/rs:fit/g:sm/q:90/h:480/w:480/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTU2NzUx/MjctMTM5OTY0NTY3/NC02NTE3LmpwZWc.jpeg',
      label: 'Motown Records',
      releaseYear: 2023,
    },
    {
      title: 'TRON: Legacy (Original Motion Picture Soundtrack)',
      artist: 'Daft Punk',
      price: '43.50',
      image:
        'https://i.discogs.com/Ie-ZAT_Lbvc1dGud11MDw3RKO65NQrzPKkBvqVVk7Hg/rs:fit/g:sm/q:90/h:600/w:600/czM6Ly9kaXNjb2dz/LWRhdGFiYXNlLWlt/YWdlcy9SLTgwODk5/NDctMTQ1NTM2MDIz/OC0zNDgwLmpwZWc.jpeg',
      label: 'Future Music',
      releaseYear: 2023,
    },
  ];

  return (
    <ChakraProvider theme={theme}>
      <Navigation />

      <VStack spacing={0} w="full">
        <SearchBar onSearch={handleSearch} />
        <Wrap w="100%" bg="gray.25" py="4">
          <Container maxW="container.xl">
            <Breadcrumb fontWeight="medium" fontSize="sm">
              <BreadcrumbItem>
                <BreadcrumbLink href="#">Home</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink href="#">About</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href="#">Current</BreadcrumbLink>
              </BreadcrumbItem>
            </Breadcrumb>
          </Container>
        </Wrap>
        <ArtistHero
          {...artistData}
          onPlay={() => console.log('Play clicked')}
          onFollow={() => console.log('Follow clicked')}
          onShare={() => console.log('Share clicked')}
        />
      </VStack>

      <Tabs variant="enclosed" width="full" px={4}>
        <Container maxW="container.xl" px={4}>
          <TabList>
            <Tab mr={1}>Featured</Tab>
            <Tab mr={1}>Discography</Tab>
            <Tab mr={1}>Reviews</Tab>
            <Tab mr={1}>Videos</Tab>
            <Tab mr={1}>Lists</Tab>
            <Spacer />
            <Tab
              bg="teal.500"
              color="white"
              _hover={{
                background: 'gray.800',
                color: 'white',
              }}
            >
              Shop All Daft Punk
            </Tab>
          </TabList>
        </Container>
        <TabPanels>
          <TabPanel
            _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
            _light={{ bg: 'white' }}
          >
            <Container maxW="container.xl" py={4}>
              <VStack w="full" spacing={4} align="start">
                <Heading size="md" color="gray.800">
                  Most Collected Albums
                </Heading>
                <SimpleGrid
                  columns={{ base: 1, md: 2, lg: 4 }}
                  spacing={6}
                  w="full"
                >
                  {albums.map((album, index) => (
                    <ReleaseAlbumBlock key={index} {...album} />
                  ))}
                </SimpleGrid>
              </VStack>

              <Divider my={8} />
            </Container>
          </TabPanel>

          <TabPanel
            _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
            _light={{ bg: 'white' }}
          >
            <Container maxW="container.xl">
              <Heading size="lg" mb={6}>
                Discography
              </Heading>
              <Text>Popular tracks content will be displayed here</Text>
            </Container>
          </TabPanel>

          <TabPanel
            _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
            _light={{ bg: 'white' }}
          >
            <Container maxW="container.xl">
              <Heading size="lg" mb={6}>
                Reviews
              </Heading>
              <Text>Albums content will be displayed here</Text>
            </Container>
          </TabPanel>

          <TabPanel
            _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
            _light={{ bg: 'white' }}
          >
            <Container maxW="container.xl">
              <Heading size="lg" mb={6}>
                Videos
              </Heading>
              <Text>Singles content will be displayed here</Text>
            </Container>
          </TabPanel>

          <TabPanel
            _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
            _light={{ bg: 'white' }}
          >
            <Container maxW="container.xl">
              <Heading size="lg" mb={6}>
                Lists
              </Heading>
              <Text>Artist biography and details will be displayed here</Text>
            </Container>
          </TabPanel>

          <TabPanel
            _dark={{ bg: 'var(--chakra-colors-gray-800)' }}
            _light={{ bg: 'white' }}
          >
            <Container maxW="container.xl">
              <Heading size="lg" mb={6}>
                Shop All Daft Punk
              </Heading>
              <FilterDrawer />
              <SimpleGrid
                columns={{ base: 1, md: 2, lg: 4 }}
                spacing={6}
                w="full"
              >
                {albums.map((album, index) => (
                  <MarketplaceAlbumBlock key={index} {...album} />
                ))}
              </SimpleGrid>
            </Container>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </ChakraProvider>
  );
};

export default App;
