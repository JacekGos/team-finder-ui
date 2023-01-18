import { Box, Typography, useTheme, TextField } from "@mui/material";
import { tokens } from "../../theme";
import Button from "@mui/material/Button";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Groups2OutlinedIcon from "@mui/icons-material/Groups2Outlined";


const SignIn = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const checkoutSchema = yup.object().shape({
    username: yup.string().required("required"),
    password: yup.string().required("required"),
  });
  const initialValues = {
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
            height: "35vh",
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
                mt: "20px"
            }}>
            <Groups2OutlinedIcon
              sx={{
                fontSize: "40px",
                // mr: "6px",
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
                      label="Username or email"
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
                  <Box display="flex" justifyContent="center" mt="20px" position="fixed">
                    <Button
                      variant="contained"
                      sx={{
                        fontSize: "15px",
                        width: "20vh",
                      }}
                    >
                      Sign In
                    </Button>
                  </Box>
                </form>
              )}
            </Formik>
          </Box>
        </Box>

        <Box
          sx={{
            height: "10vh",
            border: `2px solid ${colors.primary[700]}`,
            borderRadius: "10px",
            mt: "20px",
            width: "30vh",
            backgroundColor: `${colors.primary[900]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Typography sx={{
            fontSize: "13px"
          }}>
            New? Create account
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default SignIn;
