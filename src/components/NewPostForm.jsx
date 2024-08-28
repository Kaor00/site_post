import React, {useState} from "react";
import '../../public/npf.css'

function NewPostForm(props)  {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({title, content});
        setTitle('');
        setContent('');
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>добавить новый пост</h2>
            <div className="ff">
                <input
                    type="text"
                    id="title"
                    value={title}
                    placeholder="Введите заголовок"
                    onChange={(e) => setTitle(e.target.value)}
                />
            </div>
            <div className="ff">
                <textarea
                id="content"
                value={content}
                placeholder="Напишите что-нибудь"
                onChange={(e) => setContent(e.target.value)}
                />
            </div>
            <button type="submit">Добавить</button>
        </form>
    )
}

export default NewPostForm