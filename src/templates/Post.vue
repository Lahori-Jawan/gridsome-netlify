<template>
  <!-- link -> https://slawinski.dev/blog/how-to-set-up-a-blog-with-headless-cms-using-gridsome-and-netlify/ -->
  <Layout>
    <div>
      <h1>{{ $page.post.title }}</h1>
      <div v-html="$page.post.content"></div>
    </div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    post (path: $path) {
      title
      content
    }
  }
</page-query>
