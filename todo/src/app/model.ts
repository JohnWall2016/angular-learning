/*
var model = {
    user: 'Adam',
    items: [
        {action: 'Buy Flowers', done: false},
        {action: 'Get Shoes', done: false},
        {action: 'Collect Tickets', done: true},
        {action: 'Call Joe', done: false}
    ]
};
*/

export class TodoItem {
    action: string;
    done: boolean;

    constructor(action: string, done: boolean) {
        this.action = action;
        this.done = done;
    }
}

export class Model {
    user: string;
    items: TodoItem[];

    constructor() {
        this.user = 'Adam';
        this.items = [
            new TodoItem('Buy Flowers', false),
            new TodoItem('Get Shoes', false),
            new TodoItem('Collect Tickets', true),
            new TodoItem('Call Joe', false)
        ];
    }
}