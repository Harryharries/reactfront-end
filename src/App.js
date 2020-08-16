import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import Pagination from '@material-ui/lab/Pagination';

import {Cards, Chart,CountryPicker} from './components';
import styles from './App.module.css'

import {fetchData} from './api'


class App extends React.Component{

  

  state = {
      data: {},
      country:''
  }

  async componentDidMount(){
      const fetchedData = await fetchData();

      this.setState({data: fetchedData});
  }

  handleCountryChange = async(country) =>{
      const data = await fetchData(country);
      //console.log(fetchedData);
      this.setState({data, country: country});
  }
  render() {
      const {data, country} = this.state;


      return(
        <div className={styles.container}>
          <Container maxWidth="lg">
          <Typography variant="h4">
            Harry Guapi Blog
          </Typography>
          </Container>
          <AppBar position="static">
          <Toolbar>
            <Typography variant="h3" color="primary" >
              Blog
            </Typography>
          </Toolbar>
        </AppBar>

          <Typography variant="h4">
            Daily Covid-19 Checker
          </Typography>
          <Cards data={data}/>
          <CountryPicker handleCountryChange={this.handleCountryChange}/>
          <Chart data={data} country={country}/>

          <Toolbar>
            <Typography variant="h6" color="primary" >
              Blog
            </Typography>
          </Toolbar>
          <Container maxWidth="lg">
          <Typography variant="h4">
            Articles
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    what is GraphQL and GraphQL vs REST API and syntax
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      -pros vs: RESTFUL
                      GraphQL can more Precisely get data from Back-end reduce many data redundancies 
                      get multiple resources only using one request
                      easy to maintain (e.g. add or remove query)
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Box>
                    <Avatar src="%PUBLIC_URL%/image/1.png" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        Harry
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        May 14, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React Router
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Backend:
  1: return different context by different URL request:
  2: the relationship between URL request address and server resource
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Box>
                    <Avatar src="%PUBLIC_URL%/image/1.png" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        Harry
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        May 14, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React useContext
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                      across all continents except Antarctica
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Box>
                    <Avatar src="%PUBLIC_URL%/image/1.png" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        Harry
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        May 2, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                    title="Contemplative Reptile"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      React useContext
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    React's State is VUE's data
  
              need re-render to DOM，using setState
  
               this.setState will not change the DOM immediately,
  
              react will wait for all the state changed by the function. 
  
              for better performance~!
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Box>
                    <Avatar src="1.png" />
                    <Box ml={2}>
                      <Typography variant="subtitle2" component="p">
                        Harry
                      </Typography>
                      <Typography variant="subtitle2" color="textSecondary" component="p">
                        May 1, 2020
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <BookmarkBorderIcon />
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
          <Box my={4}>
            <Pagination count={10} />
          </Box>
        </Container>
        </div>
      )   
  }
}

export default App;
