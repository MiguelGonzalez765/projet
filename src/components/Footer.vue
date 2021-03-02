 <!--Miguel Gonzalez
 2 Mars 2021
  -->
<template>

<!-- On affiche la valeur de l'année-->
<div class="footer">
   <h1>{{ message }}</h1>
   <div v-show="currentYear">Copyright © Miguel Gonzalez.   {{ currentYear }} All rights reserved<a href="https://github.com/MiguelGonzalez765/1017examen2miguelgonzalez/blob/master/LICENSE">VOIR LICENSE</a></div>
</div>
</template>

<!-- Avec la propieté getCurrentYear on cherche l'année en cours dans le footer -->
<script>

export default {
name: "CurrentDate",
data: () => ({
    currentYear: "",
}),

props: {
   message: String
},
methods: {
  
  getCurrentYear: function () {
    return new Date().getFullYear();
  },
},
mounted: function () {
  this.currentYear = this.getCurrentYear();
},
};
</script>

<style>
.footer{
   background-color: #333;
    color: blanchedalmond;
     padding: 23px 30px; 
    margin-top: 20px;
}
a{
  color: red;
  text-decoration: none;
  margin-left: 30px;
}
</style>