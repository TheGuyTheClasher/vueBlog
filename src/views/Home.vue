<template>
  <div class="home">
    <BlogPost v-if="!user" :post="welcomeScreen" />
    <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
    <div class="blog-card-wrap">
      <div class="container">
        <h1>View More Recent Blogs</h1>
        <div class="blog-cards">
          <BlogCard :post="post" v-for="(post, index) in sampleBlogCards" :key="index"/>
        </div>
      </div>
    </div>
    <div v-if="!user" class="updates">
      <div class="container">
        <h2>never miss a post. Register for a free account today!</h2>
        <router-link class="router-button" to="#">Register For Fireblogs<Arrow class="arrow arrow-light"/></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import BlogPost from '../components/BlogPost.vue'
import BlogCard from '../components/BlogCard.vue'
import Arrow from '../assets/Icons/arrow-right-light.svg'

export default {
  name: "Home",
  components: {BlogPost, BlogCard, Arrow},
  data(){
    return {
      welcomeScreen: {
        title: 'Welcome',
        blogPost: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
        welcomeScreen: true,
        photo: 'coding'
      },
      sampleBlogPost: [
          {
            title: 'this is some title',
            blogHTML: 'this is blog HTML',
            blogCoverPhoto: 'beautiful-stories',
          },
          {
            title: 'this is some title',
            blogHTML: 'this is blog HTML',
            blogCoverPhoto: 'designed-for-everyone',
          }
      ],
      
    }
  },
  computed: {
    sampleBlogCards(){
      return this.$store.state.sampleBlogCards;
    },
    user(){
        return this.$store.state.user;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3{
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates{
  .container{
    padding: 100px 25px;
    display: flex;
    align-items: center;
    flex-direction: column;
    @media (min-width: 800px){
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media (min-width: 800px) {
        margin-left: auto;
      }
    }

    h2{
      font-size: 32px;
      font-weight: 300;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media (min-width: 800px) {
        text-align: initial;
        font-size: 40px;

      }
    }
  }
}
</style>
