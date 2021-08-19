import React from "react";
import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import { Dashboard } from "@uppy/react";
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import axios from "axios";
import fileDownload from "js-file-download";
import styles from '../styles/ImageUpload.module.css';

class ImageUpload extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            datas: [],
            quality: 50,
            note: "Allowed Image : "+props.config.allowedFileTypes.join(', ') + 
                " | Max images : "+ props.config.maxFileUpload +" | up to "+ 
                props.config.maxUploadSize / 1024 +"MB"
        };

        this.uppy = new Uppy({
            meta: {
                quality: this.state.quality
            },
            restrictions: {
                maxNumberOfFiles: props.config.maxFileUpload,
                maxFileSize: props.config.maxUploadSize * 1024,
                allowedFileTypes: props.config.allowedFileTypes,
            },
            autoProceed: true,
        })
        this.uppy.use(
            XHRUpload, {
                endpoint: props.config.endpoint,
                fieldName: 'images',
                formData: true,
            }
        )

        this.changeQualityValue = this.changeQualityValue.bind(this);
    }

    componentDidMount() {
        this.uppy.on('complete', (response) => {
            var joinedDatas = this.state.datas.concat(response.successful);
            this.setState({ datas: joinedDatas })
        })
    }

    componentWillUnmount () {
        this.uppy.close()
    }
    
    handleDownload = (url, filename) => {
        axios.get(url, {
            responseType: 'blob',
        })
        .then((res) => {
            fileDownload(res.data, filename)
        })
    }
      
    changeQualityValue(e){
        this.setState({
            quality: e.currentTarget.value
        })

        this.uppy.setOptions({
            meta: {
                quality: this.state.quality
            }
        })
    }

    render() {
        return (
            <div className={styles.uploader}>
                <div className={styles.quality}>
                    <label htmlFor="input-quality">Quality : </label>
                    <output htmlFor="quantity">{this.state.quality}</output>
                    <input id="input-quality" className={styles.input} type="range" name="quantity" min="5" max="99" onInput={this.changeQualityValue} value={this.state.quality} />
                </div>

                <Dashboard 
                    uppy={this.uppy}
                    plugins={['DropTarget']}
                    width='100%'
                    height={400}
                    proudlyDisplayPoweredByUppy={false}
                    note={this.state.note}
                />

                <ul className={styles.result}>
                    { 
                        this.state.datas.map(data => 
                            <li key={data.response.body[0].fileId} className={styles.li}>
                                <span key={data.response.body[0].fileId}>{data.data.name} : </span>
                                <span key={data.data.id+data.response.body[0].fileId} className={styles.saved}>
                                    {(data.data.size/1024).toFixed(2)} KB / {(data.response.body[0].size/1024).toFixed(2)} KB ({data.response.body[0].optimizePercentage}%)
                                </span>
                                <button className={styles.download} onClick={() => {this.handleDownload(data.response.body[0].url, data.response.body[0].name)}}>
                                    Download
                                </button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}
export default ImageUpload