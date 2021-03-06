import React, { PureComponent } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { updateTitleAsync } from 'actions/page'

@connect(
  state => ({ title: state.page.title }),
  dispatch => bindActionCreators({ updateTitleAsync }, dispatch)
)
class Page extends PureComponent {
  handleClick = () => {
    this.props.updateTitleAsync('good boy!')
  }

  render() {
    return <h1 onClick={this.handleClick}>{this.props.title} yo!</h1>
  }
}

export default Page
