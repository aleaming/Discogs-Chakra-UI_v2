import { HStack, Input, Button } from '@chakra-ui/react';
import { Search } from 'lucide-react';
import { FilterDrawer } from './FilterDrawer';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('search') as HTMLInputElement;
    onSearch(input.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <HStack spacing={2} w="full" maxW="800px" mx="auto" p={4}>
        <FilterDrawer />
        <Input
          name="search"
          placeholder="Search..."
          size="lg"
          variant="filled"
          borderRadius="full"
          border="1px"
          borderColor="gray.50"
          bg="gray.10"
          _focus={{
            borderColor: 'gray.100',
            bg: 'white',
          }}
          _hover={{
            borderColor: 'gray.100',
            bg: 'white',
          }}
        />
        <Button
          type="submit"
          size="lg"
          colorScheme="brand"
          borderRadius="full"
          px="8"
          leftIcon={<Search size={20} />}
        >
          Search
        </Button>
      </HStack>
    </form>
  );
};
