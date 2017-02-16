class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      content: "",
      description: ""
    }
  }

  componentDidMount () {
    $.ajax({
      type: 'GET',
      url: window.location.href + "/" + "words",
      success: (data) => {
        this.setState({
          content: data[0].content,
          description: data[0].description
        })
      }
    })
  }


  render() {
    return (
      <div>
      <div className="container">
        <div className="modal">
          <h3 className="word">{this.state.content.toUpperCase()}</h3>
          <div className="description">{this.state.description}</div>
      </div>
    </div>
    <div><i className="fa fa-thumbs-o-up"></i></div>
  </div>
    )
  }
}
