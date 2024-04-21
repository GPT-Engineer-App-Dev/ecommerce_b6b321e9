// Complete the Index page component here
// Use chakra-ui
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FaCartPlus } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" align="center" p={5}>
      <Image src="https://images.unsplash.com/photo-1604935067269-27c7e8b36618?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9kdWN0JTIwaW1hZ2V8ZW58MHx8fHwxNzEzNzExNTA1fDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Product Image" boxSize="300px" objectFit="cover" mb={4} />
      <Heading mb={2}>Product Title</Heading>
      <Text fontSize="xl" color="gray.600" mb={2}>
        $29.99
      </Text>
      <Text mb={4}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text>
      <Button rightIcon={<FaCartPlus />} colorScheme="blue">
        Add to Cart
      </Button>
    </Flex>
  );
};

export default Index;
