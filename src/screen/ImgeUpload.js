import {
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  VStack,
  Button,
  Center,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { imageUploadAction } from "../action/userAction";

function ImgeUpload() {
  const [image, setImage] = useState("");

  const dispatch = useDispatch();

  //submitHander
  const submitHander = (e) => {
    e.preventDefault();
    console.log(image, "setImagesetImagesetImagesetImage");

    dispatch(imageUploadAction(image));
  };

  return (
    <Box w="500px" ml="auto" mr="auto" mt="20px">
      <form onSubmit={submitHander}>
        <VStack>
          <FormControl>
            <FormLabel htmlFor="name">Enter Product Name</FormLabel>
            <Input
              onChange={(e) => {
                setImage(e.target.files[0]);
              }}
              id="name"
              type="file"
            />
          </FormControl>
        </VStack>
        <Center mt="10px">
          <Button type="submit">Add Product</Button>
        </Center>
      </form>
    </Box>
  );
}

export default ImgeUpload;
