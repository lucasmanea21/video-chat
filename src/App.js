import React from 'react'
import {Typography, AppBar} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'

import VideoPlayer from './components/VideoPlayer'
import Options from './components/Options'
import Notifications from './components/Notifications'

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        color: '#000',
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',
    
        [theme.breakpoints.down('xs')]: {
          width: '90%',
        },
      },
      wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        color: '#fff',
      },
}));

const App = () => {
    const classes= useStyles()
    return (
        <div className={classes.wrapper}>
            <AppBar className={classes.appBar} position='static' color = "inherit">
                <Typography variant="h2" align="center">WeConnect</Typography>
            </AppBar>
            <VideoPlayer />
            <Options>
                <Notifications />
            </Options>
        </div>
    )
}

export default App
