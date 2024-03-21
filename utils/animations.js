export const titleanim = {
    initial: {
        y: '100%'
    },
    animate: (i) => ({
        y: '-2% ',
        transition: {
            duration: 1, delay: 0.25 * (i * 0.1), ease: [0.22, 1, 0.36, 1]
        }
    }),
}

export const headerAnim = {
    initial: {
        y: '-100%'
    },
    animate: {
        y: '0%',
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    },
    exit: {
        y: '-100%',
        transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] }
    },
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
            duration: 1, delay: 0.75, ease: [0.22, 1, 0.36, 1]
        }
    }
}

export const slideupgeneric = {
    initial: {
        opacity: 0,
        y: '100%',
        transition: {
            duration: 0.25, ease: [0.22, 1, 0.36, 1]
        }
    },
    animate: i => ({
        opacity: 1,
        y: '0%',
        transition: {
            duration: 0.25, delay: 0.25 * (0.25 * i) + 0.5, ease: [0.22, 1, 0.36, 1]
        }
    }),
    exit: i => ({
        opacity: 0,
        y: '100%',
        transition: {
            duration: 0.25, delay: 0.25 * (0.25 * i), ease: [0.22, 1, 0.36, 1]
        }
    })
}

export const slideupProject = {
    initial: {
        opacity: 0,
        y: 50,
        transition: {
            duration: 0.75, delay: 0.25, ease: [0.22, 1, 0.36, 1]
        }
    },
    animate: i => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75, delay: 0.25 * (0.25 * i), ease: [0.22, 1, 0.36, 1]
        }
    }),
}

export const toggleDescTeam = {
    initial: {
        opacity: 0,
        y: '2rem',
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5, ease: [0.22, 1, 0.36, 1]
        }
    },
    exit: {
        opacity: 0,
        y: '2rem',
        transition: {
            duration: 0.5, ease: [0.22, 1, 0.36, 1]
        }
    },
}
