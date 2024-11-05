import React from 'react';
import { Button } from '../../pages/NotFound/NotFoundPage.styles';

class BackButton extends React.Component {
  handleBack() {
    window.history.back(); // 이전 페이지로 돌아가기
  }

  render() {
    return (
      <Button onClick={this.handleBack.bind(this)}>
        이전 페이지로 돌아가기
      </Button>
    );
  }
}

export default BackButton;
