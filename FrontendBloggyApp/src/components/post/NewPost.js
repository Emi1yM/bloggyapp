import React from 'react'
import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';


const NewPost = (props) => {
    let formFields = {}
   
    return(
      <Form onSubmit={ (e) => { return props.handleFormSubmit(e.target.title.value, e.target.date.value, e.target.content.value, e)}
    }>
      <Label>Title:</Label>
       <Input name="title" placeholder='Enter a blog title'/>
       {/* <Input name="date" placeholder='Enter a date' /> */}
       <Label>Date:</Label> 
       <Input
          type="datetime"
          name="date"
          id="exampleDatetime"
          placeholder="__/__/____"
        />
        <Label>Begin Your Post:</Label>
       <Input type="textarea" cols="30" rows="30" name="content" placeholder='Hello World...'/>
       <button className="btn draw-border" >Submit</button>
      </Form>
    )
  }

  export default NewPost