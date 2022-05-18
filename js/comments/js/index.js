const data = {
  id: 2,
  comment_text: "Hi",
  author: "Sanskrati",
  post_id: 1,
  ancestry: null,
  archived: false,
  created_at: "2014-10-16T23:17:02.270Z",
  updated_at: "2014-10-16T23:17:02.270Z",
  is_moderated: false,
  avatar_url: null,
  slug: null,
  blog_id: 2,
  children: [
    {
      id: 3,
      comment_text: "Hi....",
      author: "Gungun",
      post_id: 1,
      ancestry: "2",
      archived: false,
      created_at: "2014-11-28T17:39:47.059Z",
      updated_at: "2014-11-28T17:39:47.059Z",
      is_moderated: false,
      avatar_url: null,
      slug: null,
      blog_id: 2,
      children: [
        {
          id: 4,
          comment_text: "hello",
          author: "Sanskrati",
          post_id: 1,
          ancestry: "2/3",
          archived: false,
          created_at: "2014-11-28T17:39:53.049Z",
          updated_at: "2014-11-28T17:39:53.049Z",
          is_moderated: false,
          avatar_url: null,
          slug: null,
          blog_id: 2,
          children: [
            {
              id: 5,
              comment_text: "hi",
              author: "Gungun",
              post_id: 1,
              ancestry: "2/3/4",
              archived: false,
              created_at: "2014-11-28T17:40:02.032Z",
              updated_at: "2014-11-28T17:40:02.032Z",
              is_moderated: false,
              avatar_url: null,
              slug: null,
              blog_id: 2,
              children: [],
            },
          ],
        },
      ],
    },
  ],
};

const root = document.getElementById("root");
class Comment {
  expand = false;
  reply = false;
  commentText = {};
  get Expand() {
    return this.expand;
  }
  set Expand(val) {
    this.expand = val;
  }
  get Reply() {
    return this.reply;
  }
  set Reply(val) {
    this.reply = val;
  }
  get CommentText() {
    return this.commentText;
  }
  set CommentText(val) {
    this.commentText = val;
  }
}
function showExapndedData(com, data, innerEle) {
  if (com.expand) {
    data?.children?.map((comment) => {
      {
        console.log(comment);
      }
      return showComments(comment, innerEle);
    });
  } else {
    console.log("line98", data.id);
    const child = document.getElementById(data.id);
    child.innerHTML = data.comment_text;
  }
}
function showComments(data, element) {
  const com = new Comment();
  const ele = document.createElement("div");
  const button = document.cre;
  ele.id = data.id;
  const br = document.createElement("br");
  if (data?.children?.length === 0) {
    ele.innerText = data?.comment_text;

    element.append(ele, br);
    return;
  } else {
    const innnerEle = document.createElement("div");
    innnerEle.id = data.id;
    ele.onclick = (e) => {
      e.stopPropagation();
      console.log("onClick");
      console.log("Line 100", com.expand);
      com.expand = !com.expand;
      showExapndedData(com, data, ele);
      console.log("line 102", com.expand);
    };
    console.log(com.expand);
    ele.innerText = data?.comment_text;
    element.appendChild(ele);

    innnerEle.style = {
      padding: "20px",
    };

    //.appendChild(innnerEle);
  }
}

showComments(data, root);
