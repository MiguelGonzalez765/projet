<!--Miguel Gonzalez
 2 Mars 2021
  -->
<template>

 <div>
        <h1 :style="headingStyles">{{title}}</h1>
         <!--  maxins qui traduire l'étiquette de la page projet -->
        <h1 class="projets"> {{"Projets" | traduire(lang)}}</h1>
          <ul>
             <!--  parcours  list des projets v-for -->
          <li v-for="(projet, i) in listeProjets" :key="i">
            {{ projet.nom}}: {{ projet.langage}}
          </li>
          </ul>
    </div>
    
</template>
<!-- on import maxins pour la traduction-->
<script>

import {translations} from '../mixins/translations';
export default {
  name: "Projet",
   mixins: [translations],
  data() {
    return {
      headingStyles: {
        color: this.color
      },
      listeProjets: [
        { nom: "SpotiQuebec", langage:"REACT"},
        { nom: "Clinique Vétérinaire",langage: " PHP"},
        { nom: "Agence de voyages", langage: "Angular"},
         { nom: "Celda", langage: "Ccs"},
         { nom: "Photociti", langage: "Javascript"},
         { nom: "Gestionnaire de nouvelles", langage: "Php"},

      ]
    }
  },
    props: ["title", "color"]
}
</script>

<style scoped>
li{
  padding: 5px;
  margin: 2px;
  list-style-type: none;
}
.projets{
  margin-top: 50px;
  margin-left: 50px;
  text-align: center;
}
</style>