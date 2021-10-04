import { FormatIndentDecreaseTwoTone } from '@material-ui/icons';
import React from 'react';

function Welcome(props) {
  return <p>Hello, {props.name}</p>
}

export class ListName extends React.Component {
  render() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Mike" />
        <Welcome name="Kaz-" />
      </div>
    );
  }
}

function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.author.avatarUrl}
      alt={props.author.name}
    />
  );
}

function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.author} />
      <div className="UserInfo-name">
        {props.author.name}
      </div>
    </div>
  );
}

function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {FormatDate(props.date)}
      </div>
    </div>
  )
}
