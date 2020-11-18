import React, {useState } from 'react'
import HtmlParser from 'react-html-parser';
import { uploadPost } from '../../services/PostService';
import CKEditor from '../elements/ckeditor'

export default function AddPost() {

    const [ckText, setCkText] = useState();
    const [description, setDescription] = useState("");
    const [title, setTitle] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [timeSpending, setTimeSpending] = useState("");



    const editText = (text) => {
        console.log(text);
        setCkText(text);
    }

    const handleSave = async () => {


        const test =new FormData();

        test.append('name',12)
        test.append('sdf',12)
        test.append('sdff',12)




        console.log(test);
        const postObject = {
            body: ckText,
            status: true,
            description,
            timeSpending,
            title,
            imgUrl
        }
         await uploadPost(postObject);
    }

    return (
<div className="wrapper">
        <div className="content-wrapper">
          <section className="content">
            <div className="container-fluid">
            {/* <CKEditor
                onChange={evt => editText(evt.editor.getData())}
            /> */}

            <CKEditor
                onChange={evt => editText(evt.editor.getData())}
            />
            <div className="form-group">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Description</label>
                        <input type="text" class="form-control" onChange={e => setDescription(e.target.value)} value={description} placeholder="Description" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">Title</label>
                        <input type="text" class="form-control" onChange={e => setTitle(e.target.value)} value={title} placeholder="Title" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">imgUrl</label>
                        <input type="text" class="form-control" onChange={e => setImgUrl(e.target.value)} value={imgUrl} placeholder="imgUrl" />
                    </div>

                    <div class="form-group">
                        <label for="exampleInputEmail1">timeSpending</label>
                        <input type="text" class="form-control" onChange={e => setTimeSpending(e.target.value)} value={timeSpending} placeholder="timeSpend" />
                    </div>

                    <button type="button" onClick={handleSave} class="btn btn-primary">Submit</button>
                </form>
            </div>
            <article className="about-section py-5">
                <div className="container">
                    {HtmlParser(ckText)}
                </div>
            </article>

        </div>
</section>        
        </div>
      </div>
    )
}
