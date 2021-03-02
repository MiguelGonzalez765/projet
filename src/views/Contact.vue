<!--Miguel Gonzalez
 2 Mars 2021
  -->
<template>
<div>
  <!--  maxins qui traduire l'étiquette du formulaire -->
<h1 > {{"Titre" | traduire(lang)}}</h1>
  <section class="container cont">
    <div class="row">
  <form v-on:submit.prevent class="col-6 m-auto text-left">
    <div class="form-group">
      <label for="nom">{{"Nom" | traduire(lang)}} </label>
      <input type="text"  class="form-control" name="nom" id="nom">
    </div>

    <div class="form-group">
      <label for="prenom">{{"Prenom" | traduire(lang)}}</label>
      <input type="text" class="form-control" name="prenom" id="prenom">
    </div>

    <div class="form-group">
      <label for="courriel">{{"Courriel" | traduire(lang)}}</label>
      <input type="email" class="form-control" name="courriel" id="courriel">
    </div>

    <div class="form-group">
      <label for="cateorie">{{"Categorie" | traduire(lang)}}</label>
      <select name="categorie" id="cateorie" class="form-control">
      <option v-for="categorie in categories" :key="categorie.nom">{{ categorie.nom}}</option>
      </select>
    </div>
    <button type="button" class="btn btn-primary">{{"Soumettre" | traduire(lang)}}</button>
  </form>
    </div>
  </section>
</div>
</template>

<script>
/*  import le mixins qui fait la traduction */
import {translations} from "../mixins/translations";
export default {
  name: "contact",
  mixins: [translations],
  props: [],
  mounted () {
    },
  data() {
    return {
      /*  Un dropdown que l’on remplira avec un tableau que l’on parcourra avec une directive v-fo */
      categories: [
        {nom: "Notes"},
        {nom: "Travails"},
        {nom: "Cours"},
        {nom: "Activités"}
      ]
    }
  }
}
</script>

<style scoped>
.cont{
  border: solid 2px;
  color: rgb(61, 59, 59);
}
.form-group{
margin-top: 20px;

}
label{
  margin-right: 10px;
}
.btn{
  margin-top: 20px;
  margin-bottom: 20px;
}

</style>