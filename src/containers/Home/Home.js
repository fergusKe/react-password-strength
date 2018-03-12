import React, { Component } from 'react';

import PasswordStrength from '../../components/PasswordStrength/PasswordStrength.js';

class Home extends Component {
  render() {
    return (
      <div>
        <PasswordStrength />
      </div>
    );
  }
}

export default Home;
