// you can find the whole app via this link https://hkm3.github.io/portfolio-app/

import React, { useState,useEffect, useRef} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
const  handleClick = (anchor)=>{
  const id = `${anchor}-section`;
  const element = document.getElementById(id);
  console.log(id);
  
  if(element){
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
      
    })};
  
}

const scrollContainer=useRef(null)

const [scrollDirection, setScrollDirection] = useState("up");

useEffect(() => {
  let lastScrollY = window.scrollY;
  const handleScroll = () => {
    const direction = lastScrollY < window.scrollY ? 'down' : 'up';
    lastScrollY = window.scrollY;
    setScrollDirection(direction);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

  return (
    <Box
      position="fixed"
      ref={scrollContainer}
      top={0}
      left={0}
      right={0}
       style={{ transform:scrollDirection==="down"? 'translateY(-200px)' :'translateY(0px)'}}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
          {socials.map((element,index) => (
          <a href={element.url}>
            <FontAwesomeIcon id="icons" key={index} icon={element.icon} size="2x"></FontAwesomeIcon>
          </a>
        ))}
          </nav>
          <nav>
            <HStack spacing={8}>
             <a href="/#projects" onClick={() => handleClick("projects")}>Projects</a>
             <a href="/#contact-me" onClick={ () => handleClick("contactme")}>Contact me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
