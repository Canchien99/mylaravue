<template>
    <div class="left-sidebar">
        <div class="logo">
			<a href="#welcome">
				<h1>welcome</h1>
			</a>
		</div>
        <nav class="left-nav">
			<ul id="nav">
                <li class="dropdown">
                    <a data-toggle="collapse" data-target="#nav-info" href="#">
                        <img src="../../assets/logo.png" alt="avatar" width="20px" height="20px"> {{user.name}}<span class="sub-icon"></span>
                    </a>
                    <div id="nav-info" class="collapse">
                        <ul class="nav-slt">
                            <li><a href=""><i class="fas fa-id-card"></i> Profile</a></li>
                            <li @click="logoutUser"><a href="javascript:void(0)"><i class="fas fa-sign-out-alt"></i> Logout</a></li>
                        </ul>
                    </div>
                </li>
                <li class="current"><router-link :to="{ name: 'dashboard'}"><i class="fas fa-tachometer-alt"></i>  Dashboard</router-link></li>
                <li class="dropdown">
                    <a data-toggle="collapse" data-target="#nav-cate" href="#"><i class="fas fa-stream"></i> Category <span class="sub-icon"></span></a>
                    <div id="nav-cate" class="collapse">
                        <ul class="nav-slt">
                            <li><router-link :to="{ name: 'createpost'}"><i class="fas fa-list-alt"></i> List Category</router-link></li>
                            <li><router-link :to="{ name: 'createpost'}"><i class="fas fa-plus-square"></i> Add Category</router-link></li>
                        </ul>
                    </div>
				</li>
                <li class="dropdown">
                    <a data-toggle="collapse" data-target="#nav-news" href="#"><i class="fas fa-newspaper"></i> News <span class="sub-icon"></span></a>
                    <div id="nav-news" class="collapse">
                        <ul class="nav-slt">
                            <li><router-link :to="{ name: 'listpost'}"><i class="fas fa-list-alt"></i> List News</router-link></li>
                            <li><router-link :to="{ name: 'createpost'}"><i class="fas fa-plus-square"></i> Add News</router-link></li>
                        </ul>
                    </div>
                </li>
                <li class="dropdown">
                    <a  href=""><i class="fas fa-comments"></i> manage Comment</a>
                </li>
                <li class="dropdown">
                    <a data-toggle="collapse" data-target="#nav-user" href="#"><i class="fas fa-address-book"></i> User Account <span class="sub-icon"></span></a>
                    <div id="nav-user" class="collapse">
                        <ul class="nav-slt">
                            <li><a href=""><i class="fas fa-list-alt"></i> List User</a></li>
                            <li><a href=""><i class="fas fa-user-plus"></i> Add User</a></li>
                        </ul>
                    </div>
                </li>

			</ul>
		</nav>
    </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
    name: 'LeftSidebar',
    created(){
        this.getUser()
    },
    computed:{
        ...mapGetters('auth',['user'])
    },
    methods:{
        ...mapActions('auth',['getUser','logout']),
        logoutUser(){
            this.logout();
            this.$router.push({name: 'login'});
        }
    }
}
</script>

<style>
    a, a:hover, a:focus{
        text-decoration: none;
        outline: 0;
    }
    h1, h2, h3,
    h4, h5, h6 {
        color: #333;
        margin:0;
        font-weight: normal;
    }

    h1 { font-size: 28px;}
    h2 { font-size: 24px;}
    h3 { font-size: 18px;}
    h5 { font-size: 16px;}
    h6 { font-size: 14px;}
    .syntaxhighlighter {
        border: 1px solid #efefef;
        max-height: 100% !important;
        padding: 20px 0;
    }

    .main-content{
    margin: 0 5%;
    }

    .left-sidebar {
        background-color: teal;
        min-height: 100%;
        position: fixed;
        width: 230px;
        overflow-x: hidden;
        z-index: 1;
    }

    .logo {
        padding-bottom: 30px;
        padding-left: 30px;
        padding-top: 70px;
    }
    .logo h1{
        color: #fff;
        font-weight: 700;
        text-transform: uppercase;
    }
    .left-nav ul {
        margin: 0;
        padding: 0;
        font-size: 14px;
    }

    .left-nav ul li a {
        color: #fff;
        display: block;
        padding: 10px 35px;
        -webkit-transition: all 0.3s ease-in 0s;
        -moz-transition: all 0.3s ease-in 0s;
            -ms-transition: all 0.3s ease-in 0s;
            -o-transition: all 0.3s ease-in 0s;
                transition: all 0.3s ease-in 0s;
    }

    .left-nav ul li a:hover, .left-nav ul li .current {
        background-color: #fff;
        color: #000;
    }

    #main-wrapper {
        float: left;
        margin-left: 18%;
        width: 82%;
    }

    .content-header {
        border-bottom: 1px solid #ddd;
        border-top: 1px solid #ddd;
        margin-top: 30px;
        padding: 30px 0 35px;
        text-align: center;
    }


    #nav .nav-slt{
        margin-left: 20px;
    }

    #nav .sub-icon::after{
        content: '\203A';
        float: right;
        transform: rotate(180deg);
    }
    #nav .dropdown:hover .sub-icon::after{
        transform: rotate(90deg);
    }

    .content-body td a{
        color: #333;
        margin-left: 10px;
    }

    .content-body .action{
        width: 10%;
    }

    .dashboard-body{
        width: 33%;
        margin: 3em 27em;
    }
    .router-link-active{
        background: #00dd93;
    }
</style>