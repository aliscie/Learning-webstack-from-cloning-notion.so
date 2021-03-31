# Learning webstack from cloning notion.so
# intro
      * I need to level up my web dev skills by open source collaperation.
      * I like to learn by building an app like notion.so becuae it has all what I need.
# how this repo work
      * every git commit message discripe every step in the app to help you understand what i'm doing.
      * inside the code files their are comments that  the  start with the word problem: they are quastion about what I need to learn to build this app.


# the repo strecture.

     ## fronend folder:
          * src/apiHooks: has threes files each one of them is a function of crud operations used as a custom hooks.
               * useElements is the hook that desidte how the page shoudl look like.
               * useStyles is the hook that I can use it as an alternative to css file, but in this case I mentions the name of the stale  inside style={..styles.name} instead of giveing the lement a name then styling the name.
               * `useComponents` I use this hook to build premade component. For example, if I want to make an artical insdead of definng and h1 for the title then p for the paragraph I can just grap an artical template from it by PUT its elements data inside the useElements model,


     ## backend folder: is strectured exactly in the defualt django strecture.
           * the models are three moddles one called elements which has all the data that deside how to page should look like.
           * the styles models is a css alternative where I can create and update my stles and give them names and then I can mention them inside the elements model to activate them.
           * the component model is where I add pre made component to call it in one click.
           * I add new features to the app by creating a branch from the master with the name of the feachere then I merge it with the master. For example, I greated a branch calld PostgreSQl to add alter sqlite with PostgreSQl and after i finish it I will merge it to the master.
