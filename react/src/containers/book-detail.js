import React, {Component} from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {

  render() {
    console.log(this.props.book);
    if(!this.props.book){
      return <div>Select a book to get detail</div>
    }

    return (
      <div>
        <h3>details for : </h3>
        <div>{this.props.book.title}</div>
        <div>page : {this.props.book.page}</div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);