import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        maxWidth: 700,
    },
    media: {
        height: 399,
    },
});

export default function MediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image="https://www.inry.com/hubfs/INRY/IMG/insights/content/4046/servicenow-ppm-use-cases.png"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Добро пожаловать в базу проектов!
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        This service works with using React-admin framework, NodeJS and PostgreSQL.
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button fullWidth size="large" color="primary">
                    <a href="https://marmelab.com/react-admin/"></a>
                    Learn more about React-admin
                </Button>
            </CardActions>
        </Card>
    );
}
