<template>
  <div id="app">
    <MxaSearchBox
    :roundedInput="true"
    :roundedButton="true"
    :customBackground="true"
    placeholderText="搜索物品"
    buttonText="查找"
    buttonColor="#ff6347"
    buttonTextColor="white"
    @search="handleSearch"
/>
<hr>
  <MxaNav :menuItems=menuItems :isDark="true" :isVertical=false />
  <hr>
  <MxadropDown dropdownMaxWidth="300px" buttonStyle="success" buttonText="展开">
      <h2>这是下拉框内的内容555555555555555555555555</h2>
      <p>可以在这里放置任意内容</p>
      <h1>h</h1>
      <h1>h</h1>
      <h1>h</h1>
      <h1>h</h1>
      <h1>h</h1>
      <h1>h</h1>
      <h1>h</h1>
  </MxadropDown> 
  <hr>
    <MxaButton type="warning"  @click="handleClick" round>警告</MxaButton>
    <MxaButton type="default" @click="handleClick" loading>加载中</MxaButton>
    <MxaButton type="success" disabled>禁用</MxaButton>
<hr>
    <MxauserCard
    :userId="'12345'"
    :username="'John Doe'"
    :avatarUrl="'https://s3.cn.bing.net/th?id=OJ.aVH5iUvDVS002Q&pid=msnjvdata'"
    :backgroundUrl="'https://s3.cn.bing.net/th?id=OJ.aVH5iUvDVS002Q&pid=msnjvdata'"
    :userPageUrl="'/user/12345'"
    :isFollowing="true"
    :followCount="100"
    :fanCount="200"
    v-on:handleFollow="(isFollowing) => {console.log('当前关注状态：',isFollowing)}"
    v-on:handleMessage="(userId) => {console.log('给用户',userId,'发消息')}"
    style="margin-top: 80px;"/>
    <hr>
  <MxaSwitch/> 
  <hr>
  <MxaForm />
 </div>

</template>

<script>
// import MyTest from './components/test.vue';

export default {
  name: 'App',
  components: {
    //  MyTest
  },
  data() {
    return {
      menuItems: [
        { title: 'Home', link: " " },
        { title: 'About', link: '/about' },
        { title: 'Services', link: '/services' },
        { title: 'Contact', link: '/contact' }
      ],
    };
  },
  methods: {
    handleSearch(searchTerm) {
      console.log('Searching for:', searchTerm);
      // 在此处执行您自定义的搜索逻辑，例如发起API请求等
    },
    handleFollow() {
      // 处理关注/取消关注逻辑
    },
    handleClick() {
     console.log("click me!")
    }
  }
};
</script>


<style>
/* #app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
} */
</style>