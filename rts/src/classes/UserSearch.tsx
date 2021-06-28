import { Component } from 'react';

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

interface User {
  name: string;
  age: number;
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick = () => {
    const foundUser = this.props.users.find(
      (user) => this.state.name === user.name
    );

    this.setState({ name: foundUser });
  };

  render() {
    return (
      <div>
        <input
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={this.onClick}>Search</button>
        <br />

        <div>
          {this.state.user?.name}
          {this.state.user?.age}
        </div>
      </div>
    );
  }
}

export default UserSearch;
