export default tests = [
    {
        case: 'Empty string without Prefix',
        text: 'I look like default text!'
    },
    {
        case: 'Empty string with a single prefix',
        text: '[g]The grass is green',
    },
    {
        case: 'String with 1 styled part',
        text: '[B]All text BOLD',
    },
    {
        case: 'Improper string formatting',
        text: '[[B]Hello there!'
    },
    {
        case: 'Improper string formatting',
        text: '[B]]]Hello there!'
    },
    {
        case: 'Extra config props',
        config: { styleStart: '*' },
        text: '*r] Red text with other styleStart'
    }
]