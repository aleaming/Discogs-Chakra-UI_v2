import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  Image,
  useColorModeValue,
  Tag,
  Wrap,
  WrapItem,
  AspectRatio,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';
import { Play, Heart, Share2, UserPlus } from 'lucide-react';
import { ArtistHeroProps } from './types';

export const ArtistHero = ({
  name,
  image,
  coverImage,
  monthlyListeners,
  genres = [],
  description,
  isVerified = false,
  onPlay,
  onFollow,
  onShare,
}: ArtistHeroProps) => {
  const bgOverlay = useColorModeValue(
    'linear-gradient(to bottom, rgba(255,255,255,0.8), rgba(255,255,255,1))',
    'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,1))'
  );

  const textColor = useColorModeValue('gray.800', 'white');
  const subTextColor = useColorModeValue('gray.600', 'gray.300');

  return (
    <Box position="relative" width="100%" overflow="hidden">
      {/* Content */}
      <Container maxW="container.full" position="relative" zIndex={1} px="0">
        <HStack spacing={6} align="start" px={0} paddingBottom="8">
          {/* Artist Image */}
          <Box
            borderBottomRightRadius="48px"
            overflow="hidden"
            boxShadow="xl"
            width={{ base: '50%', md: '100%' }}
          >
            <AspectRatio ratio={4 / 3}>
              <Image
                src={image}
                alt={name}
                width="100%"
                height="100%"
                objectFit="cover"
              />
            </AspectRatio>
          </Box>

          {/* Artist Info */}
          <VStack
            align="start"
            spacing={4}
            width="100%"
            py={{ base: 8, md: 12, lg: 16 }}
            paddingRight="12"
          >
            <HStack verticalAlign="middle">
              <Heading as="h1" size="2xl" color={textColor} fontWeight="bold">
                {name}
              </Heading>
              {isVerified && (
                <Tag size="sm" colorScheme="yellow" verticalAlign="middle">
                  [a1289]
                </Tag>
              )}
            </HStack>
            {/*
            <Text color={subTextColor} fontSize="sm">
              {monthlyListeners.toLocaleString()} Items for sale
            </Text> */}

            {/* Genres Badges */}
            {/*   */}
            <Wrap spacing={2}>
              {genres.map((genre) => (
                <WrapItem key={genre}>
                  <Tag size="sm" variant="subtle" colorScheme="gray">
                    {genre}
                  </Tag>
                </WrapItem>
              ))}
            </Wrap>

            <Accordion defaultIndex={[0]} allowMultiple px="0" width="full">
              <AccordionItem borderTop="none" borderBottom="none">
                <AccordionButton px="0" py="1">
                  <Box as="span" flex="1" textAlign="left">
                    Profile
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} px="0">
                  {/* Description */}
                  <Text
                    color={subTextColor}
                    fontSize="sm"
                    maxWidth="800px"
                    lineHeight="tall"
                  >
                    {description}
                  </Text>
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem
                borderTop="none"
                borderBottom="none"
                defaultIndex={-1}
              >
                <AccordionButton px="0" py="1">
                  <Box as="span" flex="1" textAlign="left">
                    Sites
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} px="0">
                  <Text
                    color={subTextColor}
                    fontSize="sm"
                    maxWidth="800px"
                    lineHeight="tall"
                  >
                    Wikipedia , Imdb , Lastfm , web.archive.org , daftpunk.com ,
                    web.archive.org , Facebook , X , YouTube , Soundcloud ,
                    Tiktok , twitch.tv , randomaccessmemories.com , What Gear ,
                    equipboard.com , Instagram , daft-punk-fr.myshopify.com ,
                    twitch.tv
                  </Text>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem borderTop="none" borderBottom="none">
                <AccordionButton px="0" py="1">
                  <Box as="span" flex="1" textAlign="left">
                    Aliases
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} px="0">
                  List sites here.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem borderTop="none" borderBottom="none">
                <AccordionButton px="0" py="1">
                  <Box as="span" flex="1" textAlign="left">
                    Members
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} px="0">
                  List sites here.
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem borderTop="none" borderBottom="none">
                <AccordionButton px="0" py="1">
                  <Box as="span" flex="1" textAlign="left">
                    Variations
                  </Box>
                  <AccordionIcon />
                </AccordionButton>

                <AccordionPanel pb={4} px="0">
                  List sites here.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

            {/* Action Buttons */}
            <HStack spacing={4} pt={4}>
              <Button
                leftIcon={<Play size={20} />}
                colorScheme="brand"
                size="md"
                onClick={onPlay}
                aria-label="Play artist's popular tracks"
              >
                Play
              </Button>
              <Button
                leftIcon={<UserPlus size={20} />}
                variant="outline"
                colorScheme="brand"
                size="md"
                onClick={onFollow}
                aria-label="Follow artist"
              >
                Follow
              </Button>
              <Button
                icon={<Share2 size={20} />}
                variant="ghost"
                colorScheme="brand"
                size="md"
                onClick={onShare}
                aria-label="Share artist"
              >
                <Share2 />
              </Button>
            </HStack>
          </VStack>
        </HStack>
      </Container>
    </Box>
  );
};
