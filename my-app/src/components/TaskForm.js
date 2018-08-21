import React, { Component } from 'react';
import {connect } from 'react-redux';
import * as actions from './../actions/index'
class TaskForm extends Component {

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name] : value
    });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    this.props.onAddTask(this.state);
    this.onClear();
    // this.onExitForm();
  }

  onClear = () =>{
    this.setState({
      id : '',
      name : '',
      status : false
    })
  }
  render() {

    return (
        <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Thêm Công Việc</h3>
              </div>
              <div className="panel-body">
                <form>
                  <div className="form-group">
                    <label>Tên :</label>
                    <input type="text" className="form-control" />
                  </div>
                  <label>Trạng Thái :</label>
                  <select className="form-control" required="required">
                    <option value={1}>Kích Hoạt</option>
                    <option value={0}>Ẩn</option>
                  </select>
                  <br />
                  <div className="text-center">
                    <button type="submit" className="btn btn-warning" onClick={this.onHandleSubmit}>Thêm</button>&nbsp;
                    <button type="submit" className="btn btn-danger">Hủy Bỏ</button>
                  </div>
                </form>
              </div>
        </div>
        
    );
  }
}

const mapStateToProps = (state) => {
  return {

  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAddTask : (task) => {
      dispatch(actions.addTask(task))
    }
  }
};

export default connect (mapStateToProps, mapDispatchToProps)(TaskForm);
