import React from 'react'
import {
  Card,
} from 'reactstrap';

export default class Post extends React.Component{

    constructor(props){
        super(props);
        this.state = {
          editable: false
        }
        this.handleEdit = this.handleEdit.bind(this)
      }

      handleEdit(){
        if(this.state.editable){
            let title = this.title.value
            let content = this.content.value
            let date = this.date.value
            let id = this.props.post.user_id
            let post = {id: id, title: title, content: content, date: date}
            this.props.handleUpdate(post)
          }
        this.setState({
          editable: !this.state.editable
        })
      }

    render(){
        let title = this.state.editable ? 
        <input type='text' 
        ref={input => this.title = input} 
        defaultValue={this.props.post.title}/>
        :<h3>{this.props.post.title}</h3>
        
        let date = this.state.editable ? 
        <input type='text' 
        ref={input => this.date = input} 
        defaultValue={this.props.post.date}/>
        :<h3>{this.props.post.date}</h3>
        
        let content = this.state.editable ? 
        <input type='text' 
        ref={input => this.content = input} 
        defaultValue={this.props.post.content}/>
        :<p>{this.props.post.content}</p>
      
      return(
        <Card>
          <h2>{title}</h2>
          <h1>{date}</h1>
          <p>{content}</p>
          {/* <Button onClick={() => this.handleEdit()}>
          {this.state.editable? 'Submit' : 'Edit'}</Button>
          <Button onClick={() => 
            this.props.handleDelete(this.props.post.id)}>Delete</Button> */}
        </Card>
      )      
    }
  }