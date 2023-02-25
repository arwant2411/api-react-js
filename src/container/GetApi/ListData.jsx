import React, {Component} from 'react'

class ListData extends Component{
    render() {
        return (
            <div>
                <p>
                    {this.props.data.nama}, {this.props.data.alamat},
                    <button onClick={() => this.props.remove(this.props.data.id)}>Remove</button>
                    <button onClick={() => this.props.update(this.props.data)}>Update</button>
                    <button onClick={() => this.props.detail(this.props.data.id)}>Detail Function</button>
                    <a href={`/detail/${this.props.data.id}`}>Detail Link</a>
                </p>
            </div>
        )
    }
}

export default ListData