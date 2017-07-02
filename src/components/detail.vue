<template>
<div id="detail">
    <h3>{{book.bookname}}-详情</h3>
    <div class="panel panel-warning">
        <div class="panel-heading">
            <span v-show="!flag">{{book.bookname}}</span>
            <input type="text" v-show="flag" v-model="book.bookname">
        </div>
        <div class="panel-body">
            <img :src="book.bookcover" alt="">
        </div>
        <div class="panel-footer">
            价格：<span v-show="!flag">{{book.price}}</span>
            <input type="text" v-show="flag" v-model="book.price">
            <button class="btn btn-danger" v-show="!flag" @click="del">删除</button>
            <button class="btn btn-warning" v-show="!flag" @click="flag=true">修改</button>
            <button class="btn btn-primary" v-show="flag" @click="update">确认修改</button>
        </div>
    </div>
</div>
</template>

<script>
export default{
    name:'detail',
    data(){
        return {id:null,book:{id:'',bookname:'',bookcover:'',price:''},flag:false}
    },
    beforeMount(){
        this.id=this.$route.params.id;
        this.$http.get('/books?id='+this.id).then(res=>{
            this.book=res.body;
        }).catch(err=>{
            console.log(err)
        })
    },
    methods:{
        del(){
            this.$http.delete('/books?id='+this.id).then(res=>{
                this.$router.push('/list');
            }).catch(err=>{
                console.log(err);
            })
        },
        update(){
            this.$http.put('/books',this.book).then(res=>{
                this.$router.push('/list');
            }).catch(err=>{
                console.log(err);
            })
        }
    }

}
</script>

<style>

</style>