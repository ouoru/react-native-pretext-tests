//4.1.2

class Stylist {
    constructor() {
        this.state = {
            startChar: '[',
            endChar: ']'
        }
    }

    format (props) {
        // ... format algorithm
        return <Text/>
    }
}

export const Context = new Stylist()

export class Pretext extends Component {
    render() {
        return Context.format(this.props)
    }
}

//4.1.3

class Stylist {
    //OLD: Referring to State
    format (props) {
        this.mergedConfig = Object.assign(this.state, props.config)
        // ... rest of algorithm
    }

    //NEW: Creating a local variable
    format (props) {
        const mergedConfig = Object.assign(this.state, props.config)
        // ... rest of algorithm
    }
}

//4.2.1a

export class Pretext extends React.PureComponent {
    render() {
        return Context.format(this.props)
    }
}

//4.3.1a
class Stylist {

    format (props) {
        //... algorithm
        return parts
    }
    
}

//4.3.1b
class Stylist {

    format (props) {
        //... algorithm
        return (
            <Text
                {...props}
                style={[this.defaultStyle, props.style]}
                children={parts}
            />
        )
    }
    
}

//4.3.2a

class Stylist {

    format (props) {
        //... algorithm

        if (parts.length === 1 && typeof parts[0] !== 'string') {
            return (
                React.cloneElement(parts[0], {
                    ...props,
                    style: [this.defaultStyle, props.style, parts[0].style],
                    children: parts[0]
                })
            )
        }

        return (
            <Text
                {...props}
                style={[this.defaultStyle, props.style]}
                children={parts}
            />
        )
    }
    
}