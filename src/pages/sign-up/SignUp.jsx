import { Box, Typography, useTheme, TextField } from "@mui/material";
import { tokens } from "../../theme";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";
import { Link } from "react-router-dom";

const SignUp = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const checkoutSchema = yup.object().shape({
    username: yup.string().required("required"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
  });
  const initialValues = {
    email: "",
    username: "",
    password: "",
  };

  return (
    <>
      <Box
        sx={{
          display: "grid",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            // height: "43vh",
            border: `2px solid ${colors.primary[700]}`,
            borderRadius: "10px",
            mt: "100px",
            width: "30vh",
            backgroundColor: `${colors.primary[900]}`,
            // justifyContent: "center"
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: "20px",
            }}
          >
            <Groups2OutlinedIcon
              sx={{
                fontSize: "40px",
              }}
            />
          </Box>
          <Box
            sx={{
              m: "20px 50px 50px 50px",
            }}
          >
            <Formik
              onSubmit={handleFormSubmit}
              initialValues={initialValues}
              validationSchema={checkoutSchema}
            >
              {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Box
                    display="grid"
                    gap="30px"
                    gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                    sx={{
                      "& > div": {
                        gridColumn: isNonMobile ? undefined : "span 4",
                      },
                    }}
                  >
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="username"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.username}
                      name="username"
                      error={!!touched.username && !!errors.username}
                      // helperText={touched.username && errors.username}
                      size="normal"
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="text"
                      label="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.email}
                      name="email"
                      error={!!touched.email && !!errors.email}
                      // helperText={touched.username && errors.username}
                      size="normal"
                      sx={{ gridColumn: "span 4" }}
                    />
                    <TextField
                      fullWidth
                      variant="outlined"
                      type="password"
                      label="password"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      value={values.password}
                      name="password"
                      error={!!touched.password && !!errors.password}
                      // helperText={touched.password && errors.password}
                      sx={{ gridColumn: "span 4" }}
                    />
                  </Box>
                  <Box display="flex" justifyContent="center" mt="20px">
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        fontSize: "15px",
                        width: "20vh",
                      }}
                    >
                      Sign Up
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default SignUp;
