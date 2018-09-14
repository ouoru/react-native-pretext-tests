//2.1.1a

const sampleStyle = {
    fontSize: 20,
    fontWeight: 'bold'
}

const sampleText = (
    <Text 
        style={sampleStyle}
        numberOfLines={2}
    >Text goes here!</Text>
)

//2.2.2a

const styles = {
    testStyle1: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    testStyle2: {
        fontSize: 30,
        color: 'white'
    }
}

const sampleText = (
    <Text style={styles.testStyle1}>
        Text goes here!
    </Text>
)

//2.2.2b

const styles = {
    '$': {
        fontSize: 20,
        fontWeight: 'bold'
    },
    '%': {
        fontSize: 30,
        color: 'white'
    }
}

const Pretext = (children) => (
    <Text style={styles[children.charAt(0)]}>
        {children.substr(1)}
    </Text>
)

const sampleText = (
    <Pretext>
        %Text goes here!
    </Pretext>
)


//2.2.3a

const styles = {
    '$': {
        fontSize: 20,
    },
    '&': {
        fontSize: 30,
    },
    '#': {
        fontWeight: 'bold'
    },
    '%': {
        color: 'white'
    }
}

const Pretext = (children) => {
    let allStyles = {}
    let counter = 0

    while(styles[children.charAt(counter)]) {
        allStyles = Object.assign(styles[children.charAt(counter)], allStyles)
        counter++
    }
    
    return <Text style={allStyles}>
        {children.substr(counter)}
    </Text>
}

const sampleText = (
    <Pretext>
        {'&$Text goes here!'}
    </Pretext>
)

//2.2.4a

const Pretext = (children) => {
    let parts = children.split(' ')

    for (var i=0; i<parts.length; i++) {
        let counter = 0
        let allStyles = {}

        while(styles[children.charAt(counter)]) {
            allStyles = Object.assign(styles[children.charAt(counter)], allStyles)
            counter++
        }

        parts[i] = <Text style={allStyles}>{children.substr(counter)}</Text>
    }

    return <Text>{parts}</Text>
}

//2.2.5a

const startChar = '['
const endChar = ']'

const Pretext = (children) => {
    let parts = children.split(startChar)

    for (var i=0; i<parts.length; i++) {
        let counter = 0
        let allStyles = {}

        while(parts[i].charAt(counter) !== endChar) {
            allStyles = Object.assign(styles[parts[i].charAt(counter)], allStyles)
            counter++
        }

        parts[i] = <Text style={allStyles}>{children.substr(counter + 1)}</Text>
    }

    return <Text>{parts}</Text>
}

//2.4.1a

const Pretext = (children) => {
    let parts = children.split(startChar)

    for (var i=0; i<parts.length; i++) {
        parts[i] = styledPart(parts[i], {})
    }

    return <Text>{parts}</Text>
}

const styledPart = (part, allStyles) => {
    const char = part.charAt(0)
    const substr = part.substr(1)

    if (char !== endChar) {
        return styledPart(
            substr,
            Object.assign(allStyles, styles[char])
        )
    }

    return <Text style={allStyles}>{substr}</Text>
}

//2.4.2a

for (var i=0; i<parts.length; i++) {
    if (!parts[i]) {
        parts.splice(i, 1)
        i--
    }
    else if (parts[i].indexOf(endChar) !== -1) {
        parts[i] = styledPart(parts[i], {})
    }
}

//2.4.2b

if (!substr) return ""

if (char !== endChar) {
    return styledPart(
        substr,
        Object.assign(allStyles, styles[char])
    )
}

if (allStyles === {}) return substr

