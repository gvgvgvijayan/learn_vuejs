var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'You loaded this page on ' + new Date().toLocaleString()
    }
});

var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Learn JS'},
            {text: 'Learn Vue'},
            {text: 'Build something awesome'}
        ]
    }
});

var app5 = new Vue({
    el: '#app-5',
    data: {
        message: 'Hello Vue.js!'
    },
    methods: {
        reverseMessage: function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});

var app6 = new Vue({
    el: '#app-6',
    data: {
        message: 'Hello World!'
    }
});

Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
});

var app7 = new Vue({
    el: '#app-7',
    data: {
        groceryList: [
            {id: 0, text: 'Apple'},
            {id: 1, text: 'Banana'},
            {id: 2, text: 'Clove'}
        ]
    }
});

var app8 = new Vue({
    el: '#app-8',
    data: {
        message: 'Hello',
        firstName: 'Vijayan',
        lastName: 'Ganesh'
    },
    computed: {
        reversedMessage1: function () {
            return this.message.split('').reverse().join('');
        },
        now: function () {
            return Date.now();
        },
        fullName: {
            get: function () {
                return this.firstName + ' ' + this.lastName;
            },
            set: function (newValue) {
                var names = newValue.split(' ');
                this.firstName = names[0];
                this.lastName = names[names.length - 1];
            }
        }
    },
    methods: {
        reversedMessage: function () {
            return this.message.split('').reverse().join('');
        }
    }
});

var app9 = new Vue({
    el: '#app-9',
    data: {
        question: '',
        answer: 'I cannot give you an answer until you ask a question!',
        img: '#'
    },
    watch: {
        question: function (newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.debouncedGetAnswer();
        }
    },
    created: function () {
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    methods: {
        getAnswer: function () {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)'
                return;
            }

            this.answer = 'Thinking...';

            var vm = this;

            axios.get('https://yesno.wtf/api')
                    .then(function (response) {
                        vm.answer = _.capitalize(response.data.answer);
                        vm.img = response.data.image;
                    })
                    .catch(function (error) {
                        vm.answer = 'Error! Could not reach the API. ' + error;
                    });
        }
    }
});

var app10 = new Vue({
    el: '#app-10',
    data: {
        isActive: true,
        hasError: true,
        error: null,
        hasError1: 'hero'
    },
    computed: {
        classObject: function() {
            return {
                active: this.isActive && !this.error,
                'text-danger': this.error && this.error.type === 'fatal'
            };
        }
    }
});

//Event:start
var app11 = new Vue({
    el: '#app-11',
    data: {
        counter: 0
    }
});

var app12 = new Vue({
    el: '#app-12',
    data: {
        name: 'Vue.js'
    },
    methods: {
        greet: function(event) {
            alert('Hello ' + this.name + '!');
            
            if(event) {
                alert(event.target.tagName);
            }
        }
    }
});

//Event:end

//Components: start
Vue.component('button-counter', {
    data: function() {
        return {
            count: 0
        };
    },
    template: '<button @click="count++">{{ count }}</button>'
});

new Vue({
    el: '#components-demo'
});
//Components: end

//Transitions & animation:start
var transitionDemo = new Vue({
    el: '#transition-demo',
    data: {
        show: true
    }
});

var transitionDemo1 = new Vue({
    el: '#transition-demo-1',
    data: {
        show: true
    }
});

var animationDemo = new Vue({
    el: '#animation-demo',
    data: {
        show: true
    }
});

var customTransitionDemo = new Vue({
    el: '#custom-transition',
    data: {
        show: true
    }
});

//Transitions & animation:end