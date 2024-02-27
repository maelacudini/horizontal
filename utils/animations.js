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

export const titleanim = {
    initial: {
        y: '100%'
    },
    animate: (i) => ({
        y: '-2% ',
        transition: {
            duration: 1, delay: 0.1 * (i * 0.1), ease: [0.22, 1, 0.36, 1]
        }
    }),
}

export const modalanim = {
    initial: {
        y: '-100%',
    },
    animate: {
        y: '0%',
        transition: {
            duration: 1, ease: [0.22, 1, 0.36, 1]
        }
    },
    exit: {
        y: '-100%',
        transition: {
            duration: 1, ease: [0.22, 1, 0.36, 1]
        }
    }
}

export const toggleanim = {
    initial: {
        y: '-0%',
        transition: {
            duration: 1, ease: [0.22, 1, 0.36, 1]
        }
    },
    animate: {
        y: '-100%',
        transition: {
            duration: 1, ease: [0.22, 1, 0.36, 1]
        }
    },
}