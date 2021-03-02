<template lang="html">

  <section class="accueil">
    <h1 v-if="!okProfile"> {{"Technologies" | traduire(lang)}}</h1>
     <Profile v-if="okProfile" name='profile'/>
             <div class="logies" v-else>
           <p>Le Web ouvert offre une opportunité incroyable aux personnes qui veulent créer des sites ou des applications en ligne. Pour tirer le meilleur parti de ces technologies, il faut savoir comment les utiliser. Vous trouverez ci-dessous les liens vers notre documentation à propos des technologies web. </p>
        </div>
  </section>

</template>

<script >
import Profile from '../views/Profile.vue'
import{translations} from '../mixins/translations';
  export default  {
    name: 'accueil',
    mixins:[translations],
    props: [],
    components: {
      Profile
    },
    mounted () {
    },
    data () {
      return {
        okProfile: false
      }
    },
    methods: {
    },
    computed: {
    },
    created() {
      let loggedIn = true;
  
      if (loggedIn) {
          this.okProfile = true;
      }
  },
}
</script>

<style scoped>
  
  .logies{
    text-align: justify;
    margin-left: 60px;
    margin-right: 60px;
  }
</style>