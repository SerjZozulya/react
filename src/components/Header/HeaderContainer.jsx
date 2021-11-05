 import React from 'react';
 import Header from "./Header";
 import axios from "axios";
 import {setAuthUserData} from "../../redux/auth-reducer";
 import {connect} from "react-redux";
 import {userAPI} from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        userAPI.getUserData().then ( data => {
            if (data.resultCode === true) {
                let {id, login, email} = data.data;
                this.props.setAuthUserData(id, email, login);
            }
        })
    }

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
})

export default connect(mapStateToProps,
    {setAuthUserData}
    )(HeaderContainer);