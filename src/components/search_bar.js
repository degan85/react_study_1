import React, { Component } from 'react';
// const Component = React.Component; 와 동일. (ES6)

// 다양한 기능을 위해 함수가 아니라 class로
// React.Component
class SearchBar extends Component {
    /*
        state는 자바스크립트 객체
        클래스 기반의 컴포넌트에 이용
        각각의 클래스 기반 컴포넌트는 자체 복사된 스테이트를 갖고 있음
        함수형 기반 컴포넌트는 스테이트를 갖고 있지 않음
        클래스는 props 쓸 때 this.props 함수는 props
     */
    constructor(props) {
        super(props);

        // constructor(생성자) 함수 안에서 초기화
        this.state = { term: '' };
    }

    render() {
        // state를 사용할 때 setState로 사용
        // setState나 state가 변경될 때마다 컴포넌트에 자동적으로 리렌더링 신호를 보냄
        // 렌더링 메소드의 모든 업데이트 된 정보를 DOM에 푸쉬 함
        return (
            <div className="search-bar">
                <input
                    value={this.state.term}
                    onChange={ event => this.onInputChange(event.target.value) } />
            </div>
        );
    }

    onInputChange(term) {
        this.setState({term});
        this.props.onSearchTermChange(term);
    }
}

export default SearchBar;