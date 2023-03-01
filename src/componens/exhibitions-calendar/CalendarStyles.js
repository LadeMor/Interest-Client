import React from "react";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles({
    calendar: {
        width: '350px',
        maxWidth: '100%',
        background: 'white',
        border: '1px solid #a0a096',
        fontFamily: 'Arial, Helvetica, sans-serif',
        lineHeight: '1.125em',
        '&--doubleView': {
            width: '700px',
            '& .react-calendar__viewContainer': {
                display: 'flex',
                margin: '-0.5em',
                '& > *': {
                    width: '50%',
                    margin: '0.5em'
                }
            }
        },
        '&, & *, & *:before, & *:after': {
            MozBoxSizing: 'border-box',
            WebkitBoxSizing: 'border-box',
            boxSizing: 'border-box'
        },
        '& button': {
            margin: '0',
            paddingLeft:'20px',
            paddingRight: '20px',
            paddingTop: '10px',
            paddingBottom:'10px',
            border: '0',
            outline: 'none',
            '&:enabled:hover': {
                cursor: 'pointer'
            }
        },
        '&__navigation': {
            display: 'flex',
            height: '44px',
            marginBottom: '1em',
            '& button': {
                minWidth: '44px',
                background: 'none',
                '&:disabled': {
                    backgroundColor: '#f0f0f0'
                },
                '&:enabled:hover, &:enabled:focus': {
                    backgroundColor: '#e6e6e6'
                }
            }
        },
        '&__month-view__weekdays': {
            textAlign: 'center',
            textTransform: 'uppercase',
            fontWeight: 'bold',
            fontSize: '0.75em'
        },
        '&__month-view__weekdays__weekday': {
            padding: '0.5em'
        },
        '&__month-view__weekNumbers .react-calendar__tile': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75em',
            fontWeight: 'bold'
        },
        '&__month-view__days__day--weekend': {
            color: '#d10000'
        },
        '&__month-view__days__day--neighboringMonth': {
            color: '#757575'
        },
        '&__year-view .react-calendar__tile, &__decade-view .react-calendar__tile, &__century-view .react-calendar__tile': {
            padding: '2em 0.5em'
        },
        '&__tile': {
            maxWidth: '100%',
            padding: '10px 6.6667px',
            background: 'none',
            textAlign: 'center',
            lineHeight: '16px',
            '&:disabled': {
                backgroundColor: '#f0f0f0'
            },
            '&:enabled:hover, &:enabled:focus': {
                backgroundColor: '#e6e6e6'
            },
            '&--now': {
                background: '#ffff76',
                '&:enabled:hover, &:enabled:focus': {
                    background: '#ffffa9'
                }
            },
            '&--hasActive': {
                background: '#76baff',
                '&:enabled:hover, &:enabled:focus': {
                    background: '#a9d4ff'
                }
            },
            '&__tile--active': {
                background: '#006edc',
                color: 'white',
                '&:enabled:hover, &:enabled:focus': {
                    background: '#1087ff'
                }
            },
            '&--selectRange .react-calendar__tile--hover': {
                backgroundColor: '#e6e6e6'
            }
        }
    }
})

export {useStyles};