/**
 * Represents the Alumni page component.
 * @version 1.0
 * @author Simon Shamoon 100%
 * 2024 March 21st
 */
import axios from "axios";
import { useEffect, useState } from "react";
import {
  Box,
  Container,
  Grid,
  Card,
  Link,
  CardMedia,
  CardContent,
  Typography,
  CircularProgress, // Import CircularProgress component
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Alumni = () => {
  const [alumniArray, setAlumniArray] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    /**
     * Fetches alumni data from the server.
     * @async
     */
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      try {
        const response = await axios.get("http://34.204.247.99/read.php", {
          method: "GET",
        });
        setAlumniArray(response.data);
        setLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container maxWidth="lg">
      <Typography
        variant="h2"
        component="h2"
        gutterBottom
        align="center"
        style={{ marginTop: "100px" }}
      >
        Alumni
      </Typography>
      {loading ? ( // Display loading icon if loading is true
        <Box display="flex" justifyContent="center" mt={4}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4}>
          {alumniArray.map((alumni) => (
            <Grid item xs={12} sm={6} md={4} key={alumni.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={`data:image/jpeg;base64,${alumni.picture}`}
                  alt={alumni.name}
                />
                <CardContent>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Typography gutterBottom variant="h5" component="div">
                      {alumni.firstname} {alumni.lastname}
                    </Typography>
                    <Link
                      href={alumni.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedInIcon fontSize="large" />
                    </Link>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    Email: {alumni.email}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Major: {alumni.major}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Alumni;
