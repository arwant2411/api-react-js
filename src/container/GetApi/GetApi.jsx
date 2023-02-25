import React, {Component} from 'react'
import ListData from './ListData'
import axios from 'axios'

class GetApi extends Component{
    state = {
        post: [],
        formData: {
            nama: '',
            alamat: ''
        },
        isUpdate: false
    }

    getDataApi = (data) => {
        axios.get('https://akademik.ahis-web.com/api_test/getData')
            .then(response => {
                // console.log(response.data);
                this.setState({
                    post: response.data
                })
            })
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        //     .then(response => response.json())
        //     .then(json => {
        //         this.setState({
        //             post: json
        //         })
        //     })

        this.getDataApi()
    }

    handleRemove = (data) => {
        // console.log(data)
        axios.delete(`https://akademik.ahis-web.com/api_test/getDelete/${data}`)
            .then(response => {
                console.log(response.data.pesan);
                this.getDataApi()
            })
    }

    handleForm = (event) => {
        let formDataNew = {...this.state.formData} //copy formData
        formDataNew[event.target.name] = event.target.value //cara cepat melempar value, usahakan nama & field sama

        this.setState({
            formData : formDataNew
        }, () => {
            // console.log(`new data : `, this.state.formData)
        })

    }

    postApi = () => {
        axios.post(`https://akademik.ahis-web.com/api_test/getInsert`, this.state.formData)
            .then(response => {
                // console.log(response.data.pesan);
                this.getDataApi()
                this.setState({
                    formData: {
                        nama: '',
                        alamat: ''
                    }
                })
            }, (error) => {
                console.log(`error: ${error}`)
            })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.state.isUpdate){
            this.putApi()
        }
        else{
            this.postApi()
        }
    }

    handleUpdate = (data) => {
        console.log(data)
        this.setState({
            formData: data,
            isUpdate: true
        })
    }

    putApi = () => {
        axios.put(`https://akademik.ahis-web.com/api_test/getInsert/${this.state.formData.id}`, this.state.formData)
            .then(response => {
                console.log(response.data.pesan);
                this.getDataApi()
                this.setState({
                    isUpdate: false,
                    formData: {
                        nama: '',
                        alamat: ''
                    }
                })
            }, (error) => {
                console.log(`error: ${error}`)
            })
    }

    handleDetail = (id) => {
        console.log(id)
        this.props.history.push(`/detail/${id}`)
    }

    render() {
        return (
            <div>
                <input type="text" name='nama' placeholder='nama' value={this.state.formData.nama} onChange={this.handleForm} /><br />
                <input type="text" name='alamat' placeholder='alamat' value={this.state.formData.alamat} onChange={this.handleForm} /><br />
                <button onClick={this.handleSubmit}>Save</button>
                <hr />
                <h2>List Data</h2>
                <hr />
                {
                    this.state.post.map(post => {
                        return <ListData key={post.id} data={post} remove={this.handleRemove} update={this.handleUpdate} detail={this.handleDetail} />
                    })
                }
            </div>
        )
    }
}

export default GetApi