
import {createUseStyles} from 'react-jss'

const useStyles = createUseStyles({
    '@keyframes rotateCenter': {
        from: {
            transform: 'rotate(0)',
            transformOrigin: 'center'
        },
        to: {
            transform: 'rotate(360deg)',
            transformOrigin: 'center'

        },
       
    },
    spinnerRing: {
        
        animationName: '$rotateCenter',
        animationDuration: '1s',
        animationTimingFunction: 'ease-in-out',
        animationIterationCount: 'infinite',
        animationFillMode: 'both' 
    },
    spinnerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '50vh'
    }

  })

export default function LoadingSpinner() {
    const classes = useStyles()

    return(
        <div className={classes.spinnerContainer}>
            <svg  width="120" height="120" viewBox="0 0 64 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Frame 4" >
                <circle id="spinner"  cx="32" cy="33" r="24" stroke="#FF4B1F" strokeWidth="5" strokeDasharray="10 10"  className={classes.spinnerRing}/>
                <g id="Frame 2">
                <g clipath="url(#clip0_3_7)">
                <rect x="16" y="17" width="32" height="32" rx="16" fill="#FF4B1F"/>
                <g id="M">
                <path d="M39.6982 17.348C40.2302 17.1453 40.9775 17.044 41.9402 17.044C42.9028 17.044 43.7642 17.1073 44.5242 17.234C43.7388 23.0607 43.1182 28.3427 42.6622 33.08C42.2315 37.792 41.9908 40.2747 41.9402 40.528C41.9148 40.7813 41.9022 41.0093 41.9022 41.212C41.9275 41.8707 42.2442 42.2 42.8522 42.2C44.3722 42.2 46.4875 40.452 49.1982 36.956C49.6795 38.2987 49.9582 39.198 50.0342 39.654C48.8182 41.5793 47.3488 43.1627 45.6262 44.404C43.9288 45.62 42.3202 46.228 40.8002 46.228C39.2802 46.228 38.2288 45.8353 37.6462 45.05C37.0635 44.2647 36.7722 43.3907 36.7722 42.428C36.7722 42.2 36.7975 41.7567 36.8482 41.098C36.9242 40.4393 37.4308 36.3353 38.3682 28.786L32.1362 43.188H28.9062L27.0442 29.014L24.3842 40.794C23.9535 42.6687 23.2442 44.0493 22.2562 44.936C21.2935 45.8227 20.2295 46.266 19.0642 46.266C17.8988 46.266 16.9488 45.924 16.2142 45.24C15.4288 44.5053 15.0362 43.4667 15.0362 42.124C15.0362 39.4387 17.1135 37.146 21.2682 35.246C23.5228 24.4287 24.7388 18.4373 24.9162 17.272C25.5242 17.12 26.3348 17.044 27.3482 17.044C28.3868 17.044 29.0962 17.0693 29.4762 17.12H29.7422L32.0982 34.79L39.6982 17.538V17.348ZM17.7342 41.478C17.7342 42.2887 18.0508 42.694 18.6842 42.694C19.1148 42.694 19.4695 42.352 19.7482 41.668C20.1028 40.832 20.3942 39.73 20.6222 38.362C18.6968 39.4513 17.7342 40.49 17.7342 41.478Z" fill="white"/>
                </g>
                </g>
                </g>
                </g>
                <defs>
                <clipPath id="clip0_3_7" >
                    <rect x="16" y="17" width="32" height="32" rx="16" fill="white "/>
                </clipPath>
                </defs>
            </svg>
        </div>

    )
}