import React from "react";
// import Toggle from "./Toggle";
import './AccountSetting.scss'
import { Link } from "react-router-dom";

class AccountSetting extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            passwordUpdate: {
                password: '',
                repassword: ''

            },
            pDetails: {
                name: '',
                contactNo: ''
            },
            passwordMsg: '',
            pDetailsMsg: ''
        }


    }

    handleChangePassword = (event) => {
        let newState = { ...this.state.passwordUpdate }
        newState[event.target.name] = event.target.value
        this.setState({ passwordUpdate: newState });
        console.log(this.state.passwordUpdate)
    };
    handleChangePDetails = (event) => {
        let newState = { ...this.state.pDetails }
        if (event.target.name === 'contactNo') {
            let pattern = /[0-9]{10}/
            if (!event.target.value.match(pattern)) {
                this.setState({ pDetailsMsg: "Please Enter Valid Contact No!" })
            } else {
                this.setState({ pDetailsMsg: "" })
            }
        }
        newState[event.target.name] = event.target.value
        this.setState({ pDetails: newState });
    };

    submitPasswordUpdate = (e) => {
        e.preventDefault()
        console.log(e)
        this.setState({ passwordMsg: "Password Updated Successfully" })
        setTimeout(() => {
            this.setState({ passwordMsg: "" })
        }, 2000)
    }
    submitPDetailsUpdate = (e) => {
        e.preventDefault()
        this.setState({ pDetailsMsg: "Personal Details Updated Successfully" })
        setTimeout(() => {
            this.setState({ pDetailsMsg: "" })
        }, 2000)
    }

    render() {
        return <React.Fragment>
            <div className="main col-md-12">
                <div className="AccSetting col-md-6" >
                    <div>
                        <h4 className="col-md-12 float-left mb-4" >Change Password</h4>
                        <form onSubmit={this.submitPasswordUpdate} className="changePasswordForm form-inline">
                            <div className="form-group mb-2">
                                <label className="col-md-4"  >Enter New Password</label>
                                <input onChange={this.handleChangePassword} className="col-md-6 form-control" type="password" name="password" value={this.state.passwordUpdate.password} placeholder="Password" />
                            </div>
                            <div className="form-group mb-2">
                                <label className="col-md-4"  >Renter New Password</label>
                                <input onChange={this.handleChangePassword} className="col-md-6 form-control" type="password" name="repassword" value={this.state.passwordUpdate.repassword} placeholder="Password" />
                            </div>
                            <button type="submit" className="btn btn-block btn-primary mb-2">Submit</button>
                        </form>
                        <span className="text-success"><b>{this.state.passwordMsg}</b></span>
                    </div>
                    <hr className="seperator"></hr>



                    <Link to={"/MusicPlaying"}>Music</Link>
                </div>
            </div>





        </React.Fragment>
    }
}
export default AccountSetting

