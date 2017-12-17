const styles = {
    reactBurguerMenu: {
        bmBurgerButton: {
            position: 'fixed',
            width: '36px',
            height: '30px',
            left: '36px',
            top: '36px'
        },
        bmBurgerBars: {
            background: '#ecf0f1',
        },
        bmCrossButton: {
            height: '24px',
            width: '24px'
        },
        bmCross: {
            background: '#bdc3c7'
        },
        bmMenu: {
            background: '#373a47',
            padding: '2.5em 1.5em 0',
            fontSize: '1.15em',
        },
        bmMorphShape: {
            fill: '#373a47'
        },
        bmItemList: {
            color: '#b8b7ad',
            padding: '0.8em'
        },
        bmOverlay: {
            background: 'rgba(0, 0, 0, 0.3)'
        }
    },

    headContainer: {
        height: '40vh'
    },

    headerWrapper: {
        height: '40vh',
        width: '100%',
        textAlign: 'center',
        position: 'absolute',
        top: 0,
        left: 0
    },

    description: {
        position: 'relative',
        lineHeight: 0.1,
        color: '#FFF'
    }
}

export default styles;