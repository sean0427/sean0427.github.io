var Hello = React.createClass({
    render: function(){
        return <div>Hello {this.props.name}</div>;
    }
});
ReactDOM.rander(
    <Hello name="World" />,
    document.getElementById('container')
);
