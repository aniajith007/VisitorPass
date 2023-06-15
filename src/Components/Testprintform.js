import React from 'react';
import {makeStyles} from '@mui/material';
import { Grid,Card,CardHeader, CardContent,Avatar,TextField } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   avatar: {
//     marginRight: theme.spacing(2),
//   },
//   cardHeader: {
//     backgroundColor: theme.palette.grey[200],
//   },
// }));

function HorizontalCard() {
    return (
      <Grid container spacing={3}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="person"
                  style={{ backgroundColor: '#f44336', color: '#fff' }}
                >
                  P
                </Avatar>
              }
              title="John Doe"
              subheader="johndoe@example.com"
              style={{ backgroundColor: '#f5f5f5', borderBottom: '1px solid #ccc' }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Card>
            <CardContent>
              <TextField
                fullWidth
                label="First Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Last Name"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Email Address"
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                label="Phone Number"
                margin="normal"
                variant="outlined"
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
}

export default HorizontalCard;
