import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  Button,
} from '@mui/material';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import './App.css';

function App() {
  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <>
      <CssBaseline />
      
      {/* Navigation Bar */}
      <AppBar position="relative">
        <Toolbar>
          <CameraAltIcon className="icon" />
          <Typography variant="h6">Photo Gallery</Typography>
        </Toolbar>
      </AppBar>

      <main>
    
        {/* Hero Section */}
        <div className="container">
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              My Photo Gallery
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
              vitae aperiam! Excepturi repudiandae accusamus, aliquid distinctio
              autem consequuntur ipsam quisquam.
            </Typography>

            {/* Buttons */}
            <div className="buttons">
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See more photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Follow Me
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container className="card">
          <Grid className="cardGrid" container spacing={4}>
              {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card>
                  <CardMedia
                    className="cardMedia"
                    image="https://source.unsplash.com/random"
                    title="Image Title"
                  />
                  <CardContent className="cardContent">
                    <Typography variant="h5" gutterBottom>
                      Heading
                    </Typography>
                    <Typography>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Ipsam, voluptatem!
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

      </main>
      
      <footer className="footer">
        <Typography variant='h6' align='center' gutterBottom>
          Footer
        </Typography>
        <Typography variant='subtitle1' align='center' color="textSecondary">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </footer>
    </>
  );
}

export default App;
