import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgotPasswordAction, LoginAction } from "../action/userAction";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
function ForgetPassword() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, userInfo, error } = useSelector((state) => {
    return state.login;
  });

  //validatio form
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "Required";
    } else if (values.email.length <= 3) {
      errors.email = "Must be 4 characters or More";
    }

    if (!values.password) {
      errors.password = "Required";
    } else if (values.password.length < 4) {
      errors.password = "Must be 4 Characters or More";
    } else if (values.password === "123456") {
      errors.password = "Must Not be 123456";
    }
    return errors;
  };

  useEffect(() => {
    let isUser = localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null;
    console.log(isUser, "isUserisUserisUserisUserisUser");
    if (isUser) {
      navigate("/");
    }
  }, [userInfo]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      dispatch(forgotPasswordAction(values));
    },
  });

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"} mb="50px">
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>Forgot Password</Heading>
          <form onSubmit={formik.handleSubmit}>
            {error && <Text>{error}</Text>}
            <FormControl id="email">
              <FormLabel>Email address</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.email}
                onBlur={formik.handleBlur}
                type="email"
              />
            </FormControl>
            {formik.errors.email && (
              <Text mt="6px" color="tomato">
                {formik.errors.email}
              </Text>
            )}
            <FormControl id="password">
              <FormLabel>Password</FormLabel>
              <Input
                onChange={formik.handleChange}
                value={formik.values.password}
                onBlur={formik.handleBlur}
                type="password"
              />
            </FormControl>

            {formik.errors.password ? (
              <Text mt="6px" color="tomato">
                {formik.errors.password}
              </Text>
            ) : null}
            <Stack spacing={6}>
              <Button type="submit" colorScheme={"blue"} variant={"solid"}>
                Sign in
              </Button>
            </Stack>
          </form>
        </Stack>
      </Flex>
    </Stack>
  );
}

export default ForgetPassword;
