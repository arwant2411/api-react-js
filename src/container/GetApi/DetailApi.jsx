import React, {Component} from 'react'
  
class DetailApi extends Component{

    // componentDidMount(){
    //     console.log(this.props.match.params.detailID)
    // }

    render() {
        console.log(this.props)
        return (
            
            <div>
                <p>
                    Nama
                </p>
                <p><a href={`/getapi`}>Kembali</a></p>
            </div>
        )
    }
}

export default DetailApi