var app = new Vue({ 
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});


var app2 = new Vue({
    el: '#app-2',
    data: {
        message: new Date() + '로드 되었다~'
    }
});


var app3 = new Vue({
    el: '#app-3',
    
    methods: {
        doSomething: function() {
            alert('hi!');
        }
    }
});
