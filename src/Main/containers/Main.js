import React, { Component } from 'react';
import MainComponent from '../components/Main'
import AboutInfo from '../components/AboutInfo'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as getData from '../modules/index'
import * as getCharacterInfo from '../modules/index'

class Main extends Component {
  constructor(props) {
      super(props);
      this.clickItem = this.clickItem.bind(this)
  }

  componentDidMount() {
    const { getData } = this.props.getData

    getData()
  }

  clickItem(e) {
    const { getCharacterInfo } = this.props.getCharacterInfo

    const id = e.target.id.charAt(e.target.id.length - 2)

    getCharacterInfo(id)
  }

  render() {
    const { content } = this.props.data
    const charcter = this.props.data.caracter

    return (
      <section>
        <MainComponent
          data={content || []}
          clickItem={this.clickItem}
        />
        {
          charcter &&
          <AboutInfo
            charcter={charcter}
          />
        }
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  getData: bindActionCreators(getData, dispatch),
  getCharacterInfo: bindActionCreators(getData, dispatch)
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(Main)
