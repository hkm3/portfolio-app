import React, {useEffect} from "react";
import { useFormik, validateYupSchema } from "formik";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import * as Yup from 'yup'; 
import FullScreenSection from "./FullScreenSection";
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const LandingSection = () => {
  const {isLoading, response, submit} = useSubmit();
  const { onOpen } = useAlertContext();
  console.warn("this is just a test", response);
  const formik = useFormik({
    initialValues: {
      firstName: "",
      email:'',
      type:'hireMe',
      comment:''
    },

    onSubmit: (values) => {
      submit("ee",values)
    },

    validationSchema: Yup.object({
      firstName: Yup.string().min(2).max(25).required("Please enter your name"),
      email: Yup.string().email("please enter a valid email").required("Required"),
      comment: Yup.string().required("Required")
    }),
  });

  useEffect(() => {
      if (response)

        if ( response.type === 'success') {
          // Show success alert with the first name
          onOpen('success', `Thanks for your submission ${formik.values.firstName}, We will get back to you shortly.`)
          formik.resetForm();
        } 
        else{
          onOpen(response.type,response.message);
        }
  }, [response]);

  return (
    <FullScreenSection
      isDarkBackground
      backgroundColor="#512DA8"
      py={16}
      spacing={8}
    >
      <VStack w="1024px" p={32} alignItems="flex-start">
        <Heading as="h1" id="contactme-section">
          Contact me
        </Heading>
        <Box p={6} rounded="md" w="100%">
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}  >
              <FormControl 
              isInvalid={formik.touched.firstName && !!formik.errors.firstName} isRequired>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input {...formik.getFieldProps("firstName")} 
                  id="firstName"
                  name="firstName"
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>
              <FormControl
               isInvalid={formik.touched.email && !!formik.errors.email}>
                <FormLabel htmlFor="email">Email Address</FormLabel>
                <Input {...formik.getFieldProps("email")} 
                  id="email"
                  name="email"
                  type="email"
                />
                <FormErrorMessage> {formik.errors.email} </FormErrorMessage>
              </FormControl>
              <FormControl>
                <FormLabel htmlFor="type">Type of enquiry</FormLabel>
                <Select id="type" name="type" {...formik.getFieldProps("type")} >
                  <option value="hireMe">Freelance project proposal</option>
                  <option value="openSource">
                    Open source consultancy session
                  </option>
                  <option value="other">Other</option>
                </Select>
              </FormControl>
              <FormControl 
              isInvalid={formik.touched.comment && !!formik.errors.comment}>
                <FormLabel htmlFor="comment">Your message</FormLabel>
                <Textarea {...formik.getFieldProps("comment")} 
                  id="comment"
                  name="comment"
                  height={250}
                />
                <FormErrorMessage> {formik.errors.comment} </FormErrorMessage>
              </FormControl>
              <Button type="submit"  disabled={!formik.isValid ||isLoading} isLoading={isLoading} colorScheme="purple" width="full">
              {isLoading ? 'Submitting...' : 'Submit'}

              </Button>
            </VStack>
          </form>
        </Box>
      </VStack>
    </FullScreenSection>
  );
};

export default LandingSection;
