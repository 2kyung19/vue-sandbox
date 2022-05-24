var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
});

// v-bind
var app2 = new Vue({ 
    el: '#app-2',
    data: {
        message: new Date() + '로드 되었다~'
    }
});

// v-on:click / @click
var app3 = new Vue({ 
    el: '#app-3',
    
    methods: {
        doSomething: function() {
            alert('hi!');
        }
    }
});

// v-model
var app4 = new Vue({ 
    el:'#app-4',

    data: {
        nick: 'billie.dev',
        name: 'billie',
        extension: 'dev'
    },
    computed:{
        get: function(){
            return this.nick.split('.').join(' ');
        },
        set: function(nickName){
            var full = nickName.split('.');
            this.name = full[0]
            this.extension = full[1]
        }
    }
})

// 전역 컴포넌트
Vue.component('app5-item', { 
    template: '<div> 전역 컴포넌트</div>'
})

var app5 = new Vue({
    el: '#app-5'
})

// 지역 컴포넌트
var app6Item = {
    template: '<div> 지역 컴포넌트</div>'
};

var app6 = new Vue({
    el:'#app-6',
    components:{
        'app6-item':app6Item
    }
});

// watch / api
var app7 = new Vue({
    el:'#app-7',
    data:{
        question:'',
        answer:'질문해라'
    },
    watch:{
        question: function(newQ) {
            this.answer = '입력 중...';
            this.getAnswer();
        }
    },
    methods:{
        getAnswer: function(){
            if (this.question.indexOf('?') === -1) {
                this.answer = '물음표써라';
                return
            }
            this.answer = '생각중';
            
            var vm = this // axios 안에서 this는 window로 잡힘
            axios.get('https://yesno.wtf/api')
                .then(function (res){
                    vm.answer = res.data.answer;
                })
                .catch(function(err){
                    vm.answer = 'err : ' + err
                })
        }
    }
});

// style
var app8 = new Vue({
    el:'#app-8',
    data:{
        message:'하위~',
        style1:{
            color:'red',
            fontSize:'20px',
        },
        style2:{
            display:'inline-block',
            backgroundColor:'black'
        },
    },
});