import React, { Component } from 'react';
import TaskItem from './TaskItem';
import { connect } from 'react-redux'

/*các state của store sẽ chuyển thành các props của components......*/
class TaskList extends Component {

  render() {
    console.log(this.props.todos);
    return (
          <div>
              <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                      <th className="text-center">STT</th>
                      <th className="text-center">Tên</th>
                      <th className="text-center">Trạng Thái</th>
                      <th className="text-center">Hành Động</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td>
                        <input type="text" className="form-control" />
                      </td>
                      <td>
                        <select className="form-control">
                          <option value={-1}>Tất Cả</option>
                          <option value={0}>Ẩn</option>
                          <option value={1}>Kích Hoạt</option>
                        </select>
                      </td>
                      <td />
                    </tr>
                    <TaskItem/>
                    <TaskItem/>
                    <TaskItem/>
                  </tbody>
                </table>
          </div>
        
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos : state.tasks 
  }
} 

export default connect(mapStateToProps, null)(TaskList);
