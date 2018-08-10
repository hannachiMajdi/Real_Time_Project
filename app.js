class Channel extends React.Component{
	onClick(){
		console.log('hi bitch', this.props.name);
	}
	render(){
		return(
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