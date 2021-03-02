<!--Miguel Gonzalez
 2 Mars 2021
  -->
<!-- Menu avec mixins que fait la traduction  -->

<template lang="html">

  <section class="header">
 <h1>{{ title }}</h1>
  <ul>
      <div>
        <li>        
          <router-link to="/Accueil">{{"Home" | traduire(lang)}}</router-link>
<!-- renders to  Accueil-->
               

        </li>  
        <li>        
          <router-link to="Projet">{{"Proy" | traduire(lang)}}</router-link>
<!-- renders to Projet-->
             

        </li> 
        <li>        
          <router-link to="Contact">{{"contact" | traduire(lang)}}</router-link>
<!-- renders to Contact -->
              

        </li>
        
       
      </div>  
       
  </ul>
  
 </section>
 
</template>
<!-- on import maxins pour la traduction-->
<script>

import {translations} from '../mixins/translations';
export default {
  name: 'header',
  mixins: [translations],
  props: {
    title: String
  }

}
</script>



<style scoped>
li:hover,
li.router-link-active,
li.router-link-exact-active {
   background-color: #3f3d3d;
   cursor: pointer;
   
}
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #101213;
  box-shadow:0 1px 1px #ccc;
  border-radius:2px;
}
li,
li:last-child {
  border-right: none;
}
li {
  float: left;
}
li, .link{
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}
a   {
  color: rgb(247, 242, 244);
  text-decoration:none;
}


 </style>