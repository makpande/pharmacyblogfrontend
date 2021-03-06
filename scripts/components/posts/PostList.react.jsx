var React = require('react');
var WebAPIUtils = require('../../utils/WebAPIUtils.js');
var PostStore = require('../../stores/PostStore.react.jsx');
var ErrorNotice = require('../../components/common/ErrorNotice.react.jsx');
var PostActionCreators = require('../../actions/PostActionCreators.react.jsx');
var Router = require('react-router');
var Link = Router.Link;
var moment = require('moment');

var PostList = React.createClass({

  getInitialState: function() {
    return {
      posts: PostStore.getAllPosts(),
      errors: []
    };
  },

  componentDidMount: function() {
    PostStore.addChangeListener(this._onChange);
    PostActionCreators.loadPosts();
  },

  componentWillUnmount: function() {
    PostStore.removeChangeListener(this._onChange);
  },

  _onChange: function() {
    this.setState({
      posts: PostStore.getAllPosts(),
      errors: PostStore.getErrors()
    });
  },

  render: function() {
    var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    return (
      <div>
        {errors}
        <div className="row">
          <PostList posts={this.state.posts} />
        </div>
      </div>
    );
  }
});
  var PostList = React.createClass({
    render: function() {
      return (
        <ul className="large-8 medium-10 small-12 small-centered columns">
          {this.props.posts.map(function(post, index){
            return <PostItem post={post} key={"post-" + index}/>
          })}
        </ul>
      );
    }
});


var PostItem = React.createClass({
  render: function() {
    return (
      <li className="post">
        <div className="post__title">
          <Link to="post" params={ {postId: this.props.post.id} }>
            {this.props.post.title}
          </Link>
        </div>
        <div className="post__body">{this.props.post['abstract']}...</div>
        <span className="post__user">{this.props.post.user.username}</span>
        <span className="post__date"> - {moment(this.props.post.created_at).fromNow()}</span>
      </li>
      );
  }
});


    // render: function() {
    //     return (
    //       <div className="postlist">
    //         <h1>Posts</h1>
    //        {this.renderPosts()}
    //       </div>
    //     )
    //   },
    //
    //   renderPosts: function() {
    //     var errors = (this.state.errors.length > 0) ? <ErrorNotice errors={this.state.errors}/> : <div></div>;
    //       return (
    //         <div>
    //           {errors}
    //           <div className="row">
    //             <PostList posts={this.state.posts} />
    //           </div>
    //         </div>
    //       );
    //   }




module.exports = PostList;
