import React from "react";
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import {Tab, Tabs} from "@mui/material";
import ExhibitionsList from "../exhibitions-list/ExhibitionsList";
import PostList from "../post-list/PostList";

function Main(){

    function TabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <>
                        {children}
                    </>
                )}
            </div>
        );
    }

    function a11yProps(index) {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);

    const tabsChange = (event, newValue) => {
        setValue(newValue);
    };

    return(
        <div>
            <div className="content-block">
                <Container>
                    <Tabs
                        value={value}
                        onChange={tabsChange}
                        aria-label="basic tabs example"
                        sx={{marginBottom: 2}}
                        variant="fullWidth">
                        <Tab label="All Posts" {...a11yProps(0)} />
                        <Tab label="Exhibitions" {...a11yProps(1)} />
                    </Tabs>
                <TabPanel value={value} index={0}>
                    <PostList/>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ExhibitionsList/>
                </TabPanel>
                </Container>
            </div>
        </div>
    );
}

export default Main;