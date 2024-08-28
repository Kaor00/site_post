import React from "react";
import '../../public/npf.css';

function Post(props) {
  return (
    <div className="post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <hr></hr>
      <div className="blck">
        <button className="btn2" onClick={props.onComment}>Коментировать</button>
        <button className="btn1" onClick={props.onDelete}>Удалить</button>
      </div>
    </div>
  );
}

export default Post;
