class Channel extends React.Component{
	onClick(){
		console.log('hi bitch', this.props.name);
	}
	render(){
		return(
				<li onClick={this.onClick.bind(this)}>{this.props.name}</li>
			)
	}
}
class ChannelList extends React.Component{

	render(){
		return (
			<ul>
				<Channel name='Hardware Sujpport'/>
			</ul>
			)
	}
}
ReactDOM.render(<ChannelList/>, document.getElementById('app'));