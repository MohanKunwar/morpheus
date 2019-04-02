import React from 'react';
import "./ImagesPreview.css";
class ImagesPreview extends React.Component{

    switchButton= () => {
   document.querySelector("#default-upload").click();
    }

    readFile= (e) =>{
    console.log(e.target.files);
     for(let file of e.target.files){
        this.previewFile(file);
     }

    }
    previewFile= (file) =>{
        let filereader= new FileReader();
        filereader.readAsDataURL(file);
        filereader.onloadend= () => {
        let image= document.createElement("img");
        image.src= filereader.result;
        document.querySelector(".preview").prepend(image);
        }
        document.querySelector(".submit").style.display= "block";
    }
    render(){
        return(
            <div className="images-preview">
            <input id="default-upload" type="file" accept="image/*" hidden={true} multiple={true} onChange={this.readFile} />
            <img 
            title="Click To Upload Images"
            className="upload-button" 
            src={require("../../../assets/images/upload.ico")} alt="upload button"
            style={{width: this.props.width || "90px", height: this.props.height || "90px"}} 
            onClick={this.switchButton} /> 
            <div className="preview">
            {/* Preview Images Goes Here */}
            </div>
           <button type="submit" className="submit">Submit</button>
            </div>
        );
    }
}
export default ImagesPreview;