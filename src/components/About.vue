<template>
  <div class="about">
    <h1>{{ msg }}</h1>
    <h2>站内栏目</h2>
    <ul>
      <li><a href="/about/" target="_blank">关于果拾网</a></li>
      <li><a href="/story/" target="_blank">果拾网的故事</a></li>
      <li><a href="/history/" target="_blank">果拾网的历史</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">文章归档</a></li>
    </ul>
    <h2>社交信息</h2>
    <ul>
      <li><a href="https://weibo.com/yunwangjun" target="_blank">新浪微博</a></li>
      <li><a href="https://github.com/yunwangjun" target="_blank">GitHub</a></li>
      <li><a href="https://twitter.com/yunwangjun" target="_blank">Twitter</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: '果拾网介绍'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
