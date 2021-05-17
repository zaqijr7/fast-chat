/*eslint-disable react-hooks/exhaustive-deps*/
import React, {Component} from 'react';
import io from '../helpers/socket';
import {connect} from 'react-redux';
import {historyInteractions, getMessageById} from '../redux/action/chat';

class Root extends Component {
  componentDidMount() {

    io.onAny((params) => {
      const {id_user} = this.props.auth.user;
      const {token} = this.props.auth;
      const {id} = this.props.chat
      if (`SEND_CHAT_TO_${id_user}` === params) {
        io.on(`SEND_CHAT_TO_${id_user}`, (msg) => {
          this.props.getMessageById(id, token);
          this.props.historyInteractions(token);
        });
      }
    });
  }
  render() {
    return <>{this.props.children}</>;
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  chat: state.chat.chatFocus,
});

const mapDispatchToProps = {
  historyInteractions,
  getMessageById,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
