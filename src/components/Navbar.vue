<template>
<div id="navbar">
    <nav class="navbar navbar-default navbar-fixed-top">
        <!-- We use the fluid option here to avoid overriding the fixed width of a normal container within the narrow content columns. -->
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#">产品管理</a>
            </div>

            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-6">
                <ul class="nav navbar-nav">
                    <li class="active">
                        <router-link to="/list">图书列表</router-link>
                    </li>
                    <li>
                        <router-link to="/add">图书增加</router-link>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div>
    </nav>
</div>
</template>

<script>
export  default{
    name:'navbar'
}
</script>

<style>

</style>