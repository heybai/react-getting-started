var CommentBox = React.createClass({
    render: function () {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />

                <CommentForm />
            </div>
        );
    }
});

var CommentList = React.createClass({
    render: function () {
        return (
            <div className="commentList">
                <Comment author="Peter">This is one comment</Comment>
                <Comment author="Bob">And this is another comment</Comment>
            </div>
        );
    }
});

var Comment = React.createClass({
    render: function () {
        return (
            <div className="comment">
                <div className="commentAuthor">
                    {this.props.author}
                </div>

                {this.props.children}
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

React.render(
    <CommentBox />,
    document.getElementById('content')
);