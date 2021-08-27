import React, { FunctionComponent } from 'react'
import { useQuery } from '@apollo/client'
import { RestaurantQuery } from './restaurant.query'
import { Button, Card, CardActions, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import { GetRestaurants } from './__generated__/GetRestaurants'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const App: FunctionComponent = () => {
  const classes = useStyles()
  const { data, loading } = useQuery<GetRestaurants>(RestaurantQuery)

  if (loading || !data?.restaurants) {
    return <Typography>Loading</Typography>
  }

  return (
    <div className="App">
      <Grid container spacing={3}>
        {data.restaurants.map((restaurant) => (
          <Grid item xs={4} key={restaurant.id}>
            <Card>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  {restaurant.name}
                </Typography>
                <Typography className={classes.pos} color="textSecondary">
                  adjective
                </Typography>
              </CardContent>

              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}

export default App
