import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import './editNote.css'

export default class EditNote extends Component{
  constructor(props) {
    super(props)
    this.state = { text: ''}
    this.handleChange = this.handleChange.bind(this)
  }


handleChange(value){
  this.setState({text: value})
}

modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline','strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
}

formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
]


render() {
  return (
        <div className="edit-note">
          <h6> Choississez une catégorie </h6>

          <form>
            <label htmlFor='new-title'> Créez Nouvelle catégorie </label>
            <input type="text" id="new-title" name="new-title"/>

            <br/>
            <label htmlFor='new-title'> OU choississez une catégorie </label>
            <br/>
            <select name="catgory" id="category">
                <option value=""> cat 1</option>
                <option value=""> cat 1</option>
                <option value=""> cat 1</option>
                <option value=""> cat 1</option>
            </select>

            <input type="submit" value="Valider"></input>
          </form>

          <ReactQuill formats={this.formats} modules={this.modules} value={this.state.text} onChange={this.handleChange}>

          </ReactQuill>

          <button id="submit-note"> Modifier </button>
      </div>
                    
                    
    
  )
}



}
