import React from "react";
import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import { Dashboard } from "@uppy/react";
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import axios from "axios";
import fileDownload from "js-file-download";
import styles from '../styles/ImageUpload.module.css';

const config = {
    quality: 50,
    maxNumberOfFiles: 5,
    maxFileSize: 8 * 1024 * 1024,
    allowedFileTypes: [".jpg", ".jpeg", ".png"],
    endpoint: "http://localhost:3000/api/v1/optimize",
    fieldName: 'images',
}

class ImageUpload extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            datas: [],
            quality: config.quality
        };
        
        this.uppy = new Uppy({
            meta: {
                quality: this.state.quality
            },
            restrictions: {
                maxNumberOfFiles: config.maxNumberOfFiles,
                maxFileSize: config.maxFileSize,
                allowedFileTypes: config.allowedFileTypes,
            },
            autoProceed: true,
        })
        this.uppy.use(
            XHRUpload, {
                endpoint: config.endpoint,
                fieldName: config.fieldName,
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
                    height={300}
                    proudlyDisplayPoweredByUppy={false}
                />

                <ul className={styles.result}>
                    { 
                        this.state.datas.map(data => 
                            <li key={data.data.id} className={styles.li}>
                                <span>{data.data.name} : </span>
                                <span className={styles.saved}>
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