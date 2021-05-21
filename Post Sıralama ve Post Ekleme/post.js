
const posts = [
  {title: 'Post Başlık 1', detail: 'Post Detay 1' },
  { title: 'Post Başlık 2', detail: 'Post Detay 2'},
  {title: 'Post Başlık 3', detail: 'Post Detay 3' },
];

const listPosts = () => {
  posts.map((post) => {
    console.log(post.title, post.detail);
  });
};

const addPost = (newPost) => {
  const promise1 = new Promise((resolve, reject) => {
    posts.push(newPost);
   
    //reject('BIR HATA OLUSTU');
  });

  return promise1;
};
/*
async function showPosts() {
  try {
    await addPost({ title: "Post Başlık 4", detail: "Post Detay 4" });
    listPosts();
  } catch (error) {
    console.log(error);
  }
}
showPosts();
*/
addPost({ title: 'Post Başlık 4', detail: 'Post Detay 4' })
  .then(() => {
    console.log("YENI LISTE");
    listPosts();
  })
  .catch((error) => {
    console.log(error);
  });

listPosts();

