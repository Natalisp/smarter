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
    <div className="thumb1"><i className="fa fa-thumbs-o-up" style={{fontSize: "68px"}}></i></div>
    <div className="thumb2"><i className="fa fa-thumbs-o-down" style={{fontSize: "68px"}}></i></div>
  </div>
    )
  }
}
