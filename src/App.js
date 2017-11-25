import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import { connect } from 'react-redux';
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';
import { getPosts, savePost, deletePost } from './actions/PostActions';
import PostCard from './Components/PostCard';


class App extends Component {
  componentWillMount() {
    this.props.getPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post, key) => {
       return (
         <PostCard key={key}>
             <h5 className="red-text text-lighten-1 card-panel cyan lighten-5 col s12">Title: {post.title}</h5>
             <p className="blue-text text-darken-2 card-panel cyan lighten-5 col s12">Body: {post.body}</p>
             <button className="col s2 right" onClick={() => {
               this.props.deletePost(key);
             }}>
             Delete </button>
          </PostCard>
       );
    });
  }

  renderField(field){
    return (
      <input type="text" placeholder={`Enter a ${field.label}...`} {...field.input} />
    );
  }

  onSubmit(values) {
    this.props.savePost(values).then(this.props.dispatch(reset('NewPost')));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div className="container">
        <div className="row">
              <div className="col s3">
                <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                  <Field
                    name="title"
                    component={this.renderField}
                    label="Title"
                    className=""
                    />
                  <Field
                    name="body"
                    component={this.renderField}
                    label="Body"
                    className=""
                    />
                  <button type="submit"> Post </button>
                </form>
              </div>
              <div className="col s7">
                {this.renderPosts()}
              </div>
          </div>
        </div>
    );
  }
}

let form = reduxForm({
  form: 'NewPost'
})(App);

form = connect(state => ({
  posts: state.posts
}), { getPosts, savePost, deletePost })(form);

export default form;
