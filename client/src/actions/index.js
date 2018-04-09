export function testList() {
    return {
        type: 'TEST',
        payload: [
            { id: 1, name: 'The Fellowship of the Ring' },
            { id: 2, name: 'The Two Towers' },
            { id: 3, name: 'Return of the King' },
        ]
    }
}
export function getOneFromList() {
    return {
        type: 'GETONE',
        payload: [
            { id: 1, name: 'The Fellowship of the Ring' },
        ]
    }
}