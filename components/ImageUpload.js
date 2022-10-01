import React from "react";
import Uppy from "@uppy/core";
import XHRUpload from "@uppy/xhr-upload";
import { Dashboard } from "@uppy/react";
import '@uppy/core/dist/style.css';
import '@uppy/dashboard/dist/style.css';
import axios from "axios";
import fileDownload from "js-file-download";

class ImageUpload extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            datas: [],
            quality: 50,
            note: "Allowed Image : "+props.config.allowedFileTypes.join(', ') + 
                " | Max images : "+ props.config.maxFileUpload +" | up to "+ 
                props.config.maxUploadSize / 1024 +"MB / Image"
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
        this.uppy.on('upload-success', (file, response) => {
            response.body.map((data) => {
                this.uppy.setFileState(file.id, { uploadURL: data.url })
            })
        })

        this.uppy.on('complete', (response) => {
            var joinedDatas = this.state.datas.concat(response.successful);
            this.setState({ datas: joinedDatas })
        })
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
            <div className="container mx-auto px-4">
                <div className="py-4">
                    <label className="block w-full text-sm text-slate-500 mr-4 py-4 px-4 rounded-full border-0 text-sm font-semibold bg-violet-50 text-violet-700 hover:bg-violet-100" htmlFor="input-quality">
                        Quality : {this.state.quality}
                        <input id="input-quality" className="block w-full accent-violet-700" type="range" name="quantity" min="5" max="90" onInput={this.changeQualityValue} value={this.state.quality} />
                    </label>
                </div>

                <Dashboard 
                    uppy={this.uppy}
                    plugins={['DropTarget']}
                    width='100%'
                    height={400}
                    proudlyDisplayPoweredByUppy={false}
                    note={this.state.note}
                    showLinkToFileUploadResult={true}
                    showProgressDetails={true}
                    showRemoveButtonAfterComplete={true}
                />

                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-4 py-4">
                    {
                        this.state.datas.map(data =>
                            <div key={data.response.body[0].imageId} className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                                <div className="md:flex">
                                    <div className="p-8">
                                        <ul role="list" class="marker:text-violet-400 list-disc pl-2 space-y-1 text-slate-700 text-xs">
                                            <li>Name : {data.data.name}</li>
                                            <li>Size Before : {(data.response.body[0].sizeBefore/1024).toFixed(2)} KB</li>
                                            <li>Size After : {(data.response.body[0].sizeAfter/1024).toFixed(2)} KB</li>
                                            <li>Saved : {data.response.body[0].optimizePercentage}%</li>
                                        </ul>
                                        <div className="flex justify-between pt-4">
                                            <button className="text-xs text-gray-50 px-2 py-2 rounded-full border-0 font-semibold bg-violet-500 hover:bg-violet-700" onClick={() => {this.handleDownload(data.response.body[0].url, data.response.body[0].name)}}>
                                                Download
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
        )
    }
}
export default ImageUpload