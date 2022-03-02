import { Box, Button, Center, Image, Text, VStack } from "@chakra-ui/react";
import gifbg from "../../assets/images/dashboard/dash2.gif";

interface ShopCardProps {
  name: string;
  price: number;
  image: string;
  year: number;
  description: string;
}

export const ShopCard = ({ name, image, year, description }: ShopCardProps) => {
  return (
    <Box
      cursor="pointer"
      _hover={{
        transform: "translateY(-7px)",
        borderColor: "primary.main",
      }}
      bg="primary.main1"
      transition="border 0.2s, ease 0s, transform 0.2s"
      border="2px solid"
      borderColor="primary.main"
      borderRadius="5px"
      width="1200px"
      boxShadow=" -24px 20px 4px rgba(0, 0, 0, 0.25)"
      paddingY={6}
      paddingX={4}
    >
      <Center bgColor="gray.0" marginBottom={6}>
        <Image src={image} boxSize="200px" objectFit="cover" />
      </Center>
      <VStack bg-bgImg={gifbg} spacing={4} marginTop={6}>
        <Text textAlign="center" fontWeight="700">
          {name}
        </Text>
        <Text textAlign="center" fontWeight="700">
          {year}
        </Text>
        <Text textAlign="center" fontWeight="700">
          {description}
        </Text>
      </VStack>
    </Box>
  );
};
