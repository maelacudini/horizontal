export const menu = {
    initial: {
        opacity: 0,
        x: 20,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.5, ease: [.215, .61, .355, 1]
        }
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: {
            duration: 0.5, ease: [.215, .61, .355, 1]
        }
    }
}

export const slidein = {
    initial: {
        scaleY: 0
    },
    animate: {
        scaleY: 0,
        transition: {
            duration: 1, ease: [0.22, 1, 0.36, 1]
        }
    },
    exit: {
        scaleY: 1,
        transition: {
            duration: 1, ease: [0.22, 1, 0.36, 1]
        }
    }
}

export const slideout = {
    initial: {
        scaleY: 1
    },
    animate: {
        scaleY: 0,
        transition: {
            duration: 1, ease: [0.22, 1, 0.36, 1]
        }
    },
    exit: {
        scaleY: 0,
        transition: {
            duration: 1, ease: [0.22, 1, 0.36, 1]
        }
    }
}

export const line = {
    initial: {
        y: '100%'
    },
    animate: {
        y: '0%',
        transition: {
            duration: 1, ease: [0.22, 1, 0.36, 1]
        }
    },
}

export const titleanim = {
    initial: {
        x: '-110%'
    },
    animate: {
        x: '0%',
        transition: {
            duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1]
        }
    },
}