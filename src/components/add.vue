<template>
<div id="add">
    <h3>图书增加</h3>
    <form>
        <div class="form-group">
            <label for="name">书名</label>
            <input type="text" class="form-control" id="name" v-model="book.bookname">
        </div>
        <div class="form-group">
            <label for="cover">封面</label>
            <input type="text" class="form-control" id="cover" v-model="book.bookcover">
        </div>
        <div class="form-group">
            <label for="price">价格</label>
            <input type="text" class="form-control" id="price" v-model="book.price">
        </div>
        <button @click="add" class="btn btn-primary">增加</button>
    </form>
</div>
</template>

<script>
export default{
    name:'add',
    data(){
        return {book:{bookname:'',bookcover:'',price:''}}
    },
    methods:{
        add(){
            if(this.book.bookname&&this.book.bookcover&&this.book.price){
                this.$http.post('/books',this.book).then(res=>{
                    this.$router.push('/list')
                }).catch(err=>{
                    console.log(err);
                })
            }else{
                alert('请将图书信息填写完整');
            }
        }
    }

}
</script>

<style>

</style>