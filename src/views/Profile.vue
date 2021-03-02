<!--Miguel Gonzalez
 2 Mars 2021
  -->
<template>
  <div>
            <h1 id="nom">Miguel Gonzalez</h1>
            <div id="profil">
             <div class="flex">   
                <div class="flex">
                    <!--  maxins qui traduire l'étiquette de la page profile -->
                  <h1 > {{"Contact" | traduire(lang)}}</h1>
                    <h4>Développeur Front-End Junior</h4>
                    <h2>Passionné d’informatique depuis mon plus jeune age, je n’ai cessé de suivre l’évolution de ces technologies</h2>
                </div>
                <!-- Langages de programmation -->
                <div class="flex">
                    <h1 > {{"Langages" | traduire(lang)}}</h1>
                    <ul>
                        <li>HTML 5</li>
                        <li>CSS 3</li>
                        <li>Jquery</li>
                        <li>Ccs</li>
                        <li>Reat</li>

                    </ul>
                </div>
           </div>
           </div>
           <div class="flex"> 
            <div class="flex">
                <!-- Formations -->
                <div class="flex">
                    <h1 > {{"Etudes" | traduire(lang)}}</h1>
                    <h3>Soutien informatique</h3>
                    <h2>CFP Fierbourg  Québec</h2>
                    <h3>Attestation d'études collégiales en développement Front-End</h3>
                    <h2>Cégep de Trois-Rivières Québec</h2>
                    
                
                <!-- Contact -->
                <div class="flex">
                    <h1 > {{"Experience" | traduire(lang)}}</h1>
                    <table>
                       
                        <tbody>
                            <tr>
                                <td>Maîtrise de plusieurs types de langages informatiques et capable de travailler sur différentes plateformes. Autonome mais capable de travailler en équipe. Grande disponibilité.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                </div>
                <!-- Expériences -->
                <div class="flex">
                   <h1 > {{"Cont" | traduire(lang)}}</h1>
                    <h3>Miguel Gonzalez</h3>
                    <h2>midas765@hotmail.com</h2>
                </div>
            </div>   
        </div>
    </div>
</template>

<script>
/*  import le mixins qui fait la traduction  */
import {translations} from '../mixins/translations';
export default {
  name: 'profil',
  mixins: [translations],
}
</script>

<!-- style -->
<style scoped>
    h1{
        text-align: center;
        color: #eceef0;
    }
    h2, h4{
        text-align: center;
        color: #eceef0;
    }
    h3{
        text-align: center;
        color: #eceef0;
    }
    #profil{
        text-align: center;
        display: flex;
        flex-flow: row wrap;
        justify-content: flex-start;
        align-items: flex-start;
        align-content:space-between;
        background-size: cover;
        
    }
    .flex{
        flex-grow: 1;
        flex-basis: auto;
        align-self: auto;
        border: 2px solid #d51a1a;
        margin: 2%;
        background-color: rgba(12, 5, 5, 0.9);
    }
    ul{
        list-style-type: none; 
    }
    table{
        margin: auto;
    }
    td, th, li{
        color: #eceef0;
    }
    #nom{
        font-size: 20px;
        color: rgb(202, 12, 12);
    }
</style>