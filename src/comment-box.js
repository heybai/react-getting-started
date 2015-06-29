var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList data={this.props.data}/>

                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        var commentNodes = this.props.data.map(function (comment) {
            return (
                <Comment author={comment.author}>
                    {comment.text}
                </Comment>
            );
        });

        return (
            <div className="commentList">
                {commentNodes}
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function () {
        var rawMarkup = marked(this.props.children.toString(), {sanitize: true});

        return (
            <div className="comment">
                <div className="commentAuthor">
                    {this.props.author}
                </div>

                <span dangerouslySetInnerHTML={{__html: rawMarkup}}/>
            </div>
        );
    }
});

var CommentForm = React.createClass({
    render: function () {
        return (
            <div className="commentForm">
                Hello, world! I am a CommentForm.
            </div>
        );
    }
});

var data = [
    {author: "Peter", text: "This is one comment"},
    {author: "Bob", text: "And this is *another one* comment"}
];

React.render(
    <CommentBox data={data}/>,
    document.getElementById('content')
);