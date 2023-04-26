import React, {useState} from "react";
import {
    Container,
    Tabs,
    Typography,
    Tab, Card, CardContent, Button, Grid, Box, List, ListItem,
    Divider
} from "@mui/material";

const Subscriptions = () => {

    const [subscriptions, setSubscriptions] = useState([
        {
            id: 1,
            subscriptionName: 'Free',
            monthlyPrice: 0,
            yearlyPrice: 0,
            featureList: [
                'Art posting up to 10 arts per month',
                'Image size up to 1920x1800',
            ],
        },
        {
            id: 2,
            subscriptionName: 'Artist',
            monthlyPrice: 1000,
            featureList: [
                'Art posting up to 100 arts per month',
                'Image size up to 2k',
                'Artist mark',
                'Promotion of posted posts',
                'Opportunity to offer your posts for exhibitions',
                'Opportunity to post videos in 30 fps',
            ],
        },
        {
            id: 3,
            subscriptionName: 'Author',
            monthlyPrice: 2500,
            featureList: [
                'Art posting up to 1000 arts per month',
                'Image size up to 8k',
                'Author mark',
                'Promotion of posted posts',
                'Opportunity to offer your posts for exhibitions',
                'Opportunity to post videos in 60 fps',
                'Opportunity to create exhibitions',
                'Early access to new features',
            ],
        },
    ]);

    const priceParser = (price) => {
        return price / 100;
    }

    const discountApplication = (discount, price) => {
        if (discount < 0 || discount > 100) {
            throw new Error('Discount should be between 0 and 100');
        }

        const discountAmount = price * discount / 100;
        const discountedPrice = price - discountAmount;

        return discountedPrice;
    }

    const [paymentType, setPaymentType] = React.useState(0);

    const paymentTypeChange = (event, paymentType) => {
        setPaymentType(paymentType);
    };

    const paymentTypeCheck = (paymentType, item) => {
        if(+paymentType === 0){
            return discountApplication(20, priceParser(item.monthlyPrice));
        }else if(+paymentType === 1){
            return priceParser(item.monthlyPrice);
        }
    }

    const paymentAnnuallyPrice = (price) => {
        return price * 12;
    }

    return (
        <>
            <Container sx={{backgroundColor:'#f7f7f7', borderRadius: '10px', paddingY:'15px'}}>
                <Typography variant="h3"
                            gutterBottom
                            align="center"
                            sx={{
                                background: 'linear-gradient(90deg, rgba(56,56,157,1) 51%, rgba(0,212,255,1) 100%)',
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent'
                            }}>
                    Upgrade your opportunities!
                </Typography>
                <Tabs value={paymentType} onChange={paymentTypeChange} aria-label="basic tabs example"
                      sx={{marginBottom: 2}}
                      variant="fullWidth">
                    <Tab label="Yearly 20% off!" />
                    <Tab label="Monthly"/>
                </Tabs>
                <Grid container spacing={3} justifyContent="space-between">
                    {subscriptions.map((item) => (
                        <Grid item key={item.id}>
                            <Card>
                                <CardContent>
                                    <Grid container direction="column" alignItems="center">
                                        <Grid item>
                                            <Typography variant="h4" align="center">
                                                {item.subscriptionName}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Typography variant="h5" align="center">
                                              <span style={{ fontSize: '2em' }}>
                                                ${paymentTypeCheck(paymentType, item)}
                                              </span>
                                                /month
                                            </Typography>
                                        </Grid>
                                        {paymentType === 0 ?
                                            <Grid item>
                                                <Typography variant="subtitle1" sx={{color:'#808080'}}>
                                                    ${paymentAnnuallyPrice(discountApplication(20, priceParser(item.monthlyPrice)))}/year
                                                </Typography>
                                            </Grid>
                                        :
                                        null}
                                        <Grid item>
                                            <Typography variant="h6" align="center">
                                                {+paymentType === 0 ? "Payment annually" : "Payment monthly"}
                                            </Typography>
                                        </Grid>
                                        <Grid item>
                                            <Grid container justifyContent="center">
                                                <Button variant="outlined" sx={{marginY: 2}}>
                                                    {item.subscriptionName === "Free" ? "Create a free account" : `Subscribe on ${item.subscriptionName}`}
                                                </Button>
                                            </Grid>
                                        </Grid>
                                        <Grid iteem>
                                            <Grid container justifyContent="center">
                                                <Container>
                                                    <Box
                                                        sx={{
                                                            width: 250,
                                                            border: '1px solid #808080',
                                                            borderRadius: '5px'

                                                        }}>
                                                        <List>
                                                            {item.featureList.map((listItem, index, array) => (
                                                                <>
                                                                    <ListItem>
                                                                        {listItem}
                                                                    </ListItem>
                                                                    {index+1 === array.length ? null : <Divider />}
                                                                </>
                                                            ))}
                                                        </List>
                                                    </Box>
                                                </Container>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                        </Grid>
                        ))}
                </Grid>
            </Container>
        </>
    );
}

export default Subscriptions;