import { Heading, HStack, Image, Text, VStack,Box } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.



  return (
    <VStack backgroundColor="white" borderRadius="10px" align='flex-start'>
      <Image src= {imageSrc}  borderRadius="10px" mb="3" />
      <Box ms="3" >
      <Heading size="md" color="black" mb="3">{title}</Heading>
      <Text color="#808080" mb="3" > {description} </Text>
      <HStack mb="2">
      <Text color="black" id="see-more">See more</Text>
      <FontAwesomeIcon icon={faArrowRight} color="black" size="1x" />
      </HStack>
  
      </Box>
  
  
    </VStack>
  );
};

export default Card;
