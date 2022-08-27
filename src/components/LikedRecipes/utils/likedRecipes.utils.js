export let likedArr = {}
export const likeRecipes = (image, title, id) => { 

   likedArr = {
     ...image, ...title, ...id,
     image, title, id

  }
}
   
console.log(likedArr);

    